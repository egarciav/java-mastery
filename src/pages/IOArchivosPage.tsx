import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function IOArchivosPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">I/O y Archivos</h1>
      <p className="text-text-muted text-lg mb-8">Leer y escribir archivos con java.nio y java.io</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">java.nio.file (moderno)</h2>
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
    </div>
  );
}
