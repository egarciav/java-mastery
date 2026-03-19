import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function TiposDatosPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Tipos de Datos</h1>
      <p className="text-text-muted text-lg mb-8">Primitivos y de referencia — la base de todo programa Java</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Tipos Primitivos</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene <strong className="text-text">8 tipos primitivos</strong>. Son los bloques básicos de datos
          que se almacenan directamente en la memoria (stack). No son objetos.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-text-muted">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-text">Tipo</th>
                <th className="text-left py-3 px-3 text-text">Tamaño</th>
                <th className="text-left py-3 px-3 text-text">Rango</th>
                <th className="text-left py-3 px-3 text-text">Valor por defecto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">byte</td><td className="py-2 px-3">8 bits</td><td className="py-2 px-3">-128 a 127</td><td className="py-2 px-3">0</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">short</td><td className="py-2 px-3">16 bits</td><td className="py-2 px-3">-32,768 a 32,767</td><td className="py-2 px-3">0</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">int</td><td className="py-2 px-3">32 bits</td><td className="py-2 px-3">-2³¹ a 2³¹-1</td><td className="py-2 px-3">0</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">long</td><td className="py-2 px-3">64 bits</td><td className="py-2 px-3">-2⁶³ a 2⁶³-1</td><td className="py-2 px-3">0L</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">float</td><td className="py-2 px-3">32 bits</td><td className="py-2 px-3">±3.4 × 10³⁸</td><td className="py-2 px-3">0.0f</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">double</td><td className="py-2 px-3">64 bits</td><td className="py-2 px-3">±1.7 × 10³⁰⁸</td><td className="py-2 px-3">0.0</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">char</td><td className="py-2 px-3">16 bits</td><td className="py-2 px-3">0 a 65,535 (Unicode)</td><td className="py-2 px-3">{`'\\u0000'`}</td></tr>
              <tr><td className="py-2 px-3 font-mono text-primary">boolean</td><td className="py-2 px-3">1 bit*</td><td className="py-2 px-3">true / false</td><td className="py-2 px-3">false</td></tr>
            </tbody>
          </table>
        </div>

        <CodeBlock filename="TiposPrimitivos.java" code={`
public class TiposPrimitivos {
    public static void main(String[] args) {
        // ENTEROS
        byte edadBebe = 2;           // -128 a 127
        short temperatura = -15;      // números pequeños
        int poblacion = 130_000_000;  // el más usado para enteros
        long distanciaEstrella = 9_460_730_472_580_800L; // nota la L al final

        // DECIMALES
        float precio = 19.99f;        // nota la f al final
        double pi = 3.141592653589;   // mayor precisión (el más usado)

        // CARÁCTER
        char letra = 'A';             // comillas simples (UN solo carácter)
        char unicode = '\\u0041';      // también es 'A' en Unicode

        // BOOLEANO
        boolean esMayorDeEdad = true;
        boolean tienePermiso = false;

        // Java permite separadores _ para legibilidad en números
        int millon = 1_000_000;       // se lee más fácil
        long tarjeta = 1234_5678_9012_3456L;

        System.out.println("Población: " + poblacion);
        System.out.println("Pi: " + pi);
        System.out.println("Letra: " + letra);
        System.out.println("¿Mayor de edad? " + esMayorDeEdad);
    }
}
`} />

        <InfoBox type="angular">
          En TypeScript solo existe <code className="text-primary">number</code> para TODOS los números (enteros y decimales).
          En Java debes elegir el tipo específico. Lo más común: <code className="text-primary">int</code> para enteros
          y <code className="text-primary">double</code> para decimales.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Tipos de Referencia</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Todo lo que no es un tipo primitivo es un <strong className="text-text">tipo de referencia</strong>.
          Se almacenan en el heap y la variable contiene una referencia (dirección de memoria) al objeto.
        </p>

        <CodeBlock filename="TiposReferencia.java" code={`
public class TiposReferencia {
    public static void main(String[] args) {
        // String es un tipo de referencia (NO es primitivo)
        String nombre = "Carlos";
        String saludo = new String("Hola"); // otra forma (no recomendada)

        // Arrays son tipos de referencia
        int[] numeros = {1, 2, 3, 4, 5};
        String[] nombres = {"Ana", "Luis", "María"};

        // Cualquier objeto es tipo de referencia
        // Scanner scanner = new Scanner(System.in);

        // null es el valor por defecto de los tipos de referencia
        String textoNull = null; // "no apunta a ningún objeto"

        // CUIDADO: usar null causa NullPointerException
        // textoNull.length(); // ¡CRASH! NullPointerException

        // Verificar null antes de usar
        if (textoNull != null) {
            System.out.println(textoNull.length());
        }
    }
}
`} />

        <InfoBox type="warning" title="Primitivo vs Referencia — Diferencia clave">
          <strong>Primitivos</strong> almacenan el valor directamente. Si copias una variable primitiva, 
          copias el valor. <strong>Referencias</strong> almacenan una dirección de memoria. Si copias una 
          variable de referencia, ambas apuntan al mismo objeto.
        </InfoBox>

        <CodeBlock filename="PrimitivoVsReferencia.java" code={`
public class PrimitivoVsReferencia {
    public static void main(String[] args) {
        // PRIMITIVOS: se copia el VALOR
        int a = 10;
        int b = a;    // b tiene su propia copia del valor 10
        b = 20;       // cambiar b NO afecta a
        System.out.println(a); // 10 (no cambió)
        System.out.println(b); // 20

        // REFERENCIAS: se copia la DIRECCIÓN
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1;  // arr2 apunta al MISMO array
        arr2[0] = 99;       // cambiar arr2 SÍ afecta a arr1
        System.out.println(arr1[0]); // 99 (¡cambió!)
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Wrapper Classes (Clases Envolventes)</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Cada tipo primitivo tiene una <strong className="text-text">clase envolvente</strong> (wrapper) que lo convierte en objeto.
          Son necesarios cuando necesitas usar primitivos con colecciones (List, Map, etc.).
        </p>

        <CodeBlock filename="WrapperClasses.java" code={`
public class WrapperClasses {
    public static void main(String[] args) {
        // Primitivo → Wrapper (autoboxing automático)
        Integer edad = 25;           // int → Integer
        Double precio = 19.99;       // double → Double
        Boolean activo = true;       // boolean → Boolean
        Character letra = 'A';       // char → Character
        Long distancia = 100L;       // long → Long

        // Wrapper → Primitivo (unboxing automático)
        int edadPrimitivo = edad;    // Integer → int
        double precioPrimitivo = precio; // Double → double

        // Métodos útiles de las Wrapper Classes
        int numero = Integer.parseInt("42");       // String → int
        double decimal = Double.parseDouble("3.14"); // String → double
        boolean flag = Boolean.parseBoolean("true"); // String → boolean

        String texto = Integer.toString(42);       // int → String
        String texto2 = String.valueOf(42);        // alternativa

        // Valores máximos y mínimos
        System.out.println("int máximo: " + Integer.MAX_VALUE);   // 2147483647
        System.out.println("int mínimo: " + Integer.MIN_VALUE);   // -2147483648
        System.out.println("double máximo: " + Double.MAX_VALUE);

        // Comparar wrappers: usar .equals(), NO ==
        Integer x = 200;
        Integer y = 200;
        System.out.println(x == y);       // false (compara referencias)
        System.out.println(x.equals(y));  // true (compara valores)
    }
}
`} />

        <InfoBox type="warning">
          <strong>Nunca uses == para comparar Wrapper objects</strong>. Usa <code className="text-primary">.equals()</code>.
          El operador == compara las referencias (direcciones de memoria), no los valores.
          Excepción: Integer caches valores de -128 a 127, por lo que == funciona en ese rango, pero NO confíes en eso.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Casting (Conversión de tipos)</h2>

        <CodeBlock filename="Casting.java" code={`
public class Casting {
    public static void main(String[] args) {
        // WIDENING (implícito): tipo pequeño → tipo grande (seguro)
        // byte → short → int → long → float → double
        int entero = 42;
        double decimal = entero;  // int → double automáticamente
        System.out.println(decimal); // 42.0

        long grande = entero;     // int → long automáticamente
        float flotante = grande;  // long → float automáticamente

        // NARROWING (explícito): tipo grande → tipo pequeño (puede perder datos)
        double pi = 3.14159;
        int piEntero = (int) pi;  // NECESITAS el cast explícito (int)
        System.out.println(piEntero); // 3 (se pierde la parte decimal)

        long valorGrande = 1000L;
        int valorPequeno = (int) valorGrande; // long → int (cast explícito)

        // CUIDADO: overflow silencioso
        int grande2 = 130;
        byte pequeno = (byte) grande2; // 130 no cabe en byte (-128 a 127)
        System.out.println(pequeno);   // -126 (¡overflow!)

        // Convertir String a número
        String textoNumero = "123";
        int numero = Integer.parseInt(textoNumero);
        double decimal2 = Double.parseDouble("45.67");

        // Convertir número a String
        String texto = String.valueOf(123);
        String texto2 = Integer.toString(123);
        String texto3 = "" + 123; // concatenación (funciona pero no ideal)
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">var — Inferencia de tipos (Java 10+)</h2>

        <CodeBlock filename="InferenciaTipos.java" code={`
public class InferenciaTipos {
    public static void main(String[] args) {
        // Desde Java 10, puedes usar 'var' para inferir el tipo
        var nombre = "Carlos";      // Java infiere: String
        var edad = 25;              // Java infiere: int
        var precio = 19.99;         // Java infiere: double
        var activo = true;          // Java infiere: boolean
        var numeros = new int[]{1, 2, 3}; // Java infiere: int[]

        // var SOLO funciona con variables locales (dentro de métodos)
        // NO funciona para:
        // - Campos de clase
        // - Parámetros de métodos
        // - Tipos de retorno

        // var NECESITA un valor inicial (no puede ser null solo)
        // var x;         // ERROR: no puede inferir el tipo
        // var y = null;  // ERROR: no puede inferir el tipo

        // Es útil para tipos largos
        var lista = new java.util.ArrayList<String>(); // en vez de ArrayList<String> lista = ...
    }
}
`} />

        <InfoBox type="angular">
          <code className="text-primary">var</code> en Java es similar a <code className="text-primary">let</code> en 
          TypeScript cuando no especificas el tipo. TypeScript también infiere tipos automáticamente.
          La diferencia es que Java solo permite <code className="text-primary">var</code> en variables locales.
        </InfoBox>
      </section>
    </div>
  );
}
