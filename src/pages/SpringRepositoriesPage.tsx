import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringRepositoriesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Repositories</h1>
      <p className="text-text-muted text-lg mb-8">Acceso a datos con Spring Data JPA</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Entidad JPA</h2>
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
    </div>
  );
}
