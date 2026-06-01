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

        <ThinkSection title="Records: eliminar el boilerplate de las clases de datos">
          <p>
            El problema histórico de Java era el <strong className="text-text">boilerplate verboso</strong>:
            para una clase de datos simple con 3 campos necesitabas 50+ líneas: declarar campos privados,
            escribir un constructor, getters para cada campo, <code className="text-primary">equals()</code>,
            <code className="text-primary">hashCode()</code> y <code className="text-primary">toString()</code>.
            Todo esto para almacenar 3 valores. Lombok existía como solución externa, pero Java 16
            trajo la solución oficial: <strong className="text-text">records</strong>.
          </p>
          <p>
            <code className="text-primary">record Persona(String nombre, int edad) {'{}'}</code> genera automáticamente:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>Campos <code className="text-primary">private final</code> para cada componente</li>
            <li>Constructor canónico que acepta todos los componentes</li>
            <li>Getters con el mismo nombre del campo (no <code className="text-primary">getNombre()</code>, sino <code className="text-primary">nombre()</code>)</li>
            <li><code className="text-primary">equals()</code> que compara por contenido, no por referencia</li>
            <li><code className="text-primary">hashCode()</code> consistente con equals</li>
            <li><code className="text-primary">toString()</code> legible: <code className="text-primary">Persona[nombre=Carlos, edad=25]</code></li>
          </ul>
          <p>
            <strong className="text-text">Inmutabilidad total</strong>: los campos son <code className="text-primary">final</code>.
            No hay setters. Una vez creado, el estado no cambia. Esto los hace thread-safe por diseño
            y perfectos para DTOs, clases de valor, respuestas de API, y llaves de mapas.
          </p>
          <p>
            <strong className="text-text">Limitaciones importantes:</strong> los records no pueden extender clases
            (solo implementar interfaces), no pueden tener campos de instancia adicionales (solo los del header),
            y <strong className="text-text">no funcionan con JPA/Hibernate</strong> como entidades
            (JPA requiere clase mutable con constructor sin argumentos). Para entidades JPA, sigue usando
            clases normales. Para DTOs que viajan entre capas, records son perfectos.
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
