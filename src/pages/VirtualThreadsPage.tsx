import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function VirtualThreadsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Virtual Threads</h1>
      <p className="text-text-muted text-lg mb-8">Project Loom — hilos virtuales de Java 21 (LTS)</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué Virtual Threads?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Los <strong className="text-text">hilos de plataforma</strong> (threads clásicos) son costosos: cada uno ocupa ~1MB de memoria 
          del SO. Una JVM puede manejar unos pocos miles. Con <strong className="text-text">Virtual Threads</strong>, puedes crear 
          millones porque son gestionados por la JVM, no por el sistema operativo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">Hilos de plataforma (antes)</h3>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• ~1MB por hilo (stack del SO)</li>
              <li>• Máximo ~10,000 hilos prácticos</li>
              <li>• Context switch costoso</li>
              <li>• Limitante para apps I/O-bound</li>
            </ul>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">Virtual Threads (Java 21)</h3>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• Muy ligeros (~KB por hilo)</li>
              <li>• Millones de hilos posibles</li>
              <li>• Gestionados por la JVM</li>
              <li>• Ideal para apps I/O-bound (REST, BD)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Crear Virtual Threads</h2>
        <CodeBlock filename="VirtualThreads.java" code={`
// Crear un virtual thread (Java 21)
Thread vt = Thread.ofVirtual().start(() -> {
    System.out.println("Ejecutando en virtual thread: " + Thread.currentThread());
});
vt.join();

// Thread.startVirtualThread() — forma corta
Thread.startVirtualThread(() -> System.out.println("Hola desde virtual thread!"));

// ExecutorService con virtual threads (la forma más común)
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    // Cada tarea corre en su propio virtual thread
    for (int i = 0; i < 10_000; i++) {
        final int id = i;
        executor.submit(() -> {
            // Simular I/O (ej: llamada a BD, HTTP request)
            Thread.sleep(Duration.ofMillis(100));
            System.out.println("Tarea " + id + " completada");
        });
    }
} // auto-shutdown con try-with-resources

// Comparación directa
// Hilos de plataforma: 1,000 hilos = ~1GB RAM
// Virtual Threads: 1,000,000 hilos = ~100MB RAM
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Virtual Threads en Spring Boot</h2>
        <CodeBlock language="bash" filename="application.properties" code={`
# Habilitar virtual threads en Spring Boot 3.2+ (Java 21)
spring.threads.virtual.enabled=true

# Esto hace que Spring use virtual threads automáticamente para:
# - Peticiones HTTP (Tomcat/Jetty)
# - @Async tasks
# - @Scheduled tasks
# ¡Sin cambiar ningún código de tu aplicación!
`} />
        <CodeBlock filename="Config.java" code={`
// Alternativa: configurar manualmente
@Configuration
public class ThreadConfig {

    @Bean
    public TomcatProtocolHandlerCustomizer<?> virtualThreadsProtocolHandler() {
        return handler ->
            handler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
    }
}

// Verificar si un thread es virtual
Thread t = Thread.currentThread();
System.out.println(t.isVirtual()); // true si es virtual thread
`} />
        <InfoBox type="spring">
          Con Spring Boot 3.2+ y Java 21, solo necesitas <code className="text-primary">spring.threads.virtual.enabled=true</code> en 
          tu <code className="text-primary">application.properties</code>. Spring maneja todo automáticamente. 
          Tu API REST puede manejar miles de peticiones concurrentes bloqueantes sin cambiar ningún código.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Cuándo usar Virtual Threads?</h2>
        <InfoBox type="tip">
          <strong>Ideal para</strong>: aplicaciones I/O-bound (APIs REST, acceso a BD, llamadas HTTP externas).
          <br /><br />
          <strong>No reemplaza</strong>: <code className="text-primary">CompletableFuture</code> o reactive programming para lógica 
          async compleja. Si ya tienes un sistema reactivo (WebFlux), no necesitas migrar.
          <br /><br />
          <strong>Regla simple</strong>: si usas Spring Boot con operaciones bloqueantes (JPA, RestTemplate, etc.), 
          habilita virtual threads y obtendrás mayor throughput sin código adicional.
        </InfoBox>
      </section>
    </div>
  );
}
