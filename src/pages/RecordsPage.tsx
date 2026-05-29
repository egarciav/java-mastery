import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function RecordsPage() {
  return (
    <div>
      <DayHeader
        day={29}
        title="Records"
        duration="40 min"
        commitMsg="dia-29: records, constructor compacto, DTOs inmutables"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás Records (Java 16+) — la forma moderna de crear clases de datos inmutables
        con una sola línea de código. Eliminan el 90% del boilerplate que plagaba las clases Java
        tradicionales y son perfectos como DTOs en Spring Boot.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué problema resuelven los Records?</h2>

        <ThinkSection title="Record = interfaz TypeScript + constructor + equals + toString">
          <p>
            En TypeScript defines <code className="text-primary">{"interface Persona { nombre: string; edad: number; }"}</code>
            y ya tienes un tipo con forma definida. Pero en Java, antes de los records, crear una clase de datos
            simple requería escribir: campos privados, constructor, getters, <code className="text-primary">equals()</code>,
            <code className="text-primary"> hashCode()</code> y <code className="text-primary">toString()</code> — unas 50+ líneas
            de código repetitivo para 3 campos.
          </p>
          <p>
            Un <code className="text-primary">record</code> genera TODO eso automáticamente en una línea. Los campos son
            <code className="text-primary"> final</code> (inmutables), los getters no llevan prefijo "get", y la igualdad
            se compara por contenido (no por referencia). Son ideales para DTOs, respuestas de API,
            objetos de valor, y cualquier dato que no cambia después de crearse.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          <strong className="text-text">¿Cuándo usar record vs clase normal?</strong> Usa record cuando tu objeto es
          solo un "contenedor de datos" que no cambia (inmutable). Usa clase normal cuando necesitas mutabilidad,
          herencia, o lógica de estado compleja.
        </p>

        <CodeBlock filename="Records.java" code={`
// Un record genera automáticamente:
// - Constructor con todos los campos
// - Getters (nombre(), edad(), email())
// - equals(), hashCode(), toString()
// - Los campos son final (inmutables)

public record Persona(String nombre, int edad, String email) {}

// Equivale a escribir ~50 líneas de clase con constructor, getters, equals, etc.

public class Main {
    public static void main(String[] args) {
        Persona p = new Persona("Carlos", 25, "carlos@mail.com");

        // Getters (sin "get" prefix)
        System.out.println(p.nombre()); // "Carlos"
        System.out.println(p.edad());   // 25

        // toString automático
        System.out.println(p); // Persona[nombre=Carlos, edad=25, email=carlos@mail.com]

        // equals por contenido
        Persona p2 = new Persona("Carlos", 25, "carlos@mail.com");
        System.out.println(p.equals(p2)); // true

        // Inmutable: no hay setters
        // p.nombre = "Otro"; // ERROR: no compila
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Records avanzados</h2>
        <CodeBlock filename="RecordsAvanzados.java" code={`
// Record con validación en constructor compacto
public record Producto(String nombre, double precio) {
    // Constructor compacto (sin parámetros, se asignan solos)
    public Producto {
        if (precio < 0) throw new IllegalArgumentException("Precio negativo");
        nombre = nombre.trim(); // puedes modificar ANTES de la asignación
    }
}

// Record con métodos adicionales
public record Punto(double x, double y) {
    public double distanciaAlOrigen() {
        return Math.sqrt(x * x + y * y);
    }

    // Método estático factory
    public static Punto origen() {
        return new Punto(0, 0);
    }
}

// Record que implementa interfaz
public record Rango(int min, int max) implements Comparable<Rango> {
    @Override
    public int compareTo(Rango otro) {
        return Integer.compare(this.min, otro.min);
    }
}
`} />
        <InfoBox type="angular">
          Los records de Java son similares a las interfaces de TypeScript para definir formas de datos,
          pero son clases reales con constructor, igualdad por valor y toString. En Angular usarías una
          interfaz o clase — en Java moderno, usa records para DTOs y objetos de valor.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 29</h2>
        <Exercise
          number={1}
          title="Sistema de pedidos con Records"
          description={`Crea un mini sistema de pedidos:
1. record Producto(String nombre, double precio)
2. record LineaPedido(Producto producto, int cantidad) con método subtotal()
3. record Pedido(String cliente, List<LineaPedido> lineas) con métodos total() y resumen()
4. En main: crea un pedido con 3 productos y muestra el resumen`}
          hint="En el record Pedido: public double total() { return lineas.stream().mapToDouble(LineaPedido::subtotal).sum(); }"
          solution={`import java.util.List;

public class SistemaPedidos {
    record Producto(String nombre, double precio) {}

    record LineaPedido(Producto producto, int cantidad) {
        public double subtotal() { return producto.precio() * cantidad; }
    }

    record Pedido(String cliente, List<LineaPedido> lineas) {
        public double total() {
            return lineas.stream().mapToDouble(LineaPedido::subtotal).sum();
        }
        public String resumen() {
            var sb = new StringBuilder("Pedido de " + cliente + ":\\n");
            lineas.forEach(l -> sb.append(String.format(
                "  %s x%d = $%.2f%n", l.producto().nombre(), l.cantidad(), l.subtotal())));
            sb.append(String.format("  TOTAL: $%.2f", total()));
            return sb.toString();
        }
    }

    public static void main(String[] args) {
        var p = new Pedido("Carlos", List.of(
            new LineaPedido(new Producto("Laptop", 1200), 1),
            new LineaPedido(new Producto("Mouse", 25), 2),
            new LineaPedido(new Producto("Monitor", 450), 1)
        ));
        System.out.println(p.resumen());
    }
}`}
          solutionFilename="SistemaPedidos.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-29: records, constructor compacto, DTOs inmutables"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 30</strong> — Sealed Classes: controlar la herencia.
          </p>
        </div>
      </section>
    </div>
  );
}
