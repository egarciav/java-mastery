import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function VirtualThreadsPage() {
  return (
    <div>
      <DayHeader
        day={26}
        title="Virtual Threads"
        duration="45 min"
        commitMsg="dia-26: virtual threads Java 21, Spring Boot integration"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy descubrirás Virtual Threads — la revolución de Java 21 (Project Loom).
        Millones de hilos ligeros que simplifican la concurrencia para apps I/O-bound.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué Virtual Threads?</h2>

        <ThinkSection title="Virtual Threads = async/await sin cambiar tu código">
          <p>
            En Node.js usas async/await para no bloquear el event loop. En Java clásico,
            cada thread bloqueante consume ~1MB de RAM del SO. Con Virtual Threads,
            puedes escribir código bloqueante normal y la JVM lo hace eficiente internamente.
          </p>
          <p>
            Es como tener lo mejor de ambos mundos: código síncrono simple + eficiencia asíncrona.
          </p>
        </ThinkSection>

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 26</h2>
        <Exercise
          number={1}
          title="Benchmark: Platform vs Virtual Threads"
          description={`Crea un benchmark que:
1. Lance 10,000 tareas que duermen 100ms cada una (simulando I/O)
2. Primero con Executors.newFixedThreadPool(100)
3. Luego con Executors.newVirtualThreadPerTaskExecutor()
4. Mide y compara el tiempo total de ambos enfoques`}
          hint="Usa System.currentTimeMillis() antes y después. El pool fijo tardará ~10s, virtual threads ~100ms."
          solution={`import java.util.concurrent.*;
import java.time.*;

public class BenchmarkThreads {
    static void benchmark(String nombre, ExecutorService executor) throws Exception {
        long inicio = System.currentTimeMillis();
        for (int i = 0; i < 10_000; i++) {
            executor.submit(() -> {
                try { Thread.sleep(100); }
                catch (InterruptedException e) { throw new RuntimeException(e); }
            });
        }
        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.MINUTES);
        long ms = System.currentTimeMillis() - inicio;
        System.out.printf("%s: %dms%n", nombre, ms);
    }

    public static void main(String[] args) throws Exception {
        benchmark("FixedPool(100)", Executors.newFixedThreadPool(100));
        benchmark("VirtualThreads", Executors.newVirtualThreadPerTaskExecutor());
    }
}`}
          solutionFilename="BenchmarkThreads.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-26: virtual threads, benchmark, Spring Boot config"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 27</strong> — I/O y archivos: leer, escribir, Path, Files.
          </p>
        </div>
      </section>
    </div>
  );
}
