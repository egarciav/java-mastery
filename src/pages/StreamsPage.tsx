import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function StreamsPage() {
  return (
    <div>
      <DayHeader
        day={23}
        title="Streams API"
        duration="60 min"
        commitMsg="dia-23: streams, filter, map, reduce, collect, groupingBy"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy dominarás la Streams API — la herramienta más poderosa para procesar colecciones.
        Es como RxJS pipe() pero para datos en memoria.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operaciones básicas</h2>

        <ThinkSection title="Stream = pipeline de datos (como RxJS pipe)">
          <p>
            En Angular usas <code className="text-primary">pipe(filter(), map())</code> con observables.
            En Java, <code className="text-primary">.stream().filter().map().collect()</code> es lo mismo pero para datos en memoria.
          </p>
          <p>
            Diferencia clave: los Streams se consumen <strong className="text-text">una sola vez</strong> y son lazy
            (no procesan hasta la operación terminal). Son síncronos, no reactivos.
          </p>
        </ThinkSection>

        <CodeBlock filename="StreamsBasico.java" code={`
import java.util.List;
import java.util.stream.Collectors;

public class StreamsBasico {
    public static void main(String[] args) {
        List<String> nombres = List.of("Carlos", "Ana", "Luis", "María", "Pedro");

        // filter: filtrar elementos
        List<String> largos = nombres.stream()
            .filter(n -> n.length() > 4)
            .collect(Collectors.toList());
        // ["Carlos", "María", "Pedro"]

        // map: transformar elementos
        List<String> mayusculas = nombres.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        // ["CARLOS", "ANA", "LUIS", "MARÍA", "PEDRO"]

        // forEach: ejecutar acción por elemento
        nombres.stream()
            .filter(n -> n.startsWith("C"))
            .forEach(System.out::println); // "Carlos"

        // sorted: ordenar
        List<String> ordenados = nombres.stream()
            .sorted()
            .collect(Collectors.toList());

        // distinct: eliminar duplicados
        // limit: tomar los primeros N
        // skip: saltar los primeros N
        List<String> primeros2 = nombres.stream()
            .sorted()
            .limit(2)
            .collect(Collectors.toList()); // ["Ana", "Carlos"]
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operaciones terminales</h2>
        <CodeBlock filename="StreamsTerminal.java" code={`
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class StreamsTerminal {
    public static void main(String[] args) {
        List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // reduce: acumular en un solo valor
        int suma = numeros.stream().reduce(0, Integer::sum); // 55

        // count
        long pares = numeros.stream().filter(n -> n % 2 == 0).count(); // 5

        // findFirst / findAny
        Optional<Integer> primero = numeros.stream()
            .filter(n -> n > 5)
            .findFirst(); // Optional[6]

        // anyMatch / allMatch / noneMatch
        boolean hayMayorQue5 = numeros.stream().anyMatch(n -> n > 5);   // true
        boolean todosMayorQue0 = numeros.stream().allMatch(n -> n > 0); // true

        // min / max
        Optional<Integer> maximo = numeros.stream().max(Integer::compareTo); // 10

        // collect a Map
        List<String> nombres = List.of("Ana", "Luis", "Carlos");
        var porLetra = nombres.stream()
            .collect(Collectors.groupingBy(n -> n.charAt(0)));
        // {A=[Ana], L=[Luis], C=[Carlos]}

        // joining
        String unidos = nombres.stream()
            .collect(Collectors.joining(", ")); // "Ana, Luis, Carlos"

        // toList() shorthand (Java 16+)
        List<Integer> dobles = numeros.stream()
            .map(n -> n * 2)
            .toList(); // inmutable
    }
}
`} />
        <InfoBox type="angular">
          Los Streams de Java son como los operadores RxJS en Angular: <code className="text-primary">pipe(filter(), map())</code>.
          La diferencia es que los Streams son para datos en memoria y se ejecutan una sola vez,
          mientras que RxJS maneja flujos asíncronos y observables.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 23</h2>
        <Exercise
          number={1}
          title="Reporte de ventas con Streams"
          description={`Crea ReporteVentas.java con record Venta(String producto, double monto, String categoria).
Usa Streams para: total ventas, venta más cara, agrupar por categoría, top 3, productos únicos.`}
          hint="Usa mapToDouble().sum(), max(), Collectors.groupingBy(), sorted().limit(), map().distinct().count()"
          solution={`import java.util.*;
import java.util.stream.*;

public class ReporteVentas {
    record Venta(String producto, double monto, String cat) {}
    public static void main(String[] args) {
        var v = List.of(new Venta("Laptop",1200,"Tech"), new Venta("Mouse",25,"Tech"),
            new Venta("Camisa",45,"Ropa"), new Venta("Monitor",450,"Tech"));
        System.out.println("Total: " + v.stream().mapToDouble(Venta::monto).sum());
        v.stream().max(Comparator.comparingDouble(Venta::monto)).ifPresent(System.out::println);
        v.stream().collect(Collectors.groupingBy(Venta::cat, Collectors.summingDouble(Venta::monto)))
            .forEach((c,s) -> System.out.printf("%s: $%.2f%n", c, s));
    }
}`}
          solutionFilename="ReporteVentas.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-23: streams filter, map, reduce, collect, groupingBy"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 24</strong> — Optional: adiós NullPointerException.
          </p>
        </div>
      </section>
    </div>
  );
}
