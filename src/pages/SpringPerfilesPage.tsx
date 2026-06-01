import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringPerfilesPage() {
  return (
    <div>
      <DayHeader
        day={45}
        title="Perfiles y Configuración"
        duration="50 min"
        commitMsg="dia-45: profiles, @Value, @ConfigurationProperties, CORS"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Último día del roadmap. Hoy aprenderás a configurar tu aplicación para diferentes entornos
        (desarrollo, testing, producción) usando perfiles, a externalizar configuración de forma segura,
        y a configurar CORS para que tu frontend Angular pueda comunicarse con tu API Spring Boot.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Perfiles de entorno (Profiles)</h2>

        <ThinkSection title="Profiles: el mismo JAR, múltiples entornos sin recompilar">
          <p>
            En Angular los environments se compilan en el bundle — necesitas <code className="text-primary">ng build --configuration=production</code>
            para cada entorno. En Spring Boot el enfoque es diferente y más flexible: compilas <strong className="text-text">una vez</strong>
            y el mismo JAR funciona en desarrollo, staging, y producción activando el perfil correcto.
          </p>
          <p>
            <strong className="text-text">Cómo funciona:</strong> creas archivos
            <code className="text-primary"> application.properties</code> (base),
            <code className="text-primary"> application-dev.properties</code> (sobreescribe para dev),
            <code className="text-primary"> application-prod.properties</code> (sobreescribe para prod).
            Spring carga el base más el del perfil activo. El perfil activo se define con:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>Variable de entorno: <code className="text-primary">SPRING_PROFILES_ACTIVE=prod</code></li>
            <li>Argumento JVM: <code className="text-primary">java -jar app.jar --spring.profiles.active=prod</code></li>
            <li>En tests: <code className="text-primary">@ActiveProfiles("test")</code></li>
          </ul>
          <p>
            <strong className="text-text">Secretos y variables sensibles:</strong> nunca pongas contraseñas,
            API keys, o connection strings en el código fuente o en archivos commiteados. Usa variables de
            entorno del sistema operativo (<code className="text-primary">{"${DB_PASSWORD}"}</code> en
            <code className="text-primary"> application-prod.properties</code>) o servicios como AWS Secrets
            Manager, Vault, o las variables de entorno de tu plataforma de deploy (Railway, Heroku, etc.).
          </p>
          <p>
            <strong className="text-text">Caso de uso típico:</strong> en dev usas H2 (BD en memoria, sin instalar nada),
            en prod usas PostgreSQL. Con profiles, solo cambias las propiedades de conexión —
            el código Java no cambia nada.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Los <strong className="text-text">profiles</strong> permiten tener configuraciones completamente diferentes para
          cada entorno: BD en memoria para desarrollo (H2), BD real para producción (PostgreSQL), diferentes
          puertos, niveles de log, etc. Se activan con una sola propiedad o variable de entorno.
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 45</h2>
        <Exercise
          number={1}
          title="Configuración completa por entorno"
          description={`Configura tu proyecto con:
1. application-dev.properties (H2, DEBUG, puerto 8080)
2. application-prod.properties (PostgreSQL con env vars, WARN, puerto 8080)
3. CorsConfig que permita http://localhost:4200 en dev
4. DataInitializer con @Profile("dev") que cargue datos de prueba
5. @ConfigurationProperties para propiedades custom de tu app`}
          hint='spring.profiles.active=dev en application.properties. @Profile("dev") en DataInitializer.'
          solution={`// application-dev.properties
// spring.datasource.url=jdbc:h2:mem:devdb
// spring.jpa.show-sql=true
// spring.h2.console.enabled=true

@Component
@Profile("dev")
public class DataInitializer implements CommandLineRunner {
    private final ProductoRepository repo;
    public DataInitializer(ProductoRepository repo) { this.repo = repo; }

    @Override
    public void run(String... args) {
        repo.save(new Producto("Laptop", 1200, "Tech"));
        repo.save(new Producto("Mouse", 25, "Tech"));
        System.out.println("Datos dev cargados");
    }
}

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer cors() {
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry reg) {
                reg.addMapping("/api/**")
                    .allowedOrigins("http://localhost:4200")
                    .allowedMethods("*");
            }
        };
    }
}`}
          solutionFilename="DataInitializer.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-45: profiles, CORS, ConfigurationProperties - ROADMAP COMPLETO!"`} />
          <p className="text-text-muted text-xs mt-2">
            🎉 <strong className="text-text">Felicidades!</strong> Has completado los 45 días del roadmap Java + Spring Boot.
          </p>
        </div>
      </section>
    </div>
  );
}
