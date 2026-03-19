import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function RecordsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Records</h1>
      <p className="text-text-muted text-lg mb-8">Clases inmutables de datos en una línea (Java 16+)</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Definir y usar Records</h2>
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
    </div>
  );
}
