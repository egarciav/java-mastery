import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function IOArchivosPage() {
  return (
    <div>
      <DayHeader
        day={27}
        title="I/O y Archivos"
        duration="45 min"
        commitMsg="dia-27: Path, Files, BufferedReader, try-with-resources"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás a leer y escribir archivos con <code className="text-primary">java.nio.file</code> — la
        API moderna de I/O. Entenderás Path, Files, try-with-resources, y cuándo usar cada método
        según el tamaño del archivo.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">java.nio.file — La API moderna</h2>

        <ThinkSection title="java.nio.file vs java.io — por qué la API moderna importa">
          <p>
            Java tiene dos APIs para archivos. La vieja <code className="text-primary">java.io.File</code>
            (Java 1.0, 1996) tiene problemas históricos: el método <code className="text-primary">delete()</code>
            retorna <code className="text-primary">false</code> silenciosamente en vez de lanzar excepción,
            no soporta links simbólicos bien, y su API es inconsistente.
            La moderna <code className="text-primary">java.nio.file</code> (NIO.2, Java 7+) lanza excepciones
            descriptivas, soporta todas las operaciones del sistema de archivos, y tiene una API fluida.
            <strong className="text-text"> Siempre usa NIO.2</strong>.
          </p>
          <p>
            <strong className="text-text">Los dos actores principales:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">Path</code>: representa una ruta (puede no existir). Es inmutable. Úsalo como el equivalente Java de una cadena de ruta. <code className="text-primary">Path.of("/home/user/file.txt")</code> o <code className="text-primary">Paths.get("config.json")</code>.</li>
            <li><code className="text-primary">Files</code>: clase utilitaria con todos los métodos estáticos. Leer, escribir, copiar, mover, eliminar, verificar existencia, crear directorios.</li>
          </ul>
          <p>
            <strong className="text-text">Elegir el método según el tamaño del archivo:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Pequeño (&lt;50MB)</strong>: <code className="text-primary">Files.readString(path)</code> carga todo el archivo en un String. Simple y directo.</li>
            <li><strong className="text-text">Mediano</strong>: <code className="text-primary">Files.readAllLines(path)</code> carga todas las líneas en una <code className="text-primary">List&lt;String&gt;</code>.</li>
            <li><strong className="text-text">Grande (&gt;100MB)</strong>: <code className="text-primary">Files.lines(path)</code> retorna un Stream lazy — lee línea por línea sin cargar todo en RAM. O usa <code className="text-primary">BufferedReader</code> para control total.</li>
          </ul>
          <p>
            <strong className="text-text">try-with-resources</strong>: cualquier recurso que implemente
            <code className="text-primary"> Closeable</code> (archivos, conexiones, streams) debe cerrarse
            después de usarse. <code className="text-primary">try (var reader = new BufferedReader(...)) {'{'} ... {'}'}</code>
            garantiza el cierre automático incluso si ocurre una excepción. Es el equivalente Java del
            <code className="text-primary"> using</code> de C# o los context managers de Python.
          </p>
        </ThinkSection>

        <CodeBlock filename="NIOArchivos.java" code={`
import java.nio.file.*;
import java.io.IOException;
import java.util.List;

public class NIOArchivos {
    public static void main(String[] args) throws IOException {
        Path archivo = Path.of("datos.txt");

        // Escribir archivo completo
        Files.writeString(archivo, "Hola Mundo\\nSegunda línea");

        // Leer archivo completo como String
        String contenido = Files.readString(archivo);
        System.out.println(contenido);

        // Leer todas las líneas como List
        List<String> lineas = Files.readAllLines(archivo);
        lineas.forEach(System.out::println);

        // Escribir lista de líneas
        Files.write(Path.of("salida.txt"), List.of("Línea 1", "Línea 2"));

        // Verificar existencia
        System.out.println(Files.exists(archivo));    // true
        System.out.println(Files.isDirectory(archivo)); // false

        // Copiar y mover
        Files.copy(archivo, Path.of("copia.txt"), StandardCopyOption.REPLACE_EXISTING);
        // Files.move(archivo, Path.of("nuevo.txt"));

        // Eliminar
        Files.deleteIfExists(Path.of("copia.txt"));

        // Listar directorio
        try (var stream = Files.list(Path.of("."))) {
            stream.filter(Files::isRegularFile)
                  .forEach(System.out::println);
        }

        // Crear directorios
        Files.createDirectories(Path.of("carpeta/subcarpeta"));
    }
}
`} />
        <InfoBox type="tip">
          Siempre prefiere <code className="text-primary">java.nio.file</code> sobre <code className="text-primary">java.io.File</code>.
          Es más moderno, más seguro y tiene mejor manejo de errores. <code className="text-primary">Files</code> y
          <code className="text-primary"> Path</code> son las clases principales.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">BufferedReader/Writer (streams grandes)</h2>
        <CodeBlock filename="BufferedIO.java" code={`
import java.io.*;
import java.nio.file.*;

public class BufferedIO {
    public static void main(String[] args) throws IOException {
        // Para archivos grandes: leer línea por línea (no cargar todo en memoria)
        try (BufferedReader reader = Files.newBufferedReader(Path.of("grande.txt"))) {
            String linea;
            while ((linea = reader.readLine()) != null) {
                System.out.println(linea);
            }
        }

        // Escribir línea por línea
        try (BufferedWriter writer = Files.newBufferedWriter(Path.of("salida.txt"))) {
            writer.write("Primera línea");
            writer.newLine();
            writer.write("Segunda línea");
        }
        // El try-with-resources cierra automáticamente el writer
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 27</h2>
        <Exercise
          number={1}
          title="Contador de palabras en archivo"
          description={`Crea ContadorArchivo.java que:
1. Lea un archivo de texto línea por línea
2. Cuente: total líneas, total palabras, total caracteres
3. Encuentre la línea más larga
4. Imprima un resumen estilo wc de Linux`}
          hint="Usa Files.readAllLines() o Files.lines() (stream). Para palabras: linea.split('\\s+').length"
          solution={`import java.nio.file.*;
import java.io.IOException;

public class ContadorArchivo {
    public static void main(String[] args) throws IOException {
        Path archivo = Path.of("datos.txt");
        // Crear archivo de prueba
        Files.writeString(archivo, "Hola mundo\nJava es genial\nNIO es moderno y potente");

        var lineas = Files.readAllLines(archivo);
        long totalLineas = lineas.size();
        long totalPalabras = lineas.stream()
            .mapToInt(l -> l.split("\\s+").length).sum();
        long totalChars = lineas.stream()
            .mapToInt(String::length).sum();
        String masLarga = lineas.stream()
            .reduce((a, b) -> a.length() >= b.length() ? a : b)
            .orElse("");

        System.out.printf("Líneas: %d%n", totalLineas);
        System.out.printf("Palabras: %d%n", totalPalabras);
        System.out.printf("Caracteres: %d%n", totalChars);
        System.out.printf("Línea más larga: %s%n", masLarga);
    }
}`}
          solutionFilename="ContadorArchivo.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-27: I/O archivos, Path, Files, BufferedReader"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 28</strong> — API de Fechas: LocalDate, LocalDateTime, Duration.
          </p>
        </div>
      </section>
    </div>
  );
}
