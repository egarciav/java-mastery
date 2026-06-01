import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function VariablesConstantesPage() {
  return (
    <div>
      <DayHeader
        day={4}
        title="Variables y Constantes"
        duration="45 min"
        commitMsg="dia-4: variables, final, scope, valores por defecto"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a dominar cómo Java maneja las variables: declaración, scope, constantes con
        <code className="text-primary ml-1">final</code>, y una trampa importante sobre valores por defecto.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Declaración de Variables</h2>

        <ThinkSection title="¿Cómo pensar en las variables de Java vs TypeScript?">
          <p>
            En TypeScript escribes <code className="text-primary">let nombre: string = "Carlos"</code> — el tipo va
            <em> después</em> del nombre, separado por dos puntos. El tipo es opcional (TypeScript lo infiere).
          </p>
          <p>
            En Java escribes <code className="text-primary">String nombre = "Carlos"</code> — el tipo va
            <em> antes</em> del nombre, sin dos puntos. El tipo es <strong className="text-text">obligatorio</strong>
            (excepto cuando usas <code className="text-primary">var</code>, que se infiere automáticamente).
            No existen <code className="text-primary">let</code> ni <code className="text-primary">const</code> en Java.
          </p>
          <p>
            La regla mental: <strong className="text-text">tipo nombre = valor;</strong> — siempre en ese orden.
            Cada sentencia termina con <code className="text-primary">;</code> obligatorio.
          </p>
          <p>
            <strong className="text-text">Equivalencias directas:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>TypeScript <code className="text-primary">let x: number = 5</code> → Java <code className="text-primary">int x = 5;</code></li>
            <li>TypeScript <code className="text-primary">const x = 5</code> → Java <code className="text-primary">final int x = 5;</code></li>
            <li>TypeScript <code className="text-primary">let x = "hola"</code> (inferido) → Java <code className="text-primary">var x = "hola";</code> (Java 10+)</li>
            <li>TypeScript <code className="text-primary">let x: string</code> (sin valor) → Java <code className="text-primary">String x;</code> (pero NO puedes usarla hasta asignarle un valor)</li>
          </ul>
        </ThinkSection>

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
        cantidad = 100;

        // Declarar múltiples del mismo tipo
        int x = 1, y = 2, z = 3;

        // IMPORTANTE: No puedes usar sin inicializar
        int sinValor;
        // System.out.println(sinValor); // ERROR de compilación
        sinValor = 42;
        System.out.println(sinValor); // Ahora sí

        // Reasignar: OK. Cambiar tipo: ERROR
        edad = 26;
        nombre = "Luis";
        // edad = "texto"; // ERROR: no puedes cambiar el tipo
    }
}
`} />

        <InfoBox type="angular">
          En TypeScript: <code className="text-primary">let nombre: string = "Carlos"</code>.
          En Java: <code className="text-primary">String nombre = "Carlos"</code>.
          En Java NO hay <code className="text-primary">let</code>/<code className="text-primary">const</code>/<code className="text-primary">var</code> (bueno, <code className="text-primary">var</code> desde Java 10, pero limitado a variables locales).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Constantes con final</h2>

        <ThinkSection title="final = const de TypeScript... pero hay una trampa importante">
          <p>
            <code className="text-primary">final</code> previene la <strong className="text-text">reasignación</strong>
            de la variable, pero <strong className="text-text">NO impide mutar el objeto al que apunta</strong>.
            Es exactamente igual que <code className="text-primary">const</code> en JavaScript:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">{"const arr = [1,2,3]; arr[0] = 99;"}</code> — funciona en JS</li>
            <li><code className="text-primary">final int[] arr = {'{'}1,2,3{'}'}; arr[0] = 99;</code> — también funciona en Java</li>
            <li><code className="text-primary">arr = new int[]{'{'}4,5,6{'}'};</code> — esto SÍ da error (reasignación)</li>
          </ul>
          <p>
            <strong className="text-text">¿Cuándo usar final?</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Constantes de clase</strong>: <code className="text-primary">static final</code> + nombre en <code className="text-primary">MAYUSCULAS_GUION</code>. Son los equivalentes a las constantes globales de TypeScript.</li>
            <li><strong className="text-text">Parámetros inmutables</strong>: marcar parámetros de método como <code className="text-primary">final</code> deja claro que no se modificarán dentro del método.</li>
            <li><strong className="text-text">Variables en lambdas</strong>: una variable usada dentro de una lambda debe ser efectivamente final (no reasignada después de su declaración). Java lo exige por diseño.</li>
            <li><strong className="text-text">Buena práctica moderna</strong>: muchos equipos Java marcan todas las variables locales como <code className="text-primary">final</code> por defecto para reforzar inmutabilidad y hacer el código más predecible.</li>
          </ul>
          <p>
            Para inmutabilidad <em>real</em> de colecciones, usa <code className="text-primary">List.of()</code> o
            <code className="text-primary"> Collections.unmodifiableList()</code>. <code className="text-primary">final</code>
            solo protege la referencia, no el contenido.
          </p>
        </ThinkSection>

        <CodeBlock filename="Constantes.java" code={`
public class Constantes {
    // Constantes de clase: static final + MAYÚSCULAS
    static final double PI = 3.14159265358979;
    static final int EDAD_MINIMA = 18;
    static final String NOMBRE_APP = "MiAplicación";

    public static void main(String[] args) {
        // Constante local
        final int maxIntentos = 3;
        // maxIntentos = 5; // ERROR: no se puede reasignar

        System.out.println("PI: " + PI);
        System.out.println("Max intentos: " + maxIntentos);

        // TRAMPA: final con objetos/arrays
        final int[] numeros = {1, 2, 3};
        numeros[0] = 99;  // OK: modificar contenido
        // numeros = new int[]{4, 5, 6}; // ERROR: reasignar referencia

        // final puede asignarse después (una sola vez)
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
          <code className="text-primary">final</code> solo previene <strong>reasignación</strong>.
          Si apunta a un array, lista u objeto, puedes modificar su contenido.
          Para inmutabilidad real, necesitarás <code className="text-primary">Collections.unmodifiableList()</code> o
          <code className="text-primary"> List.of()</code> (lo verás en colecciones).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Scope — ¿Dónde vive cada variable?</h2>

        <ThinkSection title="Las 3 zonas de vida de una variable en Java">
          <p>
            Entender el scope (alcance) es fundamental para evitar errores. Una variable solo existe
            dentro del bloque de llaves <code className="text-primary">{'{}'}</code> donde fue declarada.
          </p>
          <p>
            <strong className="text-text">1. Variable de clase (static)</strong> — Declarada con <code className="text-primary">static</code>
            fuera de métodos. Vive durante toda la ejecución del programa (mientras la clase esté cargada).
            Es compartida por <em>todas</em> las instancias de la clase. Cambiarla desde una instancia
            la cambia para todas. Útil para contadores, constantes, registros únicos.
          </p>
          <p>
            <strong className="text-text">2. Variable de instancia</strong> — Declarada sin <code className="text-primary">static</code>
            dentro de la clase pero fuera de métodos. Cada objeto creado con <code className="text-primary">new</code>
            tiene su propia copia. Cuando el Garbage Collector elimina el objeto, la variable desaparece.
          </p>
          <p>
            <strong className="text-text">3. Variable local</strong> — Declarada dentro de un método, bloque
            <code className="text-primary"> if</code>, bucle <code className="text-primary">for</code>, etc. Existe
            <em>solo mientras ese bloque se ejecuta</em>. No tiene valor por defecto — debes
            inicializarla antes de usarla o el compilador dá error.
          </p>
          <p>
            <strong className="text-text">Regla importante:</strong> no puedes acceder a una variable fuera de
            su scope. Esto es una <em>garantía del compilador</em> — es imposible usar accidentalmente
            una variable de otro contexto.
          </p>
        </ThinkSection>

        <CodeBlock filename="Scope.java" code={`
public class Scope {
    // Variable de CLASE — accesible en toda la clase
    static String variableDeClase = "Soy de clase";

    // Variable de INSTANCIA — cada objeto tiene la suya
    String variableDeInstancia = "Soy de instancia";

    public static void main(String[] args) {
        // Variable LOCAL — solo existe en este método
        int variableLocal = 42;
        System.out.println(variableLocal);
        System.out.println(variableDeClase);

        // Variables de BLOQUE — solo dentro de las llaves
        if (true) {
            int dentroDelIf = 100;
            System.out.println(dentroDelIf);
        }
        // System.out.println(dentroDelIf); // ERROR: no existe aquí

        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
        // System.out.println(i); // ERROR: no existe aquí
    }

    public void otroMetodo() {
        // variableLocal NO existe aquí
        System.out.println(variableDeInstancia); // OK
        System.out.println(variableDeClase);     // OK
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Valores por Defecto</h2>

        <CodeBlock filename="ValoresPorDefecto.java" code={`
public class ValoresPorDefecto {
    // Variables de clase/instancia SÍ tienen valores por defecto
    static int numero;           // 0
    static double decimal;       // 0.0
    static boolean flag;         // false
    static char caracter;        // '\\u0000' (carácter nulo)
    static String texto;         // null

    public static void main(String[] args) {
        System.out.println("int: " + numero);       // 0
        System.out.println("double: " + decimal);   // 0.0
        System.out.println("boolean: " + flag);     // false
        System.out.println("String: " + texto);     // null

        // Variables LOCALES NO tienen valor por defecto
        int local;
        // System.out.println(local); // ERROR de compilación
    }
}
`} />

        <InfoBox type="tip">
          <strong>Buena práctica:</strong> Siempre inicializa tus variables al declararlas.
          No dependas de los valores por defecto — hace tu código más legible y menos propenso a bugs.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 4</h2>

        <Exercise
          number={1}
          title="Configuración de app"
          description={`Crea ConfigApp.java con constantes de configuración para una app imaginaria:
- Nombre de la app (String, final)
- Versión (String, final)
- Puerto máximo (int, final)
- Modo debug activado (boolean, final)

Imprímelas todas con formato: "CONFIG: [nombre] = [valor]"`}
          hint="Usa static final para constantes de clase con nombres en MAYÚSCULAS_GUIONES."
          solution={`public class ConfigApp {
    static final String APP_NOMBRE = "TaskManager";
    static final String APP_VERSION = "1.0.0";
    static final int PUERTO_MAXIMO = 8080;
    static final boolean MODO_DEBUG = true;

    public static void main(String[] args) {
        System.out.println("CONFIG: APP_NOMBRE = " + APP_NOMBRE);
        System.out.println("CONFIG: APP_VERSION = " + APP_VERSION);
        System.out.println("CONFIG: PUERTO_MAXIMO = " + PUERTO_MAXIMO);
        System.out.println("CONFIG: MODO_DEBUG = " + MODO_DEBUG);
    }
}`}
          solutionFilename="ConfigApp.java"
        />

        <Exercise
          number={2}
          title="Scope detective"
          description={`Crea ScopeDetective.java que demuestre 3 niveles de scope:
1. Una variable static de clase
2. Una variable local en main
3. Una variable dentro de un bloque if

Para cada una, imprime dónde es accesible y dónde NO (dejando la línea comentada con el error).
Agrega comentarios explicando por qué cada caso funciona o falla.`}
          hint="Las variables de bloque (dentro de if, for, etc.) mueren cuando se cierra la llave }."
          solution={`public class ScopeDetective {
    // Nivel 1: variable de clase — vive en toda la clase
    static String nivel1 = "Soy variable de clase";

    public static void main(String[] args) {
        // Nivel 2: variable local — vive solo en main
        int nivel2 = 42;

        System.out.println(nivel1); // OK: clase accesible aquí
        System.out.println(nivel2); // OK: local accesible aquí

        if (true) {
            // Nivel 3: variable de bloque — solo vive dentro del if
            String nivel3 = "Soy variable de bloque";
            System.out.println(nivel1); // OK
            System.out.println(nivel2); // OK
            System.out.println(nivel3); // OK: estamos dentro del bloque
        }

        // System.out.println(nivel3); // ERROR: nivel3 ya no existe
        System.out.println(nivel1); // OK: sigue viva
        System.out.println(nivel2); // OK: sigue viva
    }
}`}
          solutionFilename="ScopeDetective.java"
        />

        <Exercise
          number={3}
          title="Calculadora de área con constantes"
          description={`Crea CalculadoraArea.java que:
1. Defina PI como constante static final
2. Tenga un método static calcularAreaCirculo(double radio) que retorne PI * radio * radio
3. Tenga un método static calcularAreaRectangulo(int ancho, int alto) que retorne ancho * alto
4. En main, calcula el área de un círculo de radio 5.0 y un rectángulo de 8x3
5. Imprime ambos resultados con printf y 2 decimales`}
          hint="static double calcularAreaCirculo(double radio) { return PI * radio * radio; }"
          solution={`public class CalculadoraArea {
    static final double PI = 3.14159265358979;

    static double calcularAreaCirculo(double radio) {
        return PI * radio * radio;
    }

    static int calcularAreaRectangulo(int ancho, int alto) {
        return ancho * alto;
    }

    public static void main(String[] args) {
        double areaCirculo = calcularAreaCirculo(5.0);
        int areaRectangulo = calcularAreaRectangulo(8, 3);

        System.out.printf("Área del círculo (r=5): %.2f%n", areaCirculo);
        System.out.printf("Área del rectángulo (8x3): %d%n", areaRectangulo);
    }
}`}
          solutionFilename="CalculadoraArea.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-4: variables, constantes final, scope, valores por defecto"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 5</strong>: operadores aritméticos, lógicos,
            de comparación y el operador ternario.
          </p>
        </div>
      </section>
    </div>
  );
}
