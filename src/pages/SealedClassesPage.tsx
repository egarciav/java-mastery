import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SealedClassesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Sealed Classes</h1>
      <p className="text-text-muted text-lg mb-8">Controlar exactamente qué clases pueden heredar (Java 17+)</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué son las Sealed Classes?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Una <strong className="text-text">sealed class</strong> restringe qué clases pueden extenderla.
          Solo las clases listadas en <code className="text-primary">permits</code> pueden heredar.
        </p>
        <CodeBlock filename="SealedClasses.java" code={`
// Solo Circulo, Rectangulo y Triangulo pueden extender Figura
public sealed class Figura permits Circulo, Rectangulo, Triangulo {
    protected String color;
    public Figura(String color) { this.color = color; }
}

// final: no puede ser extendida más
public final class Circulo extends Figura {
    private double radio;
    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }
}

// non-sealed: abierta a extensión libre
public non-sealed class Rectangulo extends Figura {
    private double ancho, alto;
    public Rectangulo(String color, double ancho, double alto) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }
}

// sealed: puede restringir sus propias subclases
public sealed class Triangulo extends Figura permits TrianguloEquilatero {
    public Triangulo(String color) { super(color); }
}

public final class TrianguloEquilatero extends Triangulo {
    public TrianguloEquilatero(String color) { super(color); }
}

// Otra clase NO puede extender Figura:
// public class Pentagono extends Figura {} // ERROR: no está en permits
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Sealed interfaces y records</h2>
        <CodeBlock filename="SealedInterface.java" code={`
// Sealed interfaces funcionan igual
public sealed interface Resultado permits Exito, Error, Pendiente {}

public record Exito(String valor) implements Resultado {}
public record Error(String mensaje) implements Resultado {}
public record Pendiente() implements Resultado {}

// Perfecto para pattern matching exhaustivo
public class Main {
    static String procesar(Resultado r) {
        return switch (r) {
            case Exito e -> "OK: " + e.valor();
            case Error e -> "ERROR: " + e.mensaje();
            case Pendiente p -> "Esperando...";
            // No necesita default: el compilador sabe que cubriste todos los casos
        };
    }
}
`} />
        <InfoBox type="tip">
          Sealed classes + records + pattern matching = una combinación poderosa para modelar dominios
          cerrados donde sabes exactamente qué tipos existen. El compilador verifica exhaustividad.
        </InfoBox>
      </section>
    </div>
  );
}
