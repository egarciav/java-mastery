import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function StreamsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Streams API</h1>
      <p className="text-text-muted text-lg mb-8">Procesar colecciones de forma funcional y declarativa</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operaciones básicas</h2>
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
    </div>
  );
}
