import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function PatternMatchingPage() {
  return (
    <div>
      <DayHeader
        day={31}
        title="Pattern Matching"
        duration="45 min"
        commitMsg="dia-31: pattern matching instanceof, switch, guards"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy dominarás Pattern Matching — verificar tipo y extraer datos en una sola expresión.
        Con sealed classes y records, el compilador verifica exhaustividad.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">instanceof con Pattern Matching (Java 16+)</h2>

        <ThinkSection title="Pattern Matching = casting inteligente">
          <p>
            Antes necesitabas: verificar tipo con instanceof, luego hacer cast manual. Ahora Java
            lo combina en una línea: <code className="text-primary">if (obj instanceof String s)</code> verifica
            Y crea la variable tipada al mismo tiempo.
          </p>
        </ThinkSection>

        <CodeBlock filename="PatternInstanceof.java" code={`
public class PatternInstanceof {
    static void procesar(Object obj) {
        // ANTES (verbose)
        if (obj instanceof String) {
            String s = (String) obj;
            System.out.println("String de longitud: " + s.length());
        }

        // AHORA (Java 16+): cast automático
        if (obj instanceof String s) {
            System.out.println("String de longitud: " + s.length());
        }

        // Con negación
        if (!(obj instanceof String s)) {
            System.out.println("No es String");
            return;
        }
        // s está disponible aquí
        System.out.println(s.toUpperCase());

        // Con && (la variable está en scope si la condición es true)
        if (obj instanceof String s && s.length() > 5) {
            System.out.println("String largo: " + s);
        }
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Switch con Pattern Matching (Java 21+)</h2>
        <CodeBlock filename="PatternSwitch.java" code={`
public class PatternSwitch {
    // Con sealed classes/records
    sealed interface Forma permits Circulo, Rectangulo, Triangulo {}
    record Circulo(double radio) implements Forma {}
    record Rectangulo(double ancho, double alto) implements Forma {}
    record Triangulo(double base, double altura) implements Forma {}

    static double area(Forma forma) {
        return switch (forma) {
            case Circulo c -> Math.PI * c.radio() * c.radio();
            case Rectangulo r -> r.ancho() * r.alto();
            case Triangulo t -> t.base() * t.altura() / 2;
            // No necesita default: sealed + exhaustivo
        };
    }

    // Con guardas (when)
    static String clasificar(Object obj) {
        return switch (obj) {
            case Integer i when i < 0 -> "Negativo: " + i;
            case Integer i when i == 0 -> "Cero";
            case Integer i -> "Positivo: " + i;
            case String s when s.isEmpty() -> "String vacío";
            case String s -> "String: " + s;
            case null -> "Nulo";
            default -> "Otro tipo: " + obj.getClass().getSimpleName();
        };
    }

    public static void main(String[] args) {
        System.out.println(area(new Circulo(5)));         // 78.54
        System.out.println(area(new Rectangulo(4, 6)));   // 24.0
        System.out.println(clasificar(-5));               // "Negativo: -5"
        System.out.println(clasificar("Hola"));           // "String: Hola"
        System.out.println(clasificar(null));              // "Nulo"
    }
}
`} />
        <InfoBox type="tip">
          Pattern matching + sealed classes + records es la combinación más poderosa de Java moderno.
          Permite modelar dominios de forma segura donde el compilador verifica que cubres todos los casos.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 31</h2>
        <Exercise
          number={1}
          title="Evaluador de expresiones"
          description={`Modela expresiones matemáticas con sealed + records + pattern matching:
1. sealed interface Expr permits Num, Suma, Mult, Neg
2. record Num(double valor) implements Expr
3. record Suma(Expr izq, Expr der) implements Expr
4. record Mult(Expr izq, Expr der) implements Expr
5. record Neg(Expr expr) implements Expr
6. Método double evaluar(Expr e) con switch recursivo
7. Prueba: evaluar(new Suma(new Num(3), new Mult(new Num(2), new Num(5))))`}
          hint="case Suma(var i, var d) -> evaluar(i) + evaluar(d); (usa deconstructing patterns si Java 21)"
          solution={`public class Evaluador {
    sealed interface Expr permits Num, Suma, Mult, Neg {}
    record Num(double valor) implements Expr {}
    record Suma(Expr izq, Expr der) implements Expr {}
    record Mult(Expr izq, Expr der) implements Expr {}
    record Neg(Expr expr) implements Expr {}

    static double evaluar(Expr e) {
        return switch (e) {
            case Num n -> n.valor();
            case Suma s -> evaluar(s.izq()) + evaluar(s.der());
            case Mult m -> evaluar(m.izq()) * evaluar(m.der());
            case Neg n -> -evaluar(n.expr());
        };
    }

    public static void main(String[] args) {
        // 3 + (2 * 5) = 13
        Expr expr = new Suma(new Num(3), new Mult(new Num(2), new Num(5)));
        System.out.println(evaluar(expr)); // 13.0

        // -(4 + 6) = -10
        Expr neg = new Neg(new Suma(new Num(4), new Num(6)));
        System.out.println(evaluar(neg)); // -10.0
    }
}`}
          solutionFilename="Evaluador.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-31: pattern matching instanceof, switch, guards"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 32</strong> — Patrones de diseño esenciales.
          </p>
        </div>
      </section>
    </div>
  );
}
