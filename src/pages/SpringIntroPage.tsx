import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringIntroPage() {
  return (
    <div>
      <DayHeader
        day={34}
        title="Introducción a Spring Boot"
        duration="45 min"
        commitMsg="dia-34: intro Spring Boot, IoC, DI, arquitectura"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy empiezas Spring Boot — el framework más usado en Java empresarial.
        Si vienes de Angular, te sentirás como en casa: DI, servicios, módulos.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es Spring Boot?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          <strong className="text-text">Spring Boot</strong> es un framework de Java que te permite crear aplicaciones
          backend (APIs REST, microservicios, aplicaciones web) con mínima configuración. Está construido
          sobre el ecosistema Spring Framework y automatiza todo lo tedioso: configurar servidores,
          conectar bases de datos, manejar seguridad, serializar JSON, etc.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          Sin Spring Boot, necesitarías configurar manualmente un servidor Tomcat, definir archivos XML de configuración,
          y escribir cientos de líneas de boilerplate. Con Spring Boot, una sola anotación y un archivo de propiedades
          son suficientes para tener una API REST funcionando con conexión a base de datos.
        </p>
        <InfoBox type="spring" title="Spring Framework vs Spring Boot — ¿Cuál es la diferencia?">
          <strong>Spring Framework</strong> es el ecosistema completo de bibliotecas: IoC container, AOP, Spring MVC,
          Spring Data, Spring Security, Spring Cloud, etc. Es enorme y flexible, pero requiere mucha configuración manual.
          <strong> Spring Boot</strong> es una capa de conveniencia que autoconfigura Spring Framework con "opiniones sensatas"
          (defaults inteligentes). Piensa en Spring como Angular y Spring Boot como Angular CLI + Schematics — te da
          estructura, convenciones y código generado para que arranques en minutos.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Los 3 pilares: IoC, DI y Autoconfiguración</h2>

        <ThinkSection title="Spring Boot = Angular para el backend — las analogías exactas">
          <p>
            Si ya conoces Angular, Spring Boot es conceptualmente muy familiar. Las analogías son directas:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Angular <code className="text-primary">@Injectable()</code></strong> → Spring <code className="text-primary">@Service</code> / <code className="text-primary">@Component</code>: marca una clase para que el framework la gestione como singleton.</li>
            <li><strong className="text-text">Angular Module providers</strong> → Spring <code className="text-primary">@Configuration</code> + <code className="text-primary">@Bean</code>: configura objetos en el contenedor.</li>
            <li><strong className="text-text">Angular HTTP Interceptors</strong> → Spring Filters / HandlerInterceptor: intercepta peticiones antes/después del procesamiento.</li>
            <li><strong className="text-text">Angular CanActivate Guards</strong> → Spring Security <code className="text-primary">SecurityFilterChain</code>: decide si la petición puede continuar.</li>
            <li><strong className="text-text">Angular CLI (<code className="text-primary">ng new</code>)</strong> → Spring Initializr (start.spring.io): genera el proyecto con la estructura base.</li>
            <li><strong className="text-text">Angular <code className="text-primary">environment.ts</code></strong> → Spring <code className="text-primary">application.properties</code> / perfiles: configuración por entorno.</li>
          </ul>
          <p>
            <strong className="text-text">La diferencia filosófica clave:</strong> Angular es un framework
            <em> frontend</em> — gestiona componentes de UI, routing en el browser, y estado visual.
            Spring Boot es un framework <em>backend</em> — gestiona peticiones HTTP, lógica de negocio,
            persistencia de datos y seguridad. Son las dos caras del mismo paradigma de desarrollo moderno.
          </p>
          <p>
            <strong className="text-text">Los 3 pilares fundamentales de Spring</strong> que todo lo demás construye:
            <strong className="text-text"> IoC</strong> (el framework crea y gestiona objetos),
            <strong className="text-text"> DI</strong> (el framework inyecta dependencias automáticamente), y
            <strong className="text-text"> Autoconfiguración</strong> (detecta qué tienes en classpath y
            configura lo necesario sin que escribas código de setup).
          </p>
        </ThinkSection>

        <div className="space-y-4">
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">1. Inversión de Control (IoC) — "No llames, yo te llamo"</h3>
            <p className="text-text-muted text-sm mb-2">
              En programación tradicional, TÚ creas objetos con <code className="text-primary">new MiServicio()</code>.
              Con IoC, el <strong className="text-text">contenedor de Spring</strong> crea los objetos por ti y los gestiona.
              Tú solo dices "necesito un UsuarioService" y Spring te lo da ya creado y configurado.
            </p>
            <p className="text-text-muted text-sm">
              Los objetos gestionados por Spring se llaman <strong className="text-text">beans</strong>. Spring los crea al arrancar
              la aplicación, los guarda en su contenedor (ApplicationContext), y los destruye cuando la app se detiene.
              Por defecto, cada bean es <strong className="text-text">singleton</strong> — solo existe una instancia compartida.
            </p>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">2. Inyección de Dependencias (DI) — "Te paso lo que necesitas"</h3>
            <p className="text-text-muted text-sm mb-2">
              Cuando tu clase necesita otra clase para funcionar (ej: un Controller necesita un Service),
              Spring detecta esa dependencia y la <strong className="text-text">inyecta automáticamente</strong> por el constructor.
              No necesitas buscarla ni crearla — Spring la pone ahí.
            </p>
            <p className="text-text-muted text-sm">
              Esto es idéntico a Angular: cuando pones <code className="text-primary">constructor(private userService: UserService)</code>
              en un componente, Angular inyecta el servicio. En Spring:
              <code className="text-primary"> public MiController(MiService service)</code> hace lo mismo.
            </p>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">3. Autoconfiguración — "Adivino qué necesitas"</h3>
            <p className="text-text-muted text-sm mb-2">
              Spring Boot escanea las dependencias de tu <code className="text-primary">pom.xml</code> y configura beans
              automáticamente. Si detecta <code className="text-primary">spring-boot-starter-data-jpa</code> + un driver H2,
              crea automáticamente un DataSource, un EntityManager, y habilita repositorios JPA.
            </p>
            <p className="text-text-muted text-sm">
              Si detecta <code className="text-primary">spring-boot-starter-web</code>, arranca un servidor Tomcat embebido
              en el puerto 8080. Si detecta <code className="text-primary">spring-boot-starter-security</code>, protege
              todos los endpoints con autenticación básica. Todo sin que escribas una línea de configuración.
            </p>
          </div>
        </div>

        <CodeBlock filename="Ejemplo: DI en acción" code={`
// Spring crea este bean automáticamente por la anotación @Service
@Service
public class UsuarioService {
    private final UsuarioRepository repository;

    // Spring ve que necesitas un UsuarioRepository y lo inyecta aquí
    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }
}

// El Controller recibe el Service inyectado
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService service;

    // Spring inyecta el UsuarioService automáticamente
    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Usuario> listar() {
        return service.listarTodos();
    }
}
`} />

        <InfoBox type="tip" title="¿Cómo sabe Spring qué inyectar?">
          Spring busca en su contenedor un bean cuyo tipo coincida con el parámetro del constructor.
          Si tu constructor pide un <code className="text-primary">UsuarioService</code>, Spring busca un bean de tipo
          UsuarioService. Si encuentra exactamente uno, lo inyecta. Si hay varios del mismo tipo,
          necesitas <code className="text-primary">@Primary</code> o <code className="text-primary">@Qualifier</code> para desambiguar.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Arquitectura típica</h2>
        <CodeBlock language="bash" filename="Estructura del proyecto" code={`
src/main/java/com/miapp/
├── MiAppApplication.java      # Punto de entrada (@SpringBootApplication)
├── controller/                 # Recibe peticiones HTTP (como Angular components)
│   └── UsuarioController.java
├── service/                    # Lógica de negocio (como Angular services)
│   └── UsuarioService.java
├── repository/                 # Acceso a datos (como Angular HttpClient)
│   └── UsuarioRepository.java
├── model/                      # Entidades/DTOs (como Angular interfaces/models)
│   └── Usuario.java
└── config/                     # Configuración personalizada
    └── SecurityConfig.java

src/main/resources/
├── application.properties      # Configuración (puerto, BD, etc.)
└── static/                     # Archivos estáticos
`} />
        <InfoBox type="angular">
          La arquitectura de Spring Boot es muy similar a Angular: <strong>Controller</strong> = Component (recibe input),
          <strong> Service</strong> = Service (lógica), <strong>Repository</strong> = HttpClient (datos),
          <strong> Model</strong> = Interface/Class (tipos).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 34</h2>
        <Exercise
          number={1}
          title="Mapear la arquitectura Angular → Spring"
          description={`Sin código, responde mentalmente:
1. ¿Qué capa de Spring corresponde a un Angular Component?
2. ¿Qué capa corresponde a un Angular Service?
3. ¿Qué capa corresponde a HttpClient?
4. ¿Qué archivo equivale a package.json?
5. ¿Qué anotación equivale a @Injectable()?`}
          hint="Controller = Component, Service = Service, Repository = HttpClient, pom.xml = package.json"
          solution={`Respuestas:
1. @RestController = Angular Component (recibe input del usuario/HTTP)
2. @Service = Angular Service (lógica de negocio)
3. @Repository = HttpClient (acceso a datos/BD)
4. pom.xml (Maven) = package.json (npm)
5. @Service / @Component = @Injectable()

Bonus: application.properties = environment.ts
        @Configuration = AppModule
        Spring Security = Route Guards`}
          solutionFilename="respuestas.txt"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-34: intro Spring Boot, IoC, DI, arquitectura"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 35</strong> — Setup: crear proyecto con Spring Initializr.
          </p>
        </div>
      </section>
    </div>
  );
}
