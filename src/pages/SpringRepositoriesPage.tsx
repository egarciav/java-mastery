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
        Hoy aprenderás Spring Data JPA — acceso a BD sin escribir SQL. Solo defines una interfaz
        y Spring genera las queries automáticamente por el nombre del método.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Entidad JPA</h2>

        <ThinkSection title="Repository = HttpClient automático para BD">
          <p>
            En Angular usas HttpClient para llamar APIs. En Spring, JpaRepository te da
            <code className="text-primary"> save()</code>, <code className="text-primary">findById()</code>,
            <code className="text-primary"> findAll()</code>, <code className="text-primary">delete()</code>
            automáticamente. Solo defines la interfaz, Spring implementa todo.
          </p>
        </ThinkSection>

        <CodeBlock filename="Usuario.java" code={`
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(unique = true, nullable = false)
    private String email;

    private int edad;

    @CreationTimestamp
    private LocalDateTime creadoEn;

    // Constructores, getters, setters...
    // (o usa Lombok: @Data @NoArgsConstructor @AllArgsConstructor)
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Repository interface</h2>
        <CodeBlock filename="UsuarioRepository.java" code={`
// JpaRepository te da GRATIS: save, findById, findAll, delete, count, etc.
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Spring genera la query automáticamente por el nombre del método
    List<Usuario> findByNombre(String nombre);
    List<Usuario> findByEdadGreaterThan(int edad);
    Optional<Usuario> findByEmail(String email);
    boolean existsByEmail(String email);
    List<Usuario> findByNombreContaining(String texto);

    // Con paginación
    Page<Usuario> findByNombreContaining(String texto, Pageable pageable);

    // Query personalizada con JPQL
    @Query("SELECT u FROM Usuario u WHERE u.edad BETWEEN :min AND :max")
    List<Usuario> buscarPorRangoEdad(@Param("min") int min, @Param("max") int max);

    // Query nativa SQL
    @Query(value = "SELECT * FROM usuarios WHERE email LIKE %:dominio", nativeQuery = true)
    List<Usuario> buscarPorDominioEmail(@Param("dominio") String dominio);
}
`} />
        <InfoBox type="spring">
          Spring Data JPA genera las queries SQL automáticamente basándose en el nombre del método.
          <strong> findByNombreContaining</strong> genera: <code className="text-primary">WHERE nombre LIKE '%texto%'</code>.
          No necesitas escribir SQL para la mayoría de operaciones.
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
