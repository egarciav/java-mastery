import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function StringsPage() {
  return (
    <div>
      <DayHeader
        day={6}
        title="Strings"
        duration="50 min"
        commitMsg="dia-6: strings, inmutabilidad, metodos, StringBuilder"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a dominar Strings — el tipo de dato que más usarás en Java. La clave es entender
        que son <strong className="text-text">inmutables</strong> y cuándo usar <code className="text-primary">StringBuilder</code>.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Crear Strings</h2>

        <ThinkSection title="¿Por qué los Strings son inmutables en Java?">
          <p>
            En TypeScript/JavaScript, los strings también son inmutables, pero casi nadie lo piensa
            porque JavaScript oculta ese detalle. En Java es <strong className="text-text">algo que hay que tener
            presente activamente</strong>, porque afecta directamente al rendimiento y al diseño.
          </p>
          <p>
            <strong className="text-text">¿Qué significa inmutable?</strong> Que una vez creado un objeto String,
            su contenido nunca cambia. Cuando escribes <code className="text-primary">texto = texto + " mundo"</code>,
            Java NO modifica el objeto original. Crea un <em>nuevo</em> objeto String que contiene
            la concatenación, y tu variable ahora apunta a ese nuevo objeto. El objeto anterior
            queda huerfano esperando al Garbage Collector.
          </p>
          <p>
            <strong className="text-text">¿Por qué se diseñó así?</strong> La inmutabilidad da varias ventajas:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Thread safety</strong>: múltiples hilos pueden leer el mismo String sin sincronización.</li>
            <li><strong className="text-text">String Pool</strong>: Java puede reutilizar objetos String idénticos en memoria. Si dos variables tienen el valor <code className="text-primary">"hola"</code>, apuntan al mismo objeto en el pool. Esto ahorra memoria.</li>
            <li><strong className="text-text">Seguridad</strong>: los Strings se usan para rutas de archivos, credenciales, URLs. Si fueran mutables, podría modificarse su contenido después de una validación de seguridad.</li>
            <li><strong className="text-text">Hashcodes estables</strong>: los Strings se usan como claves en HashMaps. Su hash debe ser constante.</li>
          </ul>
          <p>
            <strong className="text-text">La consecuencia práctica del rendimiento:</strong> Si concatenas en un bucle
            de 10,000 iteraciones con <code className="text-primary">+</code>, creas 10,000 objetos String
            temporales en el heap. Por eso existe <code className="text-primary">StringBuilder</code>:
            modifica un buffer interno sin crear objetos nuevos. La diferencia de rendimiento puede
            ser de 10x a 100x en bucles grandes.
          </p>
        </ThinkSection>

        <CodeBlock filename="CrearStrings.java" code={`
public class CrearStrings {
    public static void main(String[] args) {
        // Forma más común (String literal - usa el String Pool)
        String nombre = "Carlos";

        // Con new (NO recomendado - crea objeto nuevo en heap)
        String nombre2 = new String("Carlos");

        // String es INMUTABLE: no puedes cambiar su contenido
        String saludo = "Hola";
        saludo = saludo + " Mundo"; // Crea un NUEVO String, no modifica el original

        // Strings vacíos y null
        String vacio = "";          // String vacío (existe, longitud 0)
        String nulo = null;         // No apunta a ningún String

        // Text blocks (Java 15+) - Strings multilínea
        String json = """
                {
                    "nombre": "Carlos",
                    "edad": 25
                }
                """;
        System.out.println(json);
    }
}
`} />
        <InfoBox type="warning" title="String es inmutable">
          Cada vez que "modificas" un String, se crea uno nuevo en memoria. Para muchas concatenaciones 
          en un bucle, usa <code className="text-primary">StringBuilder</code> (más eficiente).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Métodos esenciales de String</h2>
        <CodeBlock filename="MetodosString.java" code={`
public class MetodosString {
    public static void main(String[] args) {
        String texto = "  Hola Mundo Java  ";

        // Longitud
        System.out.println(texto.length());         // 19

        // Acceder a un carácter por índice (0-based)
        System.out.println(texto.charAt(2));         // 'H'

        // Mayúsculas y minúsculas
        System.out.println("hola".toUpperCase());    // "HOLA"
        System.out.println("HOLA".toLowerCase());    // "hola"

        // Eliminar espacios al inicio y final
        System.out.println(texto.trim());            // "Hola Mundo Java"
        System.out.println(texto.strip());           // "Hola Mundo Java" (Java 11+, maneja Unicode)

        // Buscar
        System.out.println(texto.contains("Mundo")); // true
        System.out.println(texto.indexOf("Mundo"));   // 7 (posición donde empieza)
        System.out.println(texto.indexOf("xyz"));     // -1 (no encontrado)
        System.out.println(texto.startsWith("  H")); // true
        System.out.println(texto.endsWith("  "));    // true

        // Subcadena
        System.out.println("Hola Mundo".substring(5));     // "Mundo"
        System.out.println("Hola Mundo".substring(0, 4));  // "Hola"

        // Reemplazar
        System.out.println("Hola Mundo".replace("Mundo", "Java")); // "Hola Java"
        System.out.println("aaa-bbb-ccc".replace("-", "_"));       // "aaa_bbb_ccc"

        // Dividir en array
        String csv = "Juan,María,Pedro,Ana";
        String[] nombres = csv.split(",");
        // nombres = ["Juan", "María", "Pedro", "Ana"]

        // Unir (Java 8+)
        String unido = String.join(" - ", nombres);
        System.out.println(unido); // "Juan - María - Pedro - Ana"

        // Verificar vacío
        System.out.println("".isEmpty());      // true
        System.out.println("  ".isEmpty());    // false (tiene espacios)
        System.out.println("  ".isBlank());    // true (Java 11+ - solo espacios)

        // Repetir (Java 11+)
        System.out.println("Ha".repeat(3));    // "HaHaHa"

        // Comparar Strings
        System.out.println("hola".equals("hola"));           // true
        System.out.println("hola".equals("Hola"));           // false
        System.out.println("hola".equalsIgnoreCase("Hola")); // true
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Formatear Strings</h2>
        <CodeBlock filename="FormatearStrings.java" code={`
public class FormatearStrings {
    public static void main(String[] args) {
        String nombre = "Carlos";
        int edad = 25;
        double salario = 45000.50;

        // String.format()
        String info = String.format("Nombre: %s, Edad: %d, Salario: $%.2f", nombre, edad, salario);
        System.out.println(info);
        // "Nombre: Carlos, Edad: 25, Salario: $45000.50"

        // formatted() - Java 15+
        String info2 = "Nombre: %s, Edad: %d".formatted(nombre, edad);

        // Convertir otros tipos a String
        String num = String.valueOf(42);        // "42"
        String dec = String.valueOf(3.14);      // "3.14"
        String bool = String.valueOf(true);     // "true"

        // Concatenación con + (simple pero ineficiente en bucles)
        String resultado = nombre + " tiene " + edad + " años";
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">StringBuilder — Para concatenaciones eficientes</h2>
        <CodeBlock filename="StringBuilderEjemplo.java" code={`
public class StringBuilderEjemplo {
    public static void main(String[] args) {
        // MALO: cada + crea un nuevo String en memoria
        String resultado = "";
        for (int i = 0; i < 1000; i++) {
            resultado += i + ", "; // ¡1000 objetos String creados!
        }

        // BUENO: StringBuilder modifica el mismo objeto
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            sb.append(i).append(", ");
        }
        String resultadoFinal = sb.toString();

        // Métodos de StringBuilder
        StringBuilder builder = new StringBuilder("Hola");
        builder.append(" Mundo");          // "Hola Mundo"
        builder.insert(5, " Bello");       // "Hola Bello Mundo"
        builder.replace(5, 11, " Gran");   // "Hola Gran Mundo"
        builder.delete(4, 9);              // "Hola Mundo"
        builder.reverse();                 // "odnuM aloH"

        System.out.println(builder.toString());

        // StringBuilder NO es thread-safe
        // Para multi-threading usa StringBuffer (misma API, pero sincronizado)
    }
}
`} />
        <InfoBox type="angular">
          En TypeScript/JavaScript, los template literals con backticks son la forma estándar de
          formatear strings con interpolación de variables. En Java tienes tres opciones:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="text-primary">String.format("Hola %s", nombre)</code> — retorna un String formateado (similar a template literals)</li>
            <li><code className="text-primary">"Hola %s".formatted(nombre)</code> — Java 15+, mismo resultado, más fluido</li>
            <li>Text Blocks con <code className="text-primary">"""..."""</code> (Java 15+) — para Strings multilínea como JSON, HTML, SQL</li>
          </ul>
          Java <strong>NO tiene interpolación directa</strong> de variables en Strings como los backticks.
          Siempre necesitas <code className="text-primary">format()</code>, concatenación con <code className="text-primary">+</code>, o <code className="text-primary">StringBuilder</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 6</h2>

        <Exercise
          number={1}
          title="Procesador de nombres"
          description={`Crea ProcesadorNombres.java con un método static procesarNombre(String nombreCompleto) que:
1. Reciba un nombre completo (ej: "  carlos GARCÍA  ")
2. Elimine espacios al inicio y final (trim)
3. Convierta a Title Case: primera letra mayúscula, el resto minúscula para cada palabra
4. Retorne el nombre procesado

Prueba con: "  carlos GARCÍA  ", "ANA maría LÓPEZ", "  juan  "`}
          hint="Usa trim(), split() para separar por espacios, luego para cada palabra: substring(0,1).toUpperCase() + substring(1).toLowerCase()"
          solution={`public class ProcesadorNombres {
    static String procesarNombre(String nombreCompleto) {
        String limpio = nombreCompleto.trim();
        String[] partes = limpio.split("\\\\s+");
        StringBuilder resultado = new StringBuilder();

        for (int i = 0; i < partes.length; i++) {
            if (i > 0) resultado.append(" ");
            String palabra = partes[i];
            resultado.append(palabra.substring(0, 1).toUpperCase())
                     .append(palabra.substring(1).toLowerCase());
        }
        return resultado.toString();
    }

    public static void main(String[] args) {
        System.out.println(procesarNombre("  carlos GARCÍA  "));
        System.out.println(procesarNombre("ANA maría LÓPEZ"));
        System.out.println(procesarNombre("  juan  "));
    }
}`}
          solutionFilename="ProcesadorNombres.java"
        />

        <Exercise
          number={2}
          title="Analizador de texto"
          description={`Crea AnalizadorTexto.java con un método static analizarTexto(String texto) que imprima:
- Longitud del texto
- Número de palabras (split por espacios)
- Número de vocales (a, e, i, o, u — sin importar mayúsculas)
- El texto en reversa

Prueba con: "Java es un lenguaje genial"`}
          hint="Para contar vocales, convierte a minúsculas y recorre con charAt() verificando si es vocal. Para reversa, usa new StringBuilder(texto).reverse().toString()"
          solution={`public class AnalizadorTexto {
    static void analizarTexto(String texto) {
        System.out.println("Texto: " + texto);
        System.out.println("Longitud: " + texto.length());
        System.out.println("Palabras: " + texto.split("\\\\s+").length);

        int vocales = 0;
        String lower = texto.toLowerCase();
        for (int i = 0; i < lower.length(); i++) {
            char c = lower.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vocales++;
            }
        }
        System.out.println("Vocales: " + vocales);

        String reversa = new StringBuilder(texto).reverse().toString();
        System.out.println("Reversa: " + reversa);
    }

    public static void main(String[] args) {
        analizarTexto("Java es un lenguaje genial");
    }
}`}
          solutionFilename="AnalizadorTexto.java"
        />

        <Exercise
          number={3}
          title="Generador de email"
          description={`Crea GeneradorEmail.java con un método static generarEmail(String nombre, String apellido, String empresa) que:
1. Tome nombre, apellido y empresa
2. Genere un email: nombre.apellido@empresa.com
3. Todo en minúsculas, sin espacios, sin acentos (simplifica: no te preocupes por acentos por ahora)

Prueba con: ("Carlos", "García", "Google") → carlos.garcia@google.com

Bonus: usa StringBuilder para construir el email.`}
          hint='new StringBuilder().append(nombre.toLowerCase()).append(".").append(apellido.toLowerCase()).append("@")...'
          solution={`public class GeneradorEmail {
    static String generarEmail(String nombre, String apellido, String empresa) {
        return new StringBuilder()
            .append(nombre.toLowerCase().trim())
            .append(".")
            .append(apellido.toLowerCase().trim())
            .append("@")
            .append(empresa.toLowerCase().trim())
            .append(".com")
            .toString();
    }

    public static void main(String[] args) {
        System.out.println(generarEmail("Carlos", "García", "Google"));
        System.out.println(generarEmail("Ana", "López", "Microsoft"));
        System.out.println(generarEmail("Juan", "Pérez", "Amazon"));
    }
}`}
          solutionFilename="GeneradorEmail.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-6: strings, inmutabilidad, metodos, StringBuilder, formateo"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 7</strong>: condicionales — if/else,
            switch, y pattern matching.
          </p>
        </div>
      </section>
    </div>
  );
}
