import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function ConcurrenciaPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Concurrencia</h1>
      <p className="text-text-muted text-lg mb-8">Threads, ExecutorService y CompletableFuture</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Crear Threads</h2>
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
    </div>
  );
}
