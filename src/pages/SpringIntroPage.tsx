import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringIntroPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Introducción a Spring Boot</h1>
      <p className="text-text-muted text-lg mb-8">El framework más popular para aplicaciones Java empresariales</p>

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
    </div>
  );
}
