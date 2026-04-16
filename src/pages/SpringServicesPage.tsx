import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringServicesPage() {
  return (
    <div>
      <DayHeader
        day={38}
        title="Services"
        duration="50 min"
        commitMsg="dia-38: @Service, @Transactional, interface + impl pattern"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás la capa de servicios — donde vive la lógica de negocio real.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Service completo</h2>

        <ThinkSection title="Service = donde vive la lógica de negocio">
          <p>
            El Controller recibe HTTP, el Repository accede a la BD. El Service es el intermediario
            que contiene las reglas de negocio: validaciones, cálculos, orquestación.
            <code className="text-primary"> @Transactional</code> garantiza que si algo falla, se revierten todos los cambios en BD.
          </p>
        </ThinkSection>

        <CodeBlock filename="UsuarioService.java" code={`
@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    public Optional<Usuario> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Transactional // Si algo falla, se revierte TODO
    public Usuario guardar(Usuario usuario) {
        // Validaciones de negocio
        if (repository.existsByEmail(usuario.getEmail())) {
            throw new RuntimeException("Email ya registrado");
        }
        return repository.save(usuario);
    }

    @Transactional
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    public List<Usuario> buscarPorNombre(String nombre, int page, int size) {
        return repository.findByNombreContaining(
            nombre, PageRequest.of(page, size)
        ).getContent();
    }
}
`} />
        <InfoBox type="angular">
          Los Services en Spring son exactamente como los Services en Angular: contienen lógica de negocio
          reutilizable e inyectable. La diferencia es que Spring los gestiona como singletons automáticamente.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Interface + Implementación</h2>
        <CodeBlock filename="Patron.java" code={`
// Interfaz (contrato)
public interface UsuarioService {
    List<Usuario> listarTodos();
    Optional<Usuario> buscarPorId(Long id);
    Usuario guardar(Usuario usuario);
    void eliminar(Long id);
}

// Implementación
@Service
public class UsuarioServiceImpl implements UsuarioService {
    private final UsuarioRepository repository;

    public UsuarioServiceImpl(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    @Override
    public Optional<Usuario> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public Usuario guardar(Usuario usuario) {
        return repository.save(usuario);
    }

    @Override
    @Transactional
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
`} />
        <InfoBox type="tip">
          El patrón Interface + Impl es muy común en Spring. Permite cambiar la implementación
          sin tocar el código que la usa (ej: UsuarioServiceMock para tests).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 38</h2>
        <Exercise
          number={1}
          title="Service con validaciones de negocio"
          description={`Crea ProductoService con reglas de negocio:
- guardar(): precio > 0, nombre no vacío, nombre único
- aplicarDescuento(id, porcentaje): máximo 50% de descuento
- buscarCaros(umbral): productos con precio > umbral
Usa @Transactional en operaciones de escritura.`}
          hint="if (precio <= 0) throw new IllegalArgumentException(...); @Transactional en guardar y aplicarDescuento"
          solution={`@Service
public class ProductoService {
    private final ProductoRepository repo;

    public ProductoService(ProductoRepository repo) { this.repo = repo; }

    @Transactional
    public Producto guardar(Producto p) {
        if (p.getPrecio() <= 0) throw new IllegalArgumentException("Precio debe ser > 0");
        if (p.getNombre().isBlank()) throw new IllegalArgumentException("Nombre requerido");
        if (repo.existsByNombre(p.getNombre())) throw new RuntimeException("Ya existe");
        return repo.save(p);
    }

    @Transactional
    public Producto aplicarDescuento(Long id, double porcentaje) {
        if (porcentaje > 50) throw new IllegalArgumentException("Max 50%");
        var p = repo.findById(id).orElseThrow();
        p.setPrecio(p.getPrecio() * (1 - porcentaje / 100));
        return repo.save(p);
    }

    public List<Producto> buscarCaros(double umbral) {
        return repo.findByPrecioGreaterThan(umbral);
    }
}`}
          solutionFilename="ProductoService.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-38: services, @Transactional, interface+impl"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 39</strong> — Repositories: Spring Data JPA y queries automáticas.
          </p>
        </div>
      </section>
    </div>
  );
}
