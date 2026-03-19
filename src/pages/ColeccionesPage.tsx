import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function ColeccionesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Colecciones</h1>
      <p className="text-text-muted text-lg mb-8">Estructuras de datos dinámicas: List, Set, Map y Queue</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">ArrayList — Lista dinámica</h2>
        <CodeBlock filename="ListaEjemplo.java" code={`
import java.util.ArrayList;
import java.util.List;

public class ListaEjemplo {
    public static void main(String[] args) {
        // Crear lista tipada con generics
        List<String> nombres = new ArrayList<>();
        nombres.add("Carlos");
        nombres.add("Ana");
        nombres.add("Luis");

        // Acceder por índice
        System.out.println(nombres.get(0)); // "Carlos"
        System.out.println(nombres.size()); // 3

        // Modificar y eliminar
        nombres.set(1, "María");     // reemplaza "Ana"
        nombres.remove("Luis");      // elimina por valor
        nombres.remove(0);           // elimina por índice

        // Verificar
        System.out.println(nombres.contains("María")); // true
        System.out.println(nombres.isEmpty());          // false

        // Recorrer
        for (String nombre : nombres) {
            System.out.println(nombre);
        }

        // List.of() — lista INMUTABLE (Java 9+)
        List<String> fija = List.of("A", "B", "C");
        // fija.add("D"); // ERROR: UnsupportedOperationException
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">HashMap — Diccionario clave-valor</h2>
        <CodeBlock filename="MapaEjemplo.java" code={`
import java.util.HashMap;
import java.util.Map;

public class MapaEjemplo {
    public static void main(String[] args) {
        Map<String, Integer> edades = new HashMap<>();
        edades.put("Carlos", 25);
        edades.put("Ana", 30);
        edades.put("Luis", 22);

        System.out.println(edades.get("Ana"));            // 30
        System.out.println(edades.getOrDefault("Pedro", 0)); // 0
        System.out.println(edades.containsKey("Carlos"));    // true
        System.out.println(edades.size());                   // 3

        edades.remove("Luis");

        // Recorrer
        for (Map.Entry<String, Integer> entry : edades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Map.of() — mapa inmutable (Java 9+)
        Map<String, String> config = Map.of("host", "localhost", "port", "8080");
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">HashSet — Conjunto sin duplicados</h2>
        <CodeBlock filename="SetEjemplo.java" code={`
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetEjemplo {
    public static void main(String[] args) {
        Set<String> colores = new HashSet<>();
        colores.add("rojo");
        colores.add("verde");
        colores.add("rojo"); // NO se agrega (duplicado)

        System.out.println(colores.size());       // 2
        System.out.println(colores.contains("verde")); // true

        // TreeSet: ordenado automáticamente
        Set<Integer> ordenados = new TreeSet<>();
        ordenados.add(5);
        ordenados.add(1);
        ordenados.add(3);
        System.out.println(ordenados); // [1, 3, 5]
    }
}
`} />
        <InfoBox type="angular">
          En TypeScript usas arrays y objetos/Map. En Java hay una jerarquía completa de colecciones:
          <strong> List</strong> (ordenada, con duplicados), <strong>Set</strong> (sin duplicados),
          <strong> Map</strong> (clave-valor), <strong>Queue</strong> (FIFO). Todas son tipadas con generics.
        </InfoBox>
      </section>
    </div>
  );
}
