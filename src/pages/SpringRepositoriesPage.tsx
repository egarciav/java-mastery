import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringRepositoriesPage() {
  return (
    <div>
      <DayHeader
        day={39}
        title="Repositories"
        duration="50 min"
        commitMsg="dia-39: JPA entities, JpaRepository, query methods, @Query"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás Spring Data JPA — la capa que te permite acceder a bases de datos
        relacionales sin escribir SQL manualmente. Defines una interfaz y Spring genera
        toda la implementación por ti, incluyendo las queries SQL.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es JPA y por qué lo necesitas?</h2>

        <ThinkSection title="El stack de persistencia: JPA → Hibernate → Spring Data → tu código">
          <p>
            Entender la cadena completa es clave para no confundir los niveles:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">JDBC</strong>: la API Java más básica para hablar con BD. Escribes SQL manual, manejas ResultSet, cierras conexiones. Muy verboso.</li>
            <li><strong className="text-text">JPA (Java Persistence API)</strong>: especificación estándar (no implementación) para mapear objetos Java ↔ tablas relacionales (ORM). Define las anotaciones (<code className="text-primary">@Entity</code>, <code className="text-primary">@Id</code>, <code className="text-primary">@Column</code>).</li>
            <li><strong className="text-text">Hibernate</strong>: la implementación más popular de JPA. Genera el SQL automáticamente a partir del mapeo de entidades.</li>
            <li><strong className="text-text">Spring Data JPA</strong>: capa encima de Hibernate. Solo defines una interfaz que extiende <code className="text-primary">JpaRepository</code> y Spring genera la implementación en runtime.</li>
          </ul>
          <p>
            <strong className="text-text">Query derivation</strong>: Spring Data puede generar SQL a partir
            del nombre del método. <code className="text-primary">findByEmailAndActivo(String email, boolean activo)</code>
            genera automáticamente <code className="text-primary">WHERE email = ? AND activo = ?</code>. Sin una línea de SQL.
          </p>
          <p>
            <strong className="text-text">El problema N+1</strong> (el bug más común con JPA): si tienes
            una lista de 100 pedidos y cada pedido tiene un usuario, Hibernate puede hacer 1 query para
            los pedidos + 100 queries para los usuarios = 101 queries. La solución es
            <code className="text-primary"> @EntityGraph</code> o <code className="text-primary">JOIN FETCH</code>
            en JPQL para cargar todo en una sola query.
          </p>
          <p>
            <strong className="text-text">Lazy vs Eager loading</strong>: por defecto las colecciones son
            <code className="text-primary"> LAZY</code> — se cargan cuando las accedes. Los campos simples son
            <code className="text-primary"> EAGER</code> — se cargan siempre. Nunca uses
            <code className="text-primary">FetchType.EAGER</code> en colecciones — genera el problema N+1 silencioso.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          La cadena completa es: <strong className="text-text">Tu código → Spring Data JPA → Hibernate (JPA) → JDBC → Base de Datos</strong>.
          Tú solo trabajas con la capa más alta (Spring Data JPA), y todo lo demás se maneja automáticamente.
        </p>

        <InfoBox type="info" title="¿Qué necesitas en tu pom.xml?">
          La dependencia <code className="text-primary">spring-boot-starter-data-jpa</code> incluye Hibernate, JDBC y Spring Data JPA.
          También necesitas un driver de base de datos como <code className="text-primary">h2</code> (para desarrollo) o
          <code className="text-primary"> postgresql</code> (para producción).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Entidad JPA — Tu clase es una tabla</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Una <strong className="text-text">entidad JPA</strong> es una clase Java que representa una tabla en la base de datos.
          Cada instancia de la clase es una fila, y cada campo es una columna. Las anotaciones le dicen a Hibernate
          cómo mapear entre tu objeto y la tabla SQL.
        </p>

        <CodeBlock filename="Usuario.java" code={`
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity                          // Marca esta clase como una tabla de BD
@Table(name = "usuarios")       // Nombre de la tabla (si no lo pones, usa el nombre de la clase)
public class Usuario {

    @Id                          // Campo de clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment en la BD
    private Long id;

    @Column(nullable = false, length = 100)  // NOT NULL, max 100 chars
    private String nombre;

    @Column(unique = true, nullable = false)  // UNIQUE + NOT NULL
    private String email;

    private int edad;            // Sin @Column: usa el nombre del campo como columna

    @Column(name = "activo")     // Nombre de columna diferente al campo
    private boolean esActivo = true;

    @CreationTimestamp           // Se llena automáticamente al insertar
    @Column(updatable = false)   // No se puede modificar después
    private LocalDateTime creadoEn;

    // Constructor vacío OBLIGATORIO para JPA (Hibernate lo necesita)
    public Usuario() {}

    // Constructor para crear usuarios (sin id, se genera solo)
    public Usuario(String nombre, String email, int edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    // Getters y setters para TODOS los campos
    // (o usa Lombok: @Data @NoArgsConstructor @AllArgsConstructor)
    public Long getId() { return id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public int getEdad() { return edad; }
    public void setEdad(int edad) { this.edad = edad; }
}
`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {[
            { a: '@Entity', d: 'Marca la clase como tabla de BD. Obligatoria.' },
            { a: '@Table(name="x")', d: 'Nombre de la tabla. Opcional si coincide con la clase.' },
            { a: '@Id', d: 'Clave primaria. Cada entidad DEBE tener una.' },
            { a: '@GeneratedValue', d: 'La BD genera el valor (auto-increment).' },
            { a: '@Column', d: 'Configura la columna: nullable, unique, length, name.' },
            { a: '@CreationTimestamp', d: 'Se llena con la fecha/hora actual al insertar.' },
          ].map(({ a, d }) => (
            <div key={a} className="p-3 bg-bg-secondary rounded-lg border border-border">
              <code className="text-primary text-sm">{a}</code>
              <p className="text-text-muted text-xs mt-1">{d}</p>
            </div>
          ))}
        </div>

        <InfoBox type="warning" title="Regla de oro: constructor vacío obligatorio">
          JPA/Hibernate necesita un constructor sin argumentos para crear instancias al leer de la BD.
          Si defines otro constructor, <strong>debes</strong> también definir el vacío explícitamente.
          Sin él, obtendrás un error críptico: <code className="text-primary">No default constructor for entity</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Repository — La magia de Spring Data</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Un <strong className="text-text">Repository</strong> es una interfaz que defines tú, y Spring crea la implementación
          automáticamente en tiempo de ejecución. Al extender <code className="text-primary">JpaRepository&lt;Entidad, TipoId&gt;</code>,
          heredas decenas de métodos CRUD sin escribir una sola línea de implementación.
        </p>

        <CodeBlock filename="UsuarioRepository.java" code={`
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

// JpaRepository<Entidad, TipoDelId> te da GRATIS:
// save(), findById(), findAll(), deleteById(), count(), existsById()...
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // ═══════════════════════════════════════════════════════
    // QUERY METHODS: Spring genera SQL por el nombre del método
    // ═══════════════════════════════════════════════════════

    // findBy + NombreCampo → WHERE campo = ?
    List<Usuario> findByNombre(String nombre);
    // SQL generado: SELECT * FROM usuarios WHERE nombre = ?

    // findBy + Campo + Comparador
    List<Usuario> findByEdadGreaterThan(int edad);
    // SQL: SELECT * FROM usuarios WHERE edad > ?

    List<Usuario> findByEdadBetween(int min, int max);
    // SQL: SELECT * FROM usuarios WHERE edad BETWEEN ? AND ?

    // Optional para resultados únicos que pueden no existir
    Optional<Usuario> findByEmail(String email);
    // SQL: SELECT * FROM usuarios WHERE email = ?

    // exists retorna boolean
    boolean existsByEmail(String email);
    // SQL: SELECT COUNT(*) > 0 FROM usuarios WHERE email = ?

    // Containing = LIKE '%texto%'
    List<Usuario> findByNombreContainingIgnoreCase(String texto);
    // SQL: SELECT * FROM usuarios WHERE LOWER(nombre) LIKE LOWER('%texto%')

    // Ordenamiento
    List<Usuario> findByEdadGreaterThanOrderByNombreAsc(int edad);
    // SQL: SELECT * FROM usuarios WHERE edad > ? ORDER BY nombre ASC

    // Limitar resultados
    List<Usuario> findTop5ByOrderByEdadDesc();
    // SQL: SELECT * FROM usuarios ORDER BY edad DESC LIMIT 5

    // ═══════════════════════════════════════════════════════
    // PAGINACIÓN: resultados por páginas
    // ═══════════════════════════════════════════════════════
    Page<Usuario> findByNombreContaining(String texto, Pageable pageable);

    // ═══════════════════════════════════════════════════════
    // @Query: para queries complejas que no se pueden expresar con nombres
    // ═══════════════════════════════════════════════════════

    // JPQL (Java Persistence Query Language) — usa nombres de CLASES, no tablas
    @Query("SELECT u FROM Usuario u WHERE u.edad BETWEEN :min AND :max")
    List<Usuario> buscarPorRangoEdad(@Param("min") int min, @Param("max") int max);

    // Query nativa SQL — usa nombres de TABLAS y COLUMNAS reales
    @Query(value = "SELECT * FROM usuarios WHERE email LIKE %:dominio", nativeQuery = true)
    List<Usuario> buscarPorDominioEmail(@Param("dominio") String dominio);

    // Contar con query personalizada
    @Query("SELECT COUNT(u) FROM Usuario u WHERE u.edad >= :edad")
    long contarMayoresDe(@Param("edad") int edad);
}
`} />

        <h3 className="text-lg font-bold text-text mt-6 mb-3">Convención de nombres para Query Methods</h3>
        <p className="text-text-muted leading-relaxed mb-4">
          Spring analiza el nombre de tu método y genera la SQL correspondiente. La estructura es:
          <code className="text-primary ml-1">findBy</code> + <code className="text-primary">Campo</code> +
          <code className="text-primary"> Comparador</code> (opcional) + <code className="text-primary">OrderBy</code> (opcional).
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-text-muted">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-text">Keyword en el nombre</th>
                <th className="text-left py-2 px-3 text-text">SQL generado</th>
                <th className="text-left py-2 px-3 text-text">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">findBy</td><td className="py-2 px-3">WHERE campo = ?</td><td className="py-2 px-3 text-xs">findByEmail(email)</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">GreaterThan</td><td className="py-2 px-3">WHERE campo &gt; ?</td><td className="py-2 px-3 text-xs">findByEdadGreaterThan(18)</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">LessThan</td><td className="py-2 px-3">WHERE campo &lt; ?</td><td className="py-2 px-3 text-xs">findByPrecioLessThan(100)</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">Between</td><td className="py-2 px-3">WHERE campo BETWEEN ? AND ?</td><td className="py-2 px-3 text-xs">findByEdadBetween(18, 65)</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">Containing</td><td className="py-2 px-3">WHERE campo LIKE %?%</td><td className="py-2 px-3 text-xs">findByNombreContaining("ar")</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">StartingWith</td><td className="py-2 px-3">WHERE campo LIKE ?%</td><td className="py-2 px-3 text-xs">findByNombreStartingWith("Ca")</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">IsNull</td><td className="py-2 px-3">WHERE campo IS NULL</td><td className="py-2 px-3 text-xs">findByEmailIsNull()</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">In</td><td className="py-2 px-3">WHERE campo IN (?)</td><td className="py-2 px-3 text-xs">findByEdadIn(List.of(18,25))</td></tr>
              <tr><td className="py-2 px-3 font-mono text-primary">OrderBy...Asc/Desc</td><td className="py-2 px-3">ORDER BY campo ASC/DESC</td><td className="py-2 px-3 text-xs">findByEdadGreaterThanOrderByNombreAsc(18)</td></tr>
            </tbody>
          </table>
        </div>

        <InfoBox type="tip" title="¿Cuándo usar @Query vs Query Methods?">
          <strong>Query Methods</strong> (por nombre): para consultas simples con 1-2 condiciones. Son legibles y autocompletables.
          <strong> @Query (JPQL)</strong>: para consultas complejas con JOINs, subqueries, o múltiples condiciones. Usa nombres de clases Java.
          <strong> @Query (nativeQuery)</strong>: cuando necesitas SQL específico de tu BD (funciones de PostgreSQL, etc.). Usa nombres de tablas reales.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Usando el Repository en el Service</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          El Repository se inyecta en tu Service. Nunca lo uses directamente desde el Controller — 
          siempre pasa por la capa de servicio para mantener la lógica de negocio separada.
        </p>

        <CodeBlock filename="UsuarioService.java" code={`
@Service
public class UsuarioService {
    private final UsuarioRepository repository;

    // Inyección por constructor (recomendada)
    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();  // Heredado de JpaRepository
    }

    public Optional<Usuario> buscarPorId(Long id) {
        return repository.findById(id);  // Retorna Optional (puede no existir)
    }

    @Transactional  // Si falla, hace rollback automático
    public Usuario crear(Usuario usuario) {
        if (repository.existsByEmail(usuario.getEmail())) {
            throw new RecursoDuplicadoException("Email ya registrado");
        }
        return repository.save(usuario);  // INSERT si no tiene id, UPDATE si tiene
    }

    @Transactional
    public void eliminar(Long id) {
        if (!repository.existsById(id)) {
            throw new RecursoNoEncontradoException("Usuario " + id + " no encontrado");
        }
        repository.deleteById(id);
    }

    // Paginación: retorna una "página" de resultados
    public Page<Usuario> buscarPaginado(String nombre, int pagina, int tamano) {
        Pageable pageable = PageRequest.of(pagina, tamano, Sort.by("nombre"));
        return repository.findByNombreContaining(nombre, pageable);
    }
}
`} />

        <InfoBox type="angular">
          En Angular, tu Service llama a <code className="text-primary">this.http.get&lt;User[]&gt;("/api/users")</code>.
          En Spring, tu Service llama a <code className="text-primary">this.repository.findAll()</code>. El patrón es
          idéntico: el Service encapsula la lógica de acceso a datos y el Controller solo delega.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 39</h2>
        <Exercise
          number={1}
          title="Repository con query methods"
          description={`Crea ProductoRepository extends JpaRepository con:
- findByNombre(String nombre)
- findByPrecioGreaterThan(double precio)
- findByCategoria(String cat)
- findByNombreContainingIgnoreCase(String texto)
- @Query personalizada: buscar productos con precio entre min y max`}
          hint="Solo define la interfaz con los métodos. Spring genera el SQL automáticamente."
          solution={`public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByNombre(String nombre);
    List<Producto> findByPrecioGreaterThan(double precio);
    List<Producto> findByCategoria(String cat);
    List<Producto> findByNombreContainingIgnoreCase(String texto);
    boolean existsByNombre(String nombre);

    @Query("SELECT p FROM Producto p WHERE p.precio BETWEEN :min AND :max ORDER BY p.precio")
    List<Producto> buscarPorRangoPrecio(@Param("min") double min, @Param("max") double max);

    Page<Producto> findByCategoria(String cat, Pageable pageable);
}`}
          solutionFilename="ProductoRepository.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-39: JPA entities, repositories, query methods"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 40</strong> — Spring Security: autenticación y autorización.
          </p>
        </div>
      </section>
    </div>
  );
}
