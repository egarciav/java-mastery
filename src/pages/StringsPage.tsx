import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function StringsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Strings</h1>
      <p className="text-text-muted text-lg mb-8">Todo sobre cadenas de texto en Java</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Crear Strings</h2>
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
          En TypeScript/JavaScript, los template literals (<code className="text-primary">{"`${variable}`"}</code>) son 
          la forma estándar de formatear strings. En Java usas <code className="text-primary">String.format()</code>,
          el operador <code className="text-primary">+</code>, o <code className="text-primary">StringBuilder</code> para casos de rendimiento.
        </InfoBox>
      </section>
    </div>
  );
}
