import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function MetodosPage() {
  return (
    <div>
      <DayHeader
        day={10}
        title="Métodos"
        duration="50 min"
        commitMsg="dia-10: metodos, overloading, varargs, paso por valor"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a aprender a crear métodos — las funciones de Java. Dominar métodos es clave
        porque en OOP, todo el comportamiento se define con métodos.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Definir y llamar métodos</h2>

        <ThinkSection title="Métodos en Java vs funciones en TypeScript">
          <p>
            En TypeScript puedes tener funciones sueltas: <code className="text-primary">function sumar(a: number, b: number) {'{}'}</code>.
            En Java, <strong className="text-text">todo método debe vivir dentro de una clase</strong>.
          </p>
          <p>
            <code className="text-primary">static</code> permite llamar al método sin crear un objeto.
            Sin <code className="text-primary">static</code>, necesitas hacer <code className="text-primary">new MiClase().miMetodo()</code>.
            Por ahora usarás <code className="text-primary">static</code>; cuando lleguemos a OOP, entenderás cuándo no usarlo.
          </p>
        </ThinkSection>

        <CodeBlock filename="Metodos.java" code={`
public class Metodos {
    // Método sin retorno (void)
    static void saludar() {
        System.out.println("¡Hola!");
    }

    // Método con retorno
    static int sumar(int a, int b) {
        return a + b;
    }

    // Método con String como retorno
    static String formatearNombre(String nombre, String apellido) {
        return apellido.toUpperCase() + ", " + nombre;
    }

    // Método con múltiples returns
    static String clasificarEdad(int edad) {
        if (edad < 13) return "Niño";
        if (edad < 18) return "Adolescente";
        if (edad < 65) return "Adulto";
        return "Senior";
    }

    public static void main(String[] args) {
        saludar();                              // ¡Hola!
        int resultado = sumar(5, 3);            // 8
        String nombre = formatearNombre("Carlos", "García"); // GARCÍA, Carlos
        String clase = clasificarEdad(25);      // Adulto
    }
}
`} />
        <InfoBox type="angular">
          En TypeScript defines funciones con <code className="text-primary">function</code> o arrow functions.
          En Java todo método debe estar dentro de una clase. <code className="text-primary">static</code> permite 
          llamar al método sin crear una instancia de la clase.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Sobrecarga de métodos (Overloading)</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Puedes tener varios métodos con el <strong className="text-text">mismo nombre</strong> pero 
          <strong className="text-text"> diferentes parámetros</strong>.
        </p>
        <CodeBlock filename="Sobrecarga.java" code={`
public class Sobrecarga {
    // Mismo nombre, diferentes parámetros
    static int sumar(int a, int b) {
        return a + b;
    }

    static double sumar(double a, double b) {
        return a + b;
    }

    static int sumar(int a, int b, int c) {
        return a + b + c;
    }

    static String sumar(String a, String b) {
        return a + b; // concatenación
    }

    public static void main(String[] args) {
        System.out.println(sumar(1, 2));         // 3 (int)
        System.out.println(sumar(1.5, 2.5));     // 4.0 (double)
        System.out.println(sumar(1, 2, 3));      // 6 (tres ints)
        System.out.println(sumar("Ho", "la"));   // "Hola" (String)
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Varargs (argumentos variables)</h2>
        <CodeBlock filename="Varargs.java" code={`
public class Varargs {
    // ... permite recibir cualquier cantidad de argumentos
    static int sumarTodos(int... numeros) {
        int total = 0;
        for (int n : numeros) {
            total += n;
        }
        return total;
    }

    // Varargs debe ser el ÚLTIMO parámetro
    static void imprimir(String prefijo, String... mensajes) {
        for (String msg : mensajes) {
            System.out.println(prefijo + ": " + msg);
        }
    }

    public static void main(String[] args) {
        System.out.println(sumarTodos(1, 2));           // 3
        System.out.println(sumarTodos(1, 2, 3, 4, 5));  // 15
        System.out.println(sumarTodos());                // 0

        imprimir("LOG", "Inicio", "Proceso", "Fin");
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Paso por valor vs referencia</h2>
        <CodeBlock filename="PasoPorValor.java" code={`
public class PasoPorValor {
    // Java SIEMPRE pasa por valor
    // Pero para objetos, el "valor" es la referencia (dirección)

    static void cambiarPrimitivo(int x) {
        x = 100; // NO afecta al original
    }

    static void cambiarArray(int[] arr) {
        arr[0] = 100; // SÍ afecta al original (misma referencia)
    }

    static void reasignarArray(int[] arr) {
        arr = new int[]{100, 200}; // NO afecta al original (nueva referencia local)
    }

    public static void main(String[] args) {
        int num = 5;
        cambiarPrimitivo(num);
        System.out.println(num); // 5 (no cambió)

        int[] datos = {1, 2, 3};
        cambiarArray(datos);
        System.out.println(datos[0]); // 100 (sí cambió)

        reasignarArray(datos);
        System.out.println(datos[0]); // 100 (no cambió por reasignación)
    }
}
`} />
        <InfoBox type="info">
          Java es siempre <strong>paso por valor</strong>. Para primitivos copia el valor. Para objetos copia 
          la referencia — por eso puedes modificar el contenido del objeto pero no reasignar la variable original.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 10</h2>

        <Exercise
          number={1}
          title="Utilidades matemáticas"
          description={`Crea MathUtils.java con métodos static sobrecargados:
- max(int a, int b) → el mayor de dos ints
- max(int a, int b, int c) → el mayor de tres ints
- max(double a, double b) → el mayor de dos doubles
- esPar(int n) → true si n es par
- factorial(int n) → el factorial de n (n!)

Prueba todos desde main.`}
          hint="Para factorial: si n <= 1 retorna 1, sino retorna n * factorial(n-1). O usa un bucle for."
          solution={`public class MathUtils {
    static int max(int a, int b) { return (a > b) ? a : b; }
    static int max(int a, int b, int c) { return max(max(a, b), c); }
    static double max(double a, double b) { return (a > b) ? a : b; }
    static boolean esPar(int n) { return n % 2 == 0; }

    static long factorial(int n) {
        long resultado = 1;
        for (int i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

    public static void main(String[] args) {
        System.out.println("max(3, 7) = " + max(3, 7));
        System.out.println("max(3, 7, 5) = " + max(3, 7, 5));
        System.out.println("max(3.14, 2.71) = " + max(3.14, 2.71));
        System.out.println("esPar(4) = " + esPar(4));
        System.out.println("esPar(7) = " + esPar(7));
        System.out.println("factorial(5) = " + factorial(5));
        System.out.println("factorial(10) = " + factorial(10));
    }
}`}
          solutionFilename="MathUtils.java"
        />

        <Exercise
          number={2}
          title="Constructor de mensajes con varargs"
          description={`Crea MensajeBuilder.java con:
- formatear(String... partes) → une todas las partes con " | "
- formatear(String separador, String... partes) → une con el separador dado
- contar(String... palabras) → retorna cuántas palabras se pasaron

Prueba con varias cantidades de argumentos.`}
          hint='Usa String.join(separador, partes) para unir las partes fácilmente.'
          solution={`public class MensajeBuilder {
    static String formatear(String... partes) {
        return String.join(" | ", partes);
    }

    static String formatear(String separador, String... partes) {
        return String.join(separador, partes);
    }

    static int contar(String... palabras) {
        return palabras.length;
    }

    public static void main(String[] args) {
        System.out.println(formatear("Hola", "Mundo", "Java"));
        System.out.println(formatear(" -> ", "Paso 1", "Paso 2", "Paso 3"));
        System.out.println("Palabras: " + contar("a", "b", "c", "d"));
    }
}`}
          solutionFilename="MensajeBuilder.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-10: metodos, overloading, varargs, paso por valor"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 11</strong>: clases y objetos —
            constructores, this, static, toString.
          </p>
        </div>
      </section>
    </div>
  );
}
