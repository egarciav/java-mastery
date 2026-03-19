import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function GenericsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Generics</h1>
      <p className="text-text-muted text-lg mb-8">Tipos paramétricos para código reutilizable y type-safe</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Clases genéricas</h2>
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
    </div>
  );
}
