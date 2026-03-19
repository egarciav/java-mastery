import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringPerfilesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Perfiles y Configuración</h1>
      <p className="text-text-muted text-lg mb-8">Profiles, @Value, @ConfigurationProperties y CORS</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Perfiles de entorno</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Los <strong className="text-text">profiles</strong> permiten tener configuraciones diferentes para desarrollo, 
          pruebas y producción, activándolas con una simple propiedad.
        </p>
        <CodeBlock language="bash" filename="src/main/resources/application.properties" code={`
# Perfil activo (cambiar según entorno)
spring.profiles.active=dev
`} />
        <CodeBlock language="bash" filename="application-dev.properties" code={`
# Configuración de DESARROLLO
spring.datasource.url=jdbc:h2:mem:devdb
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create-drop
server.port=8080
logging.level.com.miapp=DEBUG
spring.h2.console.enabled=true
`} />
        <CodeBlock language="bash" filename="application-prod.properties" code={`
# Configuración de PRODUCCIÓN
spring.datasource.url=jdbc:postgresql://prod-server:5432/miapp
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
spring.jpa.show-sql=false
spring.jpa.hibernate.ddl-auto=validate
server.port=8080
logging.level.root=WARN
spring.h2.console.enabled=false
`} />
        <CodeBlock language="bash" filename="application-test.properties" code={`
# Configuración de TESTS
spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1
spring.jpa.hibernate.ddl-auto=create-drop
logging.level.root=ERROR
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">@Value y @ConfigurationProperties</h2>
        <CodeBlock filename="Configuracion.java" code={`
// @Value: inyectar una propiedad individual
@Service
public class EmailService {

    @Value("\${app.email.from}")
    private String emailFrom;

    @Value("\${app.email.smtp-host:localhost}")  // :localhost es el valor por defecto
    private String smtpHost;

    @Value("\${app.max-file-size:10}")
    private int maxFileSizeMb;
}

// @ConfigurationProperties: agrupar propiedades relacionadas (recomendado)
@ConfigurationProperties(prefix = "app")
@Component
public class AppConfig {
    private String nombre;
    private String version;
    private Email email = new Email();
    private Security security = new Security();

    public record Email(String from, String smtpHost, int smtpPort) {
        public Email() { this("noreply@app.com", "localhost", 587); }
    }
    public record Security(String jwtSecret, int jwtExpiracion) {
        public Security() { this("secret", 86400); }
    }
    // getters y setters...
}
`} />
        <CodeBlock language="bash" filename="application.properties (propiedades custom)" code={`
app.nombre=Mi API
app.version=1.0.0
app.email.from=noreply@miapp.com
app.email.smtp-host=smtp.gmail.com
app.email.smtp-port=587
app.security.jwt-secret=clave-super-secreta-de-produccion
app.security.jwt-expiracion=86400
`} />
        <InfoBox type="tip">
          Usa <code className="text-primary">@ConfigurationProperties</code> sobre <code className="text-primary">@Value</code> para grupos de propiedades — 
          es más limpio, testeable y soporta autocompletado en IDEs. Las propiedades sensibles 
          (passwords, secrets) siempre deben venir de variables de entorno en producción.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">@Profile — Beans por entorno</h2>
        <CodeBlock filename="Beans.java" code={`
// Bean solo activo en desarrollo
@Component
@Profile("dev")
public class DataInitializer implements CommandLineRunner {
    private final UsuarioRepository repository;

    @Override
    public void run(String... args) {
        // Carga datos de prueba al arrancar en dev
        repository.save(new Usuario("Admin", "admin@dev.com"));
        System.out.println("Datos de prueba cargados");
    }
}

// Bean activo en prod y staging
@Service
@Profile({"prod", "staging"})
public class EmailServiceReal implements EmailService {
    // Implementación real con SMTP
}

// Bean activo en todo EXCEPTO prod
@Service
@Profile("!prod")
public class EmailServiceMock implements EmailService {
    // Implementación fake para dev/test
    @Override
    public void enviar(String to, String subject, String body) {
        System.out.println("EMAIL MOCK -> " + to + ": " + subject);
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">CORS — Permitir peticiones desde Angular</h2>
        <CodeBlock filename="CorsConfig.java" code={`
// Configuración global de CORS (para APIs consumidas por frontend)
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins(
                        "http://localhost:4200",   // Angular dev
                        "https://miapp.netlify.app" // prod
                    )
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(true)
                    .maxAge(3600);
            }
        };
    }
}

// Alternativa: @CrossOrigin en el controller (menos recomendado)
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController { ... }
`} />
        <InfoBox type="angular">
          Sin configurar CORS, tu app Angular recibirá <strong>CORS error</strong> al hacer peticiones HTTP. 
          En Angular dev puedes usar un proxy (<code className="text-primary">proxy.conf.json</code>), pero en producción 
          necesitas configurar CORS en Spring obligatoriamente para que el navegador permita las peticiones.
        </InfoBox>
      </section>
    </div>
  );
}
