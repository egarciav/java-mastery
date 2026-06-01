import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function OptionalPage() {
  return (
    <div>
      <DayHeader
        day={24}
        title="Optional"
        duration="40 min"
        commitMsg="dia-24: Optional, orElse, map, flatMap, ifPresent"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás <code className="text-primary">Optional&lt;T&gt;</code> — el arma definitiva contra
        <code className="text-primary"> NullPointerException</code>, el error más común en la historia de Java.
        En Spring Boot lo verás en cada <code className="text-primary">findById()</code> de tus repositorios.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué existe Optional?</h2>

        <ThinkSection title="Optional: eliminar NullPointerException del vocabulario de tu API">
          <p>
            Tony Hoare, quien inventó el concepto de null en 1965, lo llamó su <em>"billion dollar mistake"</em> —
            estimó que los errores de null han costado miles de millones en bugs y downtime. Java vivió con
            este problema durante décadas hasta Java 8, cuando llegó <code className="text-primary">Optional</code>.
          </p>
          <p>
            En TypeScript tienes <code className="text-primary">?.</code> (optional chaining) y <code className="text-primary">??</code>
            (nullish coalescing) a nivel de lenguaje. En Java, <code className="text-primary">Optional</code> es una solución
            de biblioteca: una clase genérica que actúa como contenedor. Puede contener un valor,
            o estar vacío. El punto es que la <em>posibilidad de ausencia está expresada en el tipo</em>:
            <code className="text-primary"> Optional&lt;Usuario&gt;</code> le dice al que llama tu método
            "este valor puede no existir — trátalo como tal".
          </p>
          <p>
            <strong className="text-text">Reglas de uso correcto (las más ignoradas en Java):</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">SÍ</strong>: como tipo de retorno de métodos que pueden no encontrar un resultado (<code className="text-primary">Optional&lt;Usuario&gt; findByEmail(String email)</code>).</li>
            <li><strong className="text-text">NO</strong>: como parámetro de método. Usa sobrecarga o valores por defecto en su lugar.</li>
            <li><strong className="text-text">NO</strong>: como campo de clase. Los fields deben ser el tipo directo. Optional no es <code className="text-primary">Serializable</code>.</li>
            <li><strong className="text-text">NO</strong>: hagas <code className="text-primary">optional.get()</code> sin verificar primero con <code className="text-primary">isPresent()</code> — lanza <code className="text-primary">NoSuchElementException</code>. Usa <code className="text-primary">orElse()</code>, <code className="text-primary">orElseThrow()</code>, o <code className="text-primary">ifPresent()</code>.</li>
          </ul>
          <p>
            <strong className="text-text">En Spring Data</strong>, los repositorios retornan
            <code className="text-primary"> Optional&lt;T&gt;</code> por defecto: <code className="text-primary">findById()</code>
            retorna <code className="text-primary">Optional&lt;Producto&gt;</code>. Si el ID no existe, en vez de null,
            recibes <code className="text-primary">Optional.empty()</code>. Esto fuerza al servicio a manejar
            explícitamente el caso "no encontrado" antes de responder al cliente.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Piensa en Optional como una caja que puede contener un valor o estar vacía.
          En vez de verificar <code className="text-primary">if (resultado != null)</code>, usas métodos expresivos
          como <code className="text-primary">orElse()</code>, <code className="text-primary">map()</code>,
          <code className="text-primary"> ifPresent()</code> que hacen tu código más legible y seguro.
        </p>

        <CodeBlock filename="OptionalEjemplo.java" code={`
import java.util.Optional;

public class OptionalEjemplo {
    public static void main(String[] args) {
        // Crear Optional
        Optional<String> conValor = Optional.of("Hola");
        Optional<String> vacio = Optional.empty();
        Optional<String> nullable = Optional.ofNullable(null); // no lanza excepción

        // Verificar si tiene valor
        System.out.println(conValor.isPresent()); // true
        System.out.println(vacio.isEmpty());      // true (Java 11+)

        // Obtener valor
        String valor = conValor.get(); // "Hola" (lanza excepción si vacío)

        // Valor por defecto
        String resultado = vacio.orElse("Valor por defecto");
        String lazy = vacio.orElseGet(() -> "Calculado bajo demanda");

        // Lanzar excepción si vacío
        // String error = vacio.orElseThrow(() -> new RuntimeException("No hay valor"));

        // ifPresent: ejecutar solo si hay valor
        conValor.ifPresent(v -> System.out.println("Valor: " + v));

        // ifPresentOrElse (Java 9+)
        vacio.ifPresentOrElse(
            v -> System.out.println("Hay: " + v),
            () -> System.out.println("Vacío")
        );
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Encadenar operaciones</h2>
        <CodeBlock filename="OptionalChain.java" code={`
import java.util.Optional;

public class OptionalChain {
    record Usuario(String nombre, String email) {}

    static Optional<Usuario> buscarPorId(int id) {
        if (id == 1) return Optional.of(new Usuario("Carlos", "carlos@mail.com"));
        return Optional.empty();
    }

    public static void main(String[] args) {
        // map: transformar el valor si existe
        Optional<String> nombre = buscarPorId(1)
            .map(Usuario::nombre);  // Optional["Carlos"]

        // flatMap: cuando el resultado ya es Optional
        // filter: filtrar el valor
        String email = buscarPorId(1)
            .filter(u -> u.nombre().startsWith("C"))
            .map(Usuario::email)
            .orElse("no-email");

        System.out.println(email); // "carlos@mail.com"

        // Patrón: nunca retornes null, retorna Optional
        // MAL:  public String buscar() { return null; }
        // BIEN: public Optional<String> buscar() { return Optional.empty(); }
    }
}
`} />
        <InfoBox type="tip">
          Usa Optional como tipo de retorno de métodos que pueden no tener resultado.
          <strong> Nunca</strong> uses Optional como parámetro de método ni como campo de clase.
          Su propósito es comunicar al llamador que el resultado puede estar ausente.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 24</h2>
        <Exercise
          number={1}
          title="Repositorio con Optional"
          description={`Crea un mini repositorio en memoria:
1. Clase Usuario(int id, String nombre, String email)
2. Clase UsuarioRepo con Map<Integer, Usuario> interno
3. Método Optional<Usuario> buscarPorId(int id)
4. Método Optional<Usuario> buscarPorEmail(String email)
5. En main: busca usuarios existentes y no existentes, usa orElse, map, ifPresent`}
          hint="return Optional.ofNullable(usuarios.get(id));"
          solution={`import java.util.*;

public class UsuarioRepo {
    record Usuario(int id, String nombre, String email) {}

    private Map<Integer, Usuario> usuarios = new HashMap<>();

    public void guardar(Usuario u) { usuarios.put(u.id(), u); }

    public Optional<Usuario> buscarPorId(int id) {
        return Optional.ofNullable(usuarios.get(id));
    }

    public Optional<Usuario> buscarPorEmail(String email) {
        return usuarios.values().stream()
            .filter(u -> u.email().equals(email))
            .findFirst();
    }

    public static void main(String[] args) {
        UsuarioRepo repo = new UsuarioRepo();
        repo.guardar(new Usuario(1, "Carlos", "carlos@mail.com"));
        repo.guardar(new Usuario(2, "Ana", "ana@mail.com"));

        repo.buscarPorId(1).ifPresent(u -> System.out.println("Encontrado: " + u));

        String nombre = repo.buscarPorId(99)
            .map(Usuario::nombre)
            .orElse("Desconocido");
        System.out.println("Nombre: " + nombre);

        repo.buscarPorEmail("ana@mail.com")
            .ifPresentOrElse(
                u -> System.out.println("Email de: " + u.nombre()),
                () -> System.out.println("No encontrado")
            );
    }
}`}
          solutionFilename="UsuarioRepo.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-24: Optional, orElse, map, flatMap, ifPresent"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 25</strong> — Concurrencia: threads, synchronized, ExecutorService.
          </p>
        </div>
      </section>
    </div>
  );
}
