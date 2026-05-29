import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function TextBlocksPage() {
  return (
    <div>
      <DayHeader
        day={33}
        title="Text Blocks y Novedades"
        duration="40 min"
        commitMsg="dia-33: text blocks, var, string enhancements"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy cierras la sección de Java Moderno con varias features que hacen tu código más limpio:
        Text Blocks para strings multilínea, <code className="text-primary">var</code> para inferencia de tipos,
        y mejoras de String como <code className="text-primary">.formatted()</code> y <code className="text-primary">.isBlank()</code>.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Text Blocks (Java 13+)</h2>

        <ThinkSection title="Text Blocks = template literals sin interpolación">
          <p>
            En TypeScript usas backticks: <code className="text-primary">{"`Hola ${nombre}`"}</code> con
            interpolación directa de variables. En Java, los Text Blocks usan <code className="text-primary">{"\"\"\"....\"\"\""}</code>
            para strings multilínea, pero <strong className="text-text">NO tienen interpolación de variables</strong>.
            Para insertar valores, usas <code className="text-primary">.formatted()</code> (como printf) o
            concatenación con <code className="text-primary">+</code>.
          </p>
          <p>
            <strong className="text-text">¿Cuándo usarlos?</strong> Son ideales para JSON, SQL, HTML, XML, o cualquier
            string multilínea que sería ilegible con <code className="text-primary">\n</code> y concatenación.
            El indentado se gestiona automáticamente — Java detecta el indentado común y lo elimina.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Antes de Java 13, escribir un JSON o SQL multilínea era un desastre de escapes y concatenaciones.
          Los Text Blocks eliminan ese problema por completo — escribes el texto tal cual y Java maneja los saltos de línea.
        </p>
        <CodeBlock filename="TextBlocks.java" code={`
// Antes de Java 13: string con escapes
String json = "{\n" +
              "  \"nombre\": \"Carlos\",\n" +
              "  \"edad\": 25\n" +
              "}";

// Con Text Block (Java 13+): mucho más legible
String json = """
        {
          "nombre": "Carlos",
          "edad": 25
        }
        """;

// Ideal para JSON, SQL, HTML, XML
String sql = """
        SELECT u.nombre, u.email
        FROM usuarios u
        WHERE u.activo = true
        ORDER BY u.nombre
        """;

String html = """
        <html>
          <body>
            <h1>Hola, %s!</h1>
          </body>
        </html>
        """.formatted("Carlos"); // con String.formatted()

// Métodos útiles con Text Blocks
String texto = """
        Línea 1
        Línea 2
        Línea 3
        """;

System.out.println(texto.lines().count()); // 3
System.out.println(texto.stripIndent());   // elimina indentado común
`} />
        <InfoBox type="angular">
          Los Text Blocks son el equivalente de los template literals de JavaScript/TypeScript con backticks:
          <code className="text-primary"> `...`</code>. La diferencia es que Java usa <code className="text-primary">"""</code> en lugar de backticks.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">var — Inferencia de tipos local (Java 10+)</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          <code className="text-primary">var</code> permite que el compilador infiera el tipo de una variable local. 
          Java sigue siendo estáticamente tipado — <code className="text-primary">var</code> es solo azúcar sintáctico.
        </p>
        <CodeBlock filename="VarEjemplo.java" code={`
// Sin var (explícito)
ArrayList<String> lista = new ArrayList<String>();
Map<String, List<Integer>> mapa = new HashMap<String, List<Integer>>();

// Con var (el compilador infiere el tipo)
var lista = new ArrayList<String>();       // tipo: ArrayList<String>
var mapa = new HashMap<String, List<Integer>>(); // tipo: HashMap<String, List<Integer>>
var numero = 42;                           // tipo: int
var texto = "Hola Java";                  // tipo: String
var precio = 19.99;                       // tipo: double

// var en bucles for-each
for (var elemento : lista) {
    System.out.println(elemento.toUpperCase()); // el compilador sabe que es String
}

// var con streams
var nombres = List.of("Carlos", "Ana", "Luis");
var filtrados = nombres.stream()
    .filter(n -> n.startsWith("C"))
    .collect(Collectors.toList());

// NO se puede usar var con:
// var x;           // sin inicialización
// var x = null;    // tipo ambiguo
// var[] arr;       // arrays
// return var;      // fuera de ámbito local
`} />
        <InfoBox type="tip">
          Usa <code className="text-primary">var</code> cuando el tipo es obvio por el lado derecho (ej: <code className="text-primary">new ArrayList&lt;&gt;()</code>).
          Evítalo cuando el tipo no es claro sin leerlo (reduce legibilidad). Es especialmente útil para 
          tipos genéricos largos.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">String enhancements (Java 11+)</h2>
        <CodeBlock filename="StringMethods.java" code={`
// Java 11: nuevos métodos en String
String texto = "  hola mundo  ";

texto.isBlank();          // false (solo espacios = true)
texto.strip();            // "hola mundo" (mejor que trim() para Unicode)
texto.stripLeading();     // "hola mundo  "
texto.stripTrailing();    // "  hola mundo"

"".isBlank();             // true
"   ".isBlank();          // true

// repeat (Java 11)
"=-".repeat(10);          // "=-=-=-=-=-=-=-=-=-=-"

// lines() — stream de líneas
String multilinea = "linea1\\nlinea2\\nlinea3";
multilinea.lines()
    .map(String::trim)
    .forEach(System.out::println);

// Java 12: indent()
"hola\\nmundo".indent(4); // añade 4 espacios a cada línea

// Java 15: String.formatted() — alternativa a String.format()
"Hola %s, tienes %d años".formatted("Carlos", 25);
// = String.format("Hola %s, tienes %d años", "Carlos", 25)
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 33</h2>
        <Exercise
          number={1}
          title="Generador de HTML con Text Blocks"
          description={`Crea GeneradorHTML.java que:
1. Use Text Blocks para definir un template HTML con placeholders %s
2. Método static String generarPagina(String titulo, String contenido)
3. Método static String generarTabla(List<String[]> filas)
4. Use .formatted() para insertar valores
5. Imprima el HTML resultante`}
          hint={'String template = """\n<html>...\n""".formatted(titulo, contenido);'}
          solution={`import java.util.List;

public class GeneradorHTML {
    static String generarPagina(String titulo, String contenido) {
        return """
            <html>
              <head><title>%s</title></head>
              <body>
                <h1>%s</h1>
                <div>%s</div>
              </body>
            </html>
            """.formatted(titulo, titulo, contenido);
    }

    static String generarTabla(List<String[]> filas) {
        var sb = new StringBuilder("<table>\\n");
        for (var fila : filas) {
            sb.append("  <tr>");
            for (var celda : fila) sb.append("<td>%s</td>".formatted(celda));
            sb.append("</tr>\\n");
        }
        sb.append("</table>");
        return sb.toString();
    }

    public static void main(String[] args) {
        var tabla = generarTabla(List.of(
            new String[]{"Java", "17"},
            new String[]{"Spring", "3.2"}
        ));
        System.out.println(generarPagina("Mi App", tabla));
    }
}`}
          solutionFilename="GeneradorHTML.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-33: text blocks, var, string enhancements"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 34</strong> — Spring Boot: introducción al framework.
          </p>
        </div>
      </section>
    </div>
  );
}
