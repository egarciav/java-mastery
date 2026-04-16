import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function ComparadorPage() {
  return (
    <div>
      <DayHeader
        day={21}
        title="Comparable y Comparator"
        duration="45 min"
        commitMsg="dia-21: Comparable, Comparator, ordenamiento de objetos"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás a ordenar objetos en Java. Es fundamental para trabajar con colecciones
        y streams — lo usarás constantemente en código profesional.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Comparable — orden natural</h2>

        <ThinkSection title="¿Comparable o Comparator?">
          <p>
            <strong className="text-text">Comparable</strong>: la clase "sabe" cómo ordenarse. Implementas <code className="text-primary">compareTo()</code>
            dentro de la clase. Solo un orden natural.
          </p>
          <p>
            <strong className="text-text">Comparator</strong>: el orden se define fuera. Puedes tener múltiples Comparators
            para la misma clase. Más flexible, ideal con lambdas.
          </p>
        </ThinkSection>

        <CodeBlock filename="Producto.java" code={`
public class Producto implements Comparable<Producto> {
    private String nombre;
    private double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Define el orden natural: por precio ascendente
    @Override
    public int compareTo(Producto otro) {
        // Retorna: negativo si this < otro, 0 si iguales, positivo si this > otro
        return Double.compare(this.precio, otro.precio);
    }

    @Override
    public String toString() {
        return nombre + " ($" + precio + ")";
    }
}

// Uso:
List<Producto> productos = new ArrayList<>();
productos.add(new Producto("Laptop", 1200.0));
productos.add(new Producto("Mouse", 25.0));
productos.add(new Producto("Monitor", 450.0));

Collections.sort(productos); // usa compareTo()
System.out.println(productos);
// [Mouse ($25.0), Monitor ($450.0), Laptop ($1200.0)]

// También funciona con TreeSet, TreeMap (orden automático)
TreeSet<Producto> set = new TreeSet<>(productos);
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Comparator — orden personalizado</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Usa <code className="text-primary">Comparator</code> cuando necesitas <strong className="text-text">múltiples criterios de orden</strong> 
          o no puedes modificar la clase original.
        </p>
        <CodeBlock filename="ComparatorEjemplo.java" code={`
List<Producto> productos = List.of(
    new Producto("Laptop", 1200.0),
    new Producto("Mouse", 25.0),
    new Producto("Monitor", 450.0),
    new Producto("Teclado", 80.0)
);

// Comparator con lambda
productos.sort((a, b) -> Double.compare(a.getPrecio(), b.getPrecio()));

// Comparator.comparing() — más legible (Java 8+)
productos.sort(Comparator.comparing(Producto::getPrecio));          // ascendente
productos.sort(Comparator.comparing(Producto::getPrecio).reversed()); // descendente
productos.sort(Comparator.comparing(Producto::getNombre));           // por nombre A-Z

// Encadenar criterios: primero por precio, luego por nombre
productos.sort(
    Comparator.comparing(Producto::getPrecio)
              .thenComparing(Producto::getNombre)
);

// Con streams
List<Producto> ordenados = productos.stream()
    .sorted(Comparator.comparing(Producto::getPrecio))
    .collect(Collectors.toList());

// El más caro
Optional<Producto> masCaro = productos.stream()
    .max(Comparator.comparing(Producto::getPrecio));
`} />
        <InfoBox type="angular">
          En TypeScript, <code className="text-primary">array.sort((a, b) =&gt; a.price - b.price)</code> es el equivalente.
          Java tiene el mismo patrón pero con <code className="text-primary">Comparator.comparing()</code> que es más expresivo 
          y seguro para tipos no numéricos.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Comparable vs Comparator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">Comparable</h3>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• Implementado <strong className="text-text">dentro</strong> de la clase</li>
              <li>• Define el <strong className="text-text">orden natural</strong> único</li>
              <li>• La clase "sabe" cómo ordenarse</li>
              <li>• Ejemplo: String, Integer, LocalDate</li>
            </ul>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-text mb-2">Comparator</h3>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• Definido <strong className="text-text">fuera</strong> de la clase</li>
              <li>• Permite <strong className="text-text">múltiples criterios</strong></li>
              <li>• No necesitas modificar la clase</li>
              <li>• Más flexible para casos ad-hoc</li>
            </ul>
          </div>
        </div>
        <InfoBox type="tip">
          Regla práctica: implementa <code className="text-primary">Comparable</code> si hay un orden "lógico" obvio 
          para tu clase (ej: productos por precio, personas por nombre). Usa <code className="text-primary">Comparator</code> 
          para ordenamientos alternativos o cuando no controlas la clase.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 21</h2>
        <Exercise
          number={1}
          title="Ordenar estudiantes"
          description={`Crea Estudiante implements Comparable<Estudiante> con:
- Campos: nombre, promedio, edad
- Orden natural: por promedio descendente (mayor primero)
- En main: crea una lista de 5 estudiantes, ordénalos naturalmente
- Luego ordénalos con Comparator.comparing por nombre A-Z
- Luego por edad ascendente, y si empatan, por nombre`}
          hint="Para orden descendente en compareTo: return Double.compare(otro.promedio, this.promedio);"
          solution={`import java.util.*;

public class Estudiante implements Comparable<Estudiante> {
    private String nombre;
    private double promedio;
    private int edad;

    public Estudiante(String nombre, double promedio, int edad) {
        this.nombre = nombre;
        this.promedio = promedio;
        this.edad = edad;
    }

    public String getNombre() { return nombre; }
    public double getPromedio() { return promedio; }
    public int getEdad() { return edad; }

    @Override
    public int compareTo(Estudiante otro) {
        return Double.compare(otro.promedio, this.promedio);
    }

    @Override
    public String toString() {
        return String.format("%s (%.1f, %d años)", nombre, promedio, edad);
    }

    public static void main(String[] args) {
        List<Estudiante> lista = new ArrayList<>(List.of(
            new Estudiante("Carlos", 8.5, 22),
            new Estudiante("Ana", 9.2, 20),
            new Estudiante("Luis", 7.8, 22),
            new Estudiante("María", 9.2, 21),
            new Estudiante("Pedro", 8.0, 23)
        ));

        Collections.sort(lista);
        System.out.println("Por promedio desc: " + lista);

        lista.sort(Comparator.comparing(Estudiante::getNombre));
        System.out.println("Por nombre: " + lista);

        lista.sort(Comparator.comparingInt(Estudiante::getEdad)
                             .thenComparing(Estudiante::getNombre));
        System.out.println("Por edad+nombre: " + lista);
    }
}`}
          solutionFilename="Estudiante.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-21: Comparable, Comparator, ordenamiento de objetos"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 22</strong> — Lambdas: funciones como ciudadanos de primera clase.
          </p>
        </div>
      </section>
    </div>
  );
}
