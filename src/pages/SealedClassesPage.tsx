import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SealedClassesPage() {
  return (
    <div>
      <DayHeader
        day={30}
        title="Sealed Classes"
        duration="40 min"
        commitMsg="dia-30: sealed classes, permits, exhaustive switch"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás Sealed Classes (Java 17) — una forma de declarar exactamente qué clases
        pueden heredar de otra. Combinadas con records y pattern matching, permiten modelar
        dominios complejos con seguridad de tipos que el compilador puede verificar exhaustivamente.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué son y por qué existen?</h2>

        <ThinkSection title="Sealed Classes: jerarquías cerradas con exhaustividad garantizada">
          <p>
            En TypeScript los union types son fundamentales:
            <code className="text-primary"> type Forma = Circulo | Rectangulo | Triangulo</code>.
            El compilador sabe exactamente qué tipos son posibles y puede verificar exhaustividad
            en un switch. Java no tenía esto hasta Java 17.
          </p>
          <p>
            <code className="text-primary">sealed interface Forma permits Circulo, Rectangulo, Triangulo</code>
            logra el mismo efecto. La clave es la keyword <code className="text-primary">permits</code>: declara
            explícitamente qué clases pueden implementar o extender esta interfaz/clase. Cualquier otra clase
            que intente hacerlo dará error de compilación.
          </p>
          <p>
            <strong className="text-text">El beneficio real es con pattern matching en switch (Java 21):</strong>
            el compilador puede verificar que el switch es exhaustivo. Si añades un nuevo tipo permitido
            (<code className="text-primary">Hexagono</code>), todos los switch que usen <code className="text-primary">Forma</code>
            sin default dejarán de compilar, obligándote a manejar el nuevo caso. Esto elimina la clase
            entera de bugs de "nuevo tipo no manejado en producción".
          </p>
          <p>
            <strong className="text-text">Los subtipos pueden ser:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">final</code>: no puede extenderse más. Terminal en la jerarquía.</li>
            <li><code className="text-primary">sealed</code> + <code className="text-primary">permits</code>: puede extenderse pero solo por los tipos declarados.</li>
            <li><code className="text-primary">non-sealed</code>: cualquiera puede extenderlo. Abre la jerarquía en ese punto.</li>
          </ul>
          <p>
            <strong className="text-text">Cuándo NO usar sealed:</strong> si la jerarquía puede crecer (nuevos tipos
            de clientes, nuevos estados añadidos por módulos externos). Sealed es para conjuntos
            <em> cerrados y estables</em> por diseño.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Una <strong className="text-text">sealed class/interface</strong> restringe qué clases pueden extenderla
          o implementarla. Solo las clases explícitamente listadas en <code className="text-primary">permits</code>
          tienen permiso de heredar. Cada subclase debe ser <code className="text-primary">final</code> (no se puede
          extender más), <code className="text-primary">sealed</code> (restringida también), o
          <code className="text-primary"> non-sealed</code> (abierta a extensión).
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 30</h2>
        <Exercise
          number={1}
          title="Resultado de operación con Sealed"
          description={`Modela un sistema de respuestas HTTP:
1. sealed interface Respuesta permits Ok, ClientError, ServerError
2. record Ok(String body) implements Respuesta
3. record ClientError(int codigo, String mensaje) implements Respuesta
4. record ServerError(String excepcion) implements Respuesta
5. Método String procesar(Respuesta r) con switch exhaustivo
6. Prueba con los 3 tipos en main`}
          hint="return switch (r) { case Ok ok -> ...; case ClientError ce -> ...; case ServerError se -> ...; };"
          solution={`public class SistemaHTTP {
    sealed interface Respuesta permits Ok, ClientError, ServerError {}
    record Ok(String body) implements Respuesta {}
    record ClientError(int codigo, String mensaje) implements Respuesta {}
    record ServerError(String excepcion) implements Respuesta {}

    static String procesar(Respuesta r) {
        return switch (r) {
            case Ok ok -> "200 OK: " + ok.body();
            case ClientError ce -> ce.codigo() + " " + ce.mensaje();
            case ServerError se -> "500 Internal: " + se.excepcion();
        };
    }

    public static void main(String[] args) {
        System.out.println(procesar(new Ok("{\\"user\\":\\"Carlos\\"}")));
        System.out.println(procesar(new ClientError(404, "Not Found")));
        System.out.println(procesar(new ServerError("NullPointerException")));
    }
}`}
          solutionFilename="SistemaHTTP.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-30: sealed classes, permits, exhaustive switch"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 31</strong> — Pattern Matching: instanceof y switch modernos.
          </p>
        </div>
      </section>
    </div>
  );
}
