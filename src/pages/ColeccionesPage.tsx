import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function ColeccionesPage() {
  return (
    <div>
      <DayHeader
        day={17}
        title="Colecciones"
        duration="60 min"
        commitMsg="dia-17: ArrayList, HashMap, HashSet, List.of, Map.of"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy pasas de arrays (tamaño fijo) a colecciones dinámicas. <code className="text-primary">List</code>,
        <code className="text-primary"> Set</code> y <code className="text-primary">Map</code> son las estructuras de datos
        que usarás el 90% del tiempo en Java profesional. Son como los arrays y objetos de TypeScript,
        pero con tipos específicos para cada necesidad.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">ArrayList — Lista dinámica ordenada</h2>

        <ThinkSection title="El framework de colecciones: elegir la estructura correcta importa">
          <p>
            Java organiza sus colecciones en <strong className="text-text">interfaces y sus implementaciones</strong>.
            La regla de oro: <em>declara el tipo como interfaz, crea con la implementación</em>:
            <code className="text-primary"> List&lt;String&gt; lista = new ArrayList&lt;&gt;()</code>.
            Así puedes cambiar la implementación sin tocar el código que la usa.
          </p>
          <p><strong className="text-text">¿Cuál estructura usar?</strong></p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">ArrayList</strong>: acceso por índice O(1), inserción al final O(1) amortizado. Internamente es un array que se duplica cuando se llena. Úsalo cuando necesites orden y acceso rápido por posición.</li>
            <li><strong className="text-text">LinkedList</strong>: inserción/eliminación al inicio/final O(1), pero acceso por índice O(n). Úsalo cuando insertes/elimines frecuentemente en los extremos.</li>
            <li><strong className="text-text">HashSet</strong>: contiene/agrega/elimina en O(1) promedio. Sin orden. Internamente usa un HashMap. Úsalo para verificar existencia y eliminar duplicados.</li>
            <li><strong className="text-text">HashMap</strong>: búsqueda por clave O(1) promedio. Calcula el hash de la clave para encontrar el bucket. Requiere que las claves implementen correctamente <code className="text-primary">equals()</code> y <code className="text-primary">hashCode()</code>.</li>
            <li><strong className="text-text">TreeMap / TreeSet</strong>: ordenados por clave natural o Comparator. O(log n) para todas las operaciones. Úsalos cuando necesites el orden de las claves.</li>
          </ul>
          <p>
            <strong className="text-text">En Spring Boot</strong> usarás <code className="text-primary">List</code> para
            retornar listas de entidades, <code className="text-primary">Map</code> para respuestas dinámicas,
            y <code className="text-primary">Set</code> para relaciones ManyToMany en JPA.
          </p>
        </ThinkSection>

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 17</h2>
        <Exercise
          number={1}
          title="Contador de palabras con Map"
          description={`Crea ContadorPalabras.java que:
1. Reciba un String[] de palabras
2. Use un HashMap<String, Integer> para contar cuántas veces aparece cada palabra
3. Imprima cada palabra y su frecuencia ordenada por valor

Prueba con: {"java", "es", "genial", "java", "es", "poderoso", "java"}`}
          hint='Usa map.getOrDefault(palabra, 0) + 1 para incrementar el contador.'
          solution={`import java.util.*;

public class ContadorPalabras {
    public static void main(String[] args) {
        String[] palabras = {"java", "es", "genial", "java", "es", "poderoso", "java"};
        Map<String, Integer> conteo = new HashMap<>();

        for (String p : palabras) {
            conteo.put(p, conteo.getOrDefault(p, 0) + 1);
        }

        conteo.entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
    }
}`}
          solutionFilename="ContadorPalabras.java"
        />

        <Exercise
          number={2}
          title="Agenda de contactos"
          description={`Crea Agenda.java con:
- Un Map<String, List<String>> donde la clave es el nombre y el valor es una lista de teléfonos
- Método agregar(String nombre, String telefono)
- Método buscar(String nombre) que retorne la lista de teléfonos
- Método eliminar(String nombre)
- Método mostrarTodos()

Una persona puede tener múltiples teléfonos.`}
          hint="Para agregar: usa computeIfAbsent(nombre, k -> new ArrayList<>()).add(telefono);"
          solution={`import java.util.*;

public class Agenda {
    private Map<String, List<String>> contactos = new HashMap<>();

    public void agregar(String nombre, String telefono) {
        contactos.computeIfAbsent(nombre, k -> new ArrayList<>()).add(telefono);
    }

    public List<String> buscar(String nombre) {
        return contactos.getOrDefault(nombre, List.of());
    }

    public void eliminar(String nombre) {
        contactos.remove(nombre);
    }

    public void mostrarTodos() {
        contactos.forEach((nombre, tels) ->
            System.out.println(nombre + ": " + tels));
    }

    public static void main(String[] args) {
        Agenda agenda = new Agenda();
        agenda.agregar("Carlos", "555-1234");
        agenda.agregar("Carlos", "555-5678");
        agenda.agregar("Ana", "555-9999");
        agenda.mostrarTodos();
        System.out.println("Carlos: " + agenda.buscar("Carlos"));
    }
}`}
          solutionFilename="Agenda.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-17: colecciones ArrayList, HashMap, HashSet"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 18</strong> — excepciones: try-catch, throw, custom exceptions.
          </p>
        </div>
      </section>
    </div>
  );
}
