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
        Hoy aprenderás Optional — la forma elegante de eliminar NullPointerException.
        En Spring Boot lo verás constantemente en repositorios y servicios.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Crear y usar Optional</h2>

        <ThinkSection title="Optional = un contenedor que puede estar vacío">
          <p>
            En TypeScript puedes usar <code className="text-primary">?.</code> y <code className="text-primary">??</code> para manejar nulls.
            En Java, <code className="text-primary">Optional</code> es un wrapper explícito: te obliga a pensar qué pasa cuando no hay valor.
          </p>
          <p>
            Regla de oro: <strong className="text-text">nunca</strong> retornes null de un método. Retorna <code className="text-primary">Optional.empty()</code>.
            Pero <strong className="text-text">nunca</strong> uses Optional como parámetro ni como campo de clase.
          </p>
        </ThinkSection>

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
