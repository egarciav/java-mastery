import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringServicesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Services</h1>
      <p className="text-text-muted text-lg mb-8">Lógica de negocio con @Service y @Transactional</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Service completo</h2>
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
    </div>
  );
}
