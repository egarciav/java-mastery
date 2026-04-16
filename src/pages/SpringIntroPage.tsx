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
          <strong className="text-text">Spring Boot</strong> es un framework que simplifica la creación de aplicaciones 
          Java basadas en Spring. Proporciona configuración automática, servidor embebido y un enfoque 
          "opinionado" para que puedas enfocarte en la lógica de negocio.
        </p>
        <InfoBox type="spring" title="Spring vs Spring Boot">
          <strong>Spring Framework</strong> es el ecosistema completo (IoC, AOP, MVC, Data, Security...).
          <strong> Spring Boot</strong> es una capa encima que autoconfigura todo para que arranques rápido.
          Piensa en Spring como Angular y Spring Boot como Angular CLI — te da estructura y convenciones.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Conceptos clave</h2>

        <ThinkSection title="Spring Boot = Angular para el backend">
          <p>
            Si ya conoces Angular, Spring Boot es su equivalente backend: tiene DI con constructores,
            servicios singleton, módulos de configuración, interceptores, guards (Security), y
            un CLI (Spring Initializr). La curva de aprendizaje es suave viniendo de Angular.
          </p>
        </ThinkSection>

        <div className="space-y-4">
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">Inversión de Control (IoC)</h3>
            <p className="text-text-muted text-sm">Spring crea y gestiona los objetos (beans) por ti. Tú no usas <code className="text-primary">new</code> — Spring los inyecta donde los necesitas.</p>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">Inyección de Dependencias (DI)</h3>
            <p className="text-text-muted text-sm">Spring inyecta automáticamente las dependencias en tus clases. Es como el sistema de DI de Angular con <code className="text-primary">@Injectable()</code>.</p>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">Autoconfiguración</h3>
            <p className="text-text-muted text-sm">Spring Boot detecta las dependencias en tu proyecto y configura automáticamente beans, conexiones de BD, seguridad, etc.</p>
          </div>
        </div>
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
