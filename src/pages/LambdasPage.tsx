import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function LambdasPage() {
  return (
    <div>
      <DayHeader
        day={22}
        title="Expresiones Lambda"
        duration="55 min"
        commitMsg="dia-22: lambdas, interfaces funcionales, method references"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy entras a la programación funcional de Java. Las lambdas (Java 8+) son expresiones que representan
        funciones anónimas — como las arrow functions de TypeScript, pero con una diferencia fundamental:
        en Java solo puedes usar una lambda donde se espera una <strong className="text-text">interfaz funcional</strong>.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es una Lambda?</h2>

        <ThinkSection title="Lambda = arrow function que implementa una interfaz">
          <p>
            En TypeScript: <code className="text-primary">{"const f = (a, b) => a + b"}</code> — puedes asignar
            una función a cualquier variable. Las funciones son ciudadanos de primera clase.
          </p>
          <p>
            En Java, las funciones NO son ciudadanos de primera clase — todo vive dentro de una clase.
            Una lambda es azúcar sintáctico para una <strong className="text-text">clase anónima</strong> que implementa
            una interfaz con un solo método abstracto (llamada <strong className="text-text">interfaz funcional</strong>).
            Es decir, cuando escribes <code className="text-primary">(a, b) -&gt; a + b</code>, Java lo traduce
            internamente a: "crea un objeto que implementa esta interfaz y su único método hace a + b".
          </p>
          <p>
            <strong className="text-text">Interfaces funcionales estándar (java.util.function):</strong>{' '}
            <code className="text-primary">Predicate&lt;T&gt;</code> (T→boolean),{' '}
            <code className="text-primary">Function&lt;T,R&gt;</code> (T→R),{' '}
            <code className="text-primary">Consumer&lt;T&gt;</code> (T→void),{' '}
            <code className="text-primary">Supplier&lt;T&gt;</code> (→T),{' '}
            <code className="text-primary">Comparator&lt;T&gt;</code> (T,T→int).
            Estas cubren el 95% de los casos de uso.
          </p>
        </ThinkSection>

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 22</h2>
        <Exercise
          number={1}
          title="Pipeline de transformación"
          description={`Crea PipelineLambda.java con:
1. Una lista de nombres: "carlos", "ANA", " luis ", "MARÍA", " pedro "
2. Usa lambdas para: trim → toLowerCase → capitalize (primera letra mayúscula)
3. Filtra los que tengan más de 4 letras
4. Ordénalos alfabéticamente
5. Imprime el resultado

Todo con lambdas, sin bucles for.`}
          hint="Usa List.stream().map(String::trim).map(String::toLowerCase).map(s -> ...).filter(...).sorted().forEach(...);"
          solution={`import java.util.*;
import java.util.stream.*;

public class PipelineLambda {
    public static void main(String[] args) {
        List<String> nombres = List.of("carlos", "ANA", " luis ", "MARÍA", " pedro ");

        nombres.stream()
            .map(String::trim)
            .map(String::toLowerCase)
            .map(s -> s.substring(0, 1).toUpperCase() + s.substring(1))
            .filter(s -> s.length() > 4)
            .sorted()
            .forEach(System.out::println);
        // Carlos, María, Pedro
    }
}`}
          solutionFilename="PipelineLambda.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-22: lambdas, interfaces funcionales, method references"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 23</strong> — Streams API: filter, map, reduce, collect.
          </p>
        </div>
      </section>
    </div>
  );
}
