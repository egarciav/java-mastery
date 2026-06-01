import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function ConcurrenciaPage() {
  return (
    <div>
      <DayHeader
        day={25}
        title="Concurrencia"
        duration="60 min"
        commitMsg="dia-25: threads, ExecutorService, CompletableFuture"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy entras al mundo de la concurrencia — uno de los temas más importantes y complejos de Java.
        Entender threads es clave porque en Spring Boot, <strong className="text-text">cada petición HTTP corre en su propio
        hilo</strong>. Si tu código no es thread-safe, tendrás bugs que solo aparecen en producción bajo carga.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es un Thread y por qué importa?</h2>

        <ThinkSection title="Java = multi-threaded real vs el event loop de JavaScript">
          <p>
            En JavaScript/TypeScript todo es <strong className="text-text">single-threaded con event loop</strong>:
            un solo hilo ejecuta tu código. Las operaciones "asíncronas" (fetch, setTimeout) son manejadas
            por APIs del navegador/Node.js fuera del hilo principal. Nunca hay dos funciones de tu código
            ejecutándose literalmente en paralelo — el async/await es concurrente, no paralelo.
          </p>
          <p>
            En Java, puedes crear <strong className="text-text">hilos reales del sistema operativo</strong> que
            el SO asigna a diferentes cores de CPU. Dos threads pueden ejecutar código Java simultáneamente
            en el mismo proceso. Esto permite:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Paralelismo real</strong>: procesar datos en múltiples cores simultáneamente</li>
            <li><strong className="text-text">I/O no bloqueante</strong>: mientras un hilo espera una respuesta de BD, otro sigue procesando requests</li>
            <li><strong className="text-text">Tareas en background</strong>: enviar emails, generar reportes, sin bloquear el response al cliente</li>
          </ul>
          <p>
            <strong className="text-text">El costo: race conditions</strong>. Si dos hilos leen y modifican la
            misma variable al mismo tiempo, el resultado es impredecible. Esto no ocurre en JavaScript
            por diseño, pero en Java debes gestionarlo con <code className="text-primary">synchronized</code>,
            locks, o usando clases thread-safe como <code className="text-primary">AtomicInteger</code>,
            <code className="text-primary"> ConcurrentHashMap</code>.
          </p>
          <p>
            <strong className="text-text">Regla de oro moderna:</strong> nunca uses <code className="text-primary">new Thread()</code>
            directamente en producción. Usa:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">ExecutorService</code>: pool de hilos reutilizables, evita crear/destruir hilos continuamente</li>
            <li><code className="text-primary">CompletableFuture</code>: programación asíncrona declarativa, similar a Promises de JS</li>
            <li><strong className="text-text">Virtual Threads</strong> (Java 21+): para el máximo rendimiento en I/O (Día 30)</li>
          </ul>
        </ThinkSection>

        <CodeBlock filename="Threads.java" code={`
public class Threads {
    public static void main(String[] args) throws InterruptedException {
        // Opción 1: Runnable con lambda
        Thread t1 = new Thread(() -> {
            System.out.println("Hilo 1: " + Thread.currentThread().getName());
        });
        t1.start(); // NO uses t1.run() — eso ejecuta en el hilo actual

        // Opción 2: Extender Thread (menos común)
        Thread t2 = new Thread() {
            @Override
            public void run() {
                System.out.println("Hilo 2 ejecutándose");
            }
        };
        t2.start();

        // join: esperar a que el hilo termine
        t1.join();
        t2.join();
        System.out.println("Ambos hilos terminaron");

        // sleep: pausar el hilo actual
        Thread.sleep(1000); // 1 segundo
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">ExecutorService (recomendado)</h2>
        <CodeBlock filename="Executor.java" code={`
import java.util.concurrent.*;

public class Executor {
    public static void main(String[] args) throws Exception {
        // Pool de hilos: reutiliza hilos en lugar de crear nuevos
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // submit Runnable (sin retorno)
        executor.submit(() -> System.out.println("Tarea 1"));

        // submit Callable (con retorno)
        Future<String> futuro = executor.submit(() -> {
            Thread.sleep(1000);
            return "Resultado";
        });

        // get() bloquea hasta obtener el resultado
        String resultado = futuro.get(); // "Resultado"

        // SIEMPRE cerrar el executor
        executor.shutdown();
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">CompletableFuture (async moderno)</h2>
        <CodeBlock filename="CompletableFutureEjemplo.java" code={`
import java.util.concurrent.CompletableFuture;

public class CompletableFutureEjemplo {
    public static void main(String[] args) {
        // Ejecutar algo async y encadenar
        CompletableFuture.supplyAsync(() -> "Hola")
            .thenApply(s -> s + " Mundo")           // transformar
            .thenApply(String::toUpperCase)          // otra transformación
            .thenAccept(System.out::println);        // consumir: "HOLA MUNDO"

        // Combinar dos futuros
        CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "Java");
        CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "Spring");

        f1.thenCombine(f2, (a, b) -> a + " + " + b)
          .thenAccept(System.out::println); // "Java + Spring"

        // Manejar errores
        CompletableFuture.supplyAsync(() -> {
            if (true) throw new RuntimeException("Error!");
            return "OK";
        })
        .exceptionally(ex -> "Error manejado: " + ex.getMessage())
        .thenAccept(System.out::println);

        // Esperar a que todo termine
        CompletableFuture.allOf(f1, f2).join();
    }
}
`} />
        <InfoBox type="angular">
          CompletableFuture es similar a las <code className="text-primary">Promise</code> de TypeScript.
          <code className="text-primary"> thenApply</code> = <code className="text-primary">.then()</code>,
          <code className="text-primary"> exceptionally</code> = <code className="text-primary">.catch()</code>,
          <code className="text-primary"> allOf</code> = <code className="text-primary">Promise.all()</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 25</h2>
        <Exercise
          number={1}
          title="Descarga paralela simulada"
          description={`Simula descargar 5 archivos en paralelo con CompletableFuture:
1. Cada "descarga" es un Thread.sleep(random 1-3 segundos)
2. Imprime cuándo empieza y termina cada descarga
3. Mide el tiempo total (debe ser ~3s, no 5×3s)
4. Usa CompletableFuture.allOf() para esperar a todos`}
          hint="CompletableFuture.supplyAsync(() -> { Thread.sleep(...); return archivo; })"
          solution={`import java.util.concurrent.*;
import java.util.*;

public class DescargaParalela {
    static String descargar(String archivo) {
        try {
            int ms = 1000 + new Random().nextInt(2000);
            System.out.printf("[%s] Descargando %s...%n",
                Thread.currentThread().getName(), archivo);
            Thread.sleep(ms);
            return archivo + " (" + ms + "ms)";
        } catch (InterruptedException e) { throw new RuntimeException(e); }
    }

    public static void main(String[] args) {
        long inicio = System.currentTimeMillis();
        List<String> archivos = List.of("app.jar","data.csv","img.png","log.txt","config.xml");

        CompletableFuture<?>[] futuros = archivos.stream()
            .map(a -> CompletableFuture.supplyAsync(() -> descargar(a))
                .thenAccept(r -> System.out.println("Completado: " + r)))
            .toArray(CompletableFuture[]::new);

        CompletableFuture.allOf(futuros).join();
        System.out.printf("Total: %dms%n", System.currentTimeMillis() - inicio);
    }
}`}
          solutionFilename="DescargaParalela.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-25: threads, ExecutorService, CompletableFuture"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 26</strong> — Virtual Threads: millones de hilos con Java 21.
          </p>
        </div>
      </section>
    </div>
  );
}
