import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function VariablesConstantesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Variables y Constantes</h1>
      <p className="text-text-muted text-lg mb-8">Cómo declarar, inicializar y usar variables en Java</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Declaración de Variables</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          En Java, <strong className="text-text">siempre debes declarar el tipo</strong> de una variable antes de usarla.
          La sintaxis es: <code className="text-primary">tipo nombre = valor;</code>
        </p>

        <CodeBlock filename="Variables.java" code={`
public class Variables {
    public static void main(String[] args) {
        // Declarar y asignar en una línea
        int edad = 25;
        String nombre = "Carlos";
        double salario = 45000.50;
        boolean activo = true;

        // Declarar primero, asignar después
        int cantidad;
        cantidad = 100; // asignar valor después

        // Declarar múltiples variables del mismo tipo
        int x = 1, y = 2, z = 3;

        // IMPORTANTE: No puedes usar una variable sin inicializarla
        int sinValor;
        // System.out.println(sinValor); // ERROR de compilación
        sinValor = 42;
        System.out.println(sinValor); // Ahora sí funciona

        // Reasignar valores
        edad = 26;       // OK: cambiar el valor
        nombre = "Luis"; // OK: cambiar el valor
        // edad = "texto";  // ERROR: no puedes cambiar el tipo
    }
}
`} />

        <InfoBox type="angular">
          En TypeScript usas <code className="text-primary">let nombre: string = "Carlos"</code> con el tipo después de los dos puntos.
          En Java el tipo va <strong>antes</strong> del nombre: <code className="text-primary">String nombre = "Carlos"</code>.
          Además, en Java NO existe <code className="text-primary">let</code>, <code className="text-primary">const</code> ni <code className="text-primary">var</code> (bueno, <code className="text-primary">var</code> sí desde Java 10 pero con uso limitado).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Constantes con final</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          En Java, la palabra clave <code className="text-primary">final</code> hace que una variable no pueda ser reasignada.
          Es el equivalente a <code className="text-primary">const</code> en TypeScript.
        </p>

        <CodeBlock filename="Constantes.java" code={`
public class Constantes {
    // Constantes de clase: static final + MAYÚSCULAS
    static final double PI = 3.14159265358979;
    static final int EDAD_MINIMA = 18;
    static final String NOMBRE_APP = "MiAplicación";

    public static void main(String[] args) {
        // Constante local: final
        final int maxIntentos = 3;
        // maxIntentos = 5; // ERROR: no se puede reasignar

        final String saludo = "Hola";
        // saludo = "Adiós"; // ERROR: no se puede reasignar

        System.out.println("PI: " + PI);
        System.out.println("Edad mínima: " + EDAD_MINIMA);
        System.out.println("Max intentos: " + maxIntentos);

        // CUIDADO: final con objetos
        final int[] numeros = {1, 2, 3};
        numeros[0] = 99;  // OK: puedes modificar el contenido
        // numeros = new int[]{4, 5, 6}; // ERROR: no puedes reasignar la referencia

        // final se puede declarar sin valor y asignar después (solo una vez)
        final int resultado;
        resultado = calcular(10);  // Primera y única asignación
        // resultado = 20;         // ERROR: ya fue asignada
        System.out.println("Resultado: " + resultado);
    }

    static int calcular(int n) {
        return n * 2;
    }
}
`} />

        <InfoBox type="warning" title="final no hace inmutable">
          <code className="text-primary">final</code> solo previene la <strong>reasignación</strong> de la variable.
          Si la variable apunta a un objeto (array, lista, etc.), puedes modificar el contenido del objeto.
          Es exactamente igual que <code className="text-primary">const</code> en JavaScript/TypeScript.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ámbito (Scope) de las Variables</h2>

        <CodeBlock filename="Scope.java" code={`
public class Scope {
    // Variable de CLASE (campo/field) - accesible en toda la clase
    static String variableDeClase = "Soy de clase";

    // Variable de INSTANCIA - accesible en toda la instancia
    String variableDeInstancia = "Soy de instancia";

    public static void main(String[] args) {
        // Variable LOCAL - solo existe dentro de este método
        int variableLocal = 42;
        System.out.println(variableLocal);      // OK
        System.out.println(variableDeClase);     // OK (es static)

        // Variables de bloque - solo existen dentro de las llaves {}
        if (true) {
            int dentroDelIf = 100;
            System.out.println(dentroDelIf);     // OK
        }
        // System.out.println(dentroDelIf);      // ERROR: no existe aquí

        // Variables en bucles - solo existen dentro del bucle
        for (int i = 0; i < 5; i++) {
            System.out.println(i);               // OK
        }
        // System.out.println(i);                // ERROR: no existe aquí

        // No puedes declarar dos variables con el mismo nombre en el mismo scope
        // int variableLocal = 10;               // ERROR: ya existe
    }

    public void otroMetodo() {
        // variableLocal NO existe aquí (es local al main)
        System.out.println(variableDeInstancia); // OK
        System.out.println(variableDeClase);     // OK
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Valores por Defecto</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Las variables de clase e instancia tienen valores por defecto. Las variables locales <strong className="text-text">NO</strong>.
        </p>

        <CodeBlock filename="ValoresPorDefecto.java" code={`
public class ValoresPorDefecto {
    // Variables de clase/instancia SÍ tienen valores por defecto
    static int numero;           // 0
    static double decimal;       // 0.0
    static boolean flag;         // false
    static char caracter;        // '\\u0000' (carácter nulo)
    static String texto;         // null
    static int[] array;          // null

    public static void main(String[] args) {
        // Estos imprimen los valores por defecto
        System.out.println("int: " + numero);       // 0
        System.out.println("double: " + decimal);   // 0.0
        System.out.println("boolean: " + flag);     // false
        System.out.println("String: " + texto);     // null

        // Variables LOCALES NO tienen valor por defecto
        int local;
        // System.out.println(local); // ERROR de compilación
        // Debes inicializarlas SIEMPRE antes de usar
    }
}
`} />

        <InfoBox type="tip">
          <strong>Buena práctica:</strong> Siempre inicializa tus variables al declararlas. No dependas de 
          los valores por defecto — hace tu código más legible y menos propenso a bugs.
        </InfoBox>
      </section>
    </div>
  );
}
