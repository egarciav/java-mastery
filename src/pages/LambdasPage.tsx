import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function LambdasPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Expresiones Lambda</h1>
      <p className="text-text-muted text-lg mb-8">Funciones anónimas concisas — la base de la programación funcional en Java</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Sintaxis Lambda</h2>
        <CodeBlock filename="Lambdas.java" code={`
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.function.*;

public class Lambdas {
    public static void main(String[] args) {
        // Sintaxis: (parámetros) -> expresión
        // o:        (parámetros) -> { bloque de código }

        // Antes (clase anónima)
        Runnable antiguoHola = new Runnable() {
            @Override
            public void run() { System.out.println("Hola"); }
        };

        // Con lambda (mucho más conciso)
        Runnable hola = () -> System.out.println("Hola");

        // Con un parámetro (paréntesis opcionales)
        Consumer<String> saludar = nombre -> System.out.println("Hola " + nombre);

        // Con múltiples parámetros
        java.util.Comparator<String> porLongitud = (a, b) -> a.length() - b.length();

        // Con bloque de código
        Function<Integer, String> clasificar = edad -> {
            if (edad < 18) return "Menor";
            if (edad < 65) return "Adulto";
            return "Senior";
        };

        // Usar lambdas
        hola.run();                        // "Hola"
        saludar.accept("Carlos");          // "Hola Carlos"
        System.out.println(clasificar.apply(25)); // "Adulto"

        // Ordenar lista con lambda
        List<String> nombres = new ArrayList<>(List.of("Carlos", "Ana", "Luis"));
        Collections.sort(nombres, (a, b) -> a.compareTo(b));
        // O más corto con method reference:
        Collections.sort(nombres, String::compareTo);
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Interfaces funcionales del JDK</h2>
        <CodeBlock filename="InterfacesFuncionales.java" code={`
import java.util.function.*;

public class InterfacesFuncionales {
    public static void main(String[] args) {
        // Predicate<T>: T -> boolean (filtrar)
        Predicate<Integer> esPar = n -> n % 2 == 0;
        System.out.println(esPar.test(4));  // true

        // Function<T, R>: T -> R (transformar)
        Function<String, Integer> longitud = String::length;
        System.out.println(longitud.apply("Hola")); // 4

        // Consumer<T>: T -> void (consumir/ejecutar)
        Consumer<String> imprimir = System.out::println;
        imprimir.accept("Hola mundo");

        // Supplier<T>: () -> T (proveer/crear)
        Supplier<Double> random = Math::random;
        System.out.println(random.get());

        // BiFunction<T, U, R>: (T, U) -> R
        BiFunction<Integer, Integer, Integer> sumar = Integer::sum;
        System.out.println(sumar.apply(3, 4)); // 7

        // Componer funciones
        Function<Integer, Integer> doble = n -> n * 2;
        Function<Integer, Integer> masCinco = n -> n + 5;
        Function<Integer, Integer> dobleMasCinco = doble.andThen(masCinco);
        System.out.println(dobleMasCinco.apply(3)); // 11
    }
}
`} />
        <InfoBox type="angular">
          Las lambdas de Java son como las arrow functions de TypeScript: <code className="text-primary">{"(a, b) => a + b"}</code>.
          La diferencia es que en Java las lambdas solo funcionan donde se espera una interfaz funcional.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Method References (::)</h2>
        <CodeBlock filename="MethodRef.java" code={`
import java.util.List;

public class MethodRef {
    public static void main(String[] args) {
        List<String> nombres = List.of("Ana", "Luis", "Carlos");

        // Lambda           vs  Method Reference
        nombres.forEach(n -> System.out.println(n));
        nombres.forEach(System.out::println);  // más limpio

        // Tipos de method references:
        // 1. Estático:      Integer::parseInt
        // 2. De instancia:  String::toUpperCase
        // 3. De objeto:     System.out::println
        // 4. Constructor:   ArrayList::new
    }
}
`} />
      </section>
    </div>
  );
}
