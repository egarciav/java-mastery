import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function TextBlocksPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Text Blocks y otras novedades</h1>
      <p className="text-text-muted text-lg mb-8">Text Blocks (Java 13+), var (Java 10+) y otras mejoras del lenguaje</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Text Blocks (Java 13+)</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Los <strong className="text-text">Text Blocks</strong> permiten escribir strings multilínea de forma legible 
          con <code className="text-primary">"""..."""</code>. El indentado se gestiona automáticamente.
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
    </div>
  );
}
