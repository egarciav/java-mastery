import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function MetodosPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Métodos</h1>
      <p className="text-text-muted text-lg mb-8">Funciones en Java — cómo definirlas, usarlas y sobrecargarlas</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Definir y llamar métodos</h2>
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
    </div>
  );
}
