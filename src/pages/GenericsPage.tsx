import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function GenericsPage() {
  return (
    <div>
      <DayHeader
        day={19}
        title="Generics"
        duration="55 min"
        commitMsg="dia-19: generics, clases genericas, bounded types, wildcards"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás Generics — el sistema de tipos paramétricos de Java que te permite escribir
        código reutilizable y type-safe. Son fundamentales para colecciones, Spring Data, y cualquier
        código que trabaje con tipos variados sin perder seguridad de tipos.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué son los Generics y por qué importan?</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          Sin generics, una lista solo podría almacenar <code className="text-primary">Object</code> y necesitarías
          hacer casting manual cada vez que sacas un elemento — propenso a errores en runtime. Con generics,
          declaras <code className="text-primary">{"List<String>"}</code> y el compilador garantiza que solo entran Strings.
          Si intentas meter un Integer, el error aparece al compilar, no al ejecutar.
        </p>

        <ThinkSection title="Generics = TypeScript generics, pero con 'borrado de tipos'">
          <p>
            En TypeScript: <code className="text-primary">{"function f<T>(x: T): T"}</code> — los tipos genéricos solo existen
            en tiempo de compilación y desaparecen en el JavaScript resultante. En Java pasa exactamente lo mismo:
            se llama <strong className="text-text">type erasure</strong> (borrado de tipos).
          </p>
          <p>
            El compilador Java verifica los tipos genéricos, pero al generar el bytecode los borra. En runtime,
            <code className="text-primary">{"List<String>"}</code> y <code className="text-primary">{"List<Integer>"}</code>
            son la MISMA clase (<code className="text-primary">List</code>). Esto tiene consecuencias: no puedes hacer
            <code className="text-primary">{"new T()"}</code>, ni <code className="text-primary">{"instanceof List<String>"}</code>,
            ni crear arrays genéricos <code className="text-primary">{"new T[10]"}</code>.
          </p>
          <p>
            <strong className="text-text">A pesar de estas limitaciones</strong>, los generics te dan seguridad completa
            en compilación. Si compila sin warnings, sabes que no habrá <code className="text-primary">ClassCastException</code>
            en runtime. Eso es un contrato muy valioso.
          </p>
        </ThinkSection>

        <CodeBlock filename="Caja.java" code={`
// T es un parámetro de tipo (puede ser cualquier letra/nombre)
public class Caja<T> {
    private T contenido;

    public Caja(T contenido) {
        this.contenido = contenido;
    }

    public T getContenido() { return contenido; }
    public void setContenido(T contenido) { this.contenido = contenido; }

    public static void main(String[] args) {
        Caja<String> cajaTexto = new Caja<>("Hola");
        String texto = cajaTexto.getContenido(); // tipo seguro, sin cast

        Caja<Integer> cajaNum = new Caja<>(42);
        int numero = cajaNum.getContenido();

        // Sin generics tendrías que hacer cast manual (inseguro)
        // Object obj = caja.getContenido();
        // String s = (String) obj; // podría fallar en runtime
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Métodos genéricos</h2>
        <CodeBlock filename="MetodosGenericos.java" code={`
public class MetodosGenericos {
    // <T> antes del retorno declara el tipo genérico
    public static <T> void imprimir(T[] array) {
        for (T elemento : array) {
            System.out.print(elemento + " ");
        }
        System.out.println();
    }

    // Múltiples tipos genéricos
    public static <K, V> void mostrarPar(K clave, V valor) {
        System.out.println(clave + " = " + valor);
    }

    public static void main(String[] args) {
        String[] nombres = {"Ana", "Luis"};
        Integer[] nums = {1, 2, 3};

        imprimir(nombres); // Ana Luis
        imprimir(nums);    // 1 2 3
        mostrarPar("edad", 25); // edad = 25
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Bounded types (límites)</h2>
        <CodeBlock filename="Bounded.java" code={`
// T debe ser Number o subclase de Number
public class Calculadora<T extends Number> {
    private T valor;

    public Calculadora(T valor) { this.valor = valor; }

    public double getDoble() {
        return valor.doubleValue() * 2; // funciona porque T ES un Number
    }
}

// Wildcards en parámetros
public class Wildcards {
    // ? extends Number: acepta Number o cualquier subclase (lectura)
    static double sumar(java.util.List<? extends Number> lista) {
        double total = 0;
        for (Number n : lista) {
            total += n.doubleValue();
        }
        return total;
    }

    // ? super Integer: acepta Integer o cualquier superclase (escritura)
    static void agregar(java.util.List<? super Integer> lista) {
        lista.add(1);
        lista.add(2);
    }
}
`} />
        <InfoBox type="angular">
          TypeScript tiene generics similares: <code className="text-primary">{"function f<T>(x: T): T"}</code>.
          La diferencia es que Java borra los tipos genéricos en compilación (type erasure), mientras que
          TypeScript los mantiene solo en tiempo de compilación de todas formas.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 19</h2>
        <Exercise
          number={1}
          title="Par genérico"
          description={`Crea una clase Par<A, B> con:
- Campos: primero (A), segundo (B)
- Constructor, getters
- toString que muestre "(primero, segundo)"
- Método static of(A a, B b) que retorne un nuevo Par

Prueba con Par<String, Integer>, Par<Integer, Boolean>, etc.`}
          hint='public class Par<A, B> { private A primero; private B segundo; ... }'
          solution={`public class Par<A, B> {
    private A primero;
    private B segundo;

    public Par(A primero, B segundo) {
        this.primero = primero;
        this.segundo = segundo;
    }

    public A getPrimero() { return primero; }
    public B getSegundo() { return segundo; }

    public static <A, B> Par<A, B> of(A a, B b) {
        return new Par<>(a, b);
    }

    @Override
    public String toString() {
        return "(" + primero + ", " + segundo + ")";
    }

    public static void main(String[] args) {
        Par<String, Integer> p1 = Par.of("edad", 25);
        Par<Integer, Boolean> p2 = Par.of(42, true);
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p1.getPrimero().toUpperCase());
    }
}`}
          solutionFilename="Par.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-19: generics, bounded types, wildcards"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 20</strong> — Enums: constantes con superpoderes.
          </p>
        </div>
      </section>
    </div>
  );
}
