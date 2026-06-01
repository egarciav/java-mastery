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
        Hoy aprenderás la capa de servicios — el corazón de tu aplicación donde vive toda la
        lógica de negocio. El Controller solo traduce HTTP, el Repository solo accede a datos,
        pero el Service es donde ocurren las decisiones, validaciones y orquestación.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es un Service y por qué separarlo?</h2>

        <ThinkSection title="Service = el núcleo de la lógica de negocio, sin saber nada de HTTP ni BD">
          <p>
            El arquitectura en capas de Spring sigue un principio claro de responsabilidades:
            <strong className="text-text"> Controller → Service → Repository</strong>.
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Controller</strong>: solo sabe de HTTP. Extrae datos, llama al service, retorna ResponseEntity.</li>
            <li><strong className="text-text">Service</strong>: solo sabe de lógica de negocio. No sabe que existe HTTP, ni JSON, ni SQL. Valida reglas, orquesta operaciones, toma decisiones.</li>
            <li><strong className="text-text">Repository</strong>: solo sabe de persistencia. Lee y escribe datos en BD.</li>
          </ul>
          <p>
            Esta separación tiene una ventaja enorme: puedes testear el Service de forma aislada sin
            levantar un servidor HTTP ni conectarte a una BD real. En Angular, el patrón es idéntico:
            Component → Service → HttpClient. El Service de Angular tampoco sabe nada de la UI.
          </p>
          <p>
            <strong className="text-text">@Transactional — el mecanismo que garantiza atomicidad:</strong>
            cuando un método tiene <code className="text-primary">@Transactional</code>, Spring crea un proxy
            que abre una transacción de BD antes de ejecutar el método y la confirma (<em>commit</em>) al
            terminar exitosamente, o hace <em>rollback</em> si ocurre una excepción no manejada.
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Por defecto</strong>: solo hace rollback en excepciones unchecked (<code className="text-primary">RuntimeException</code>). Para checked exceptions necesitas <code className="text-primary">@Transactional(rollbackFor = Exception.class)</code>.</li>
            <li><strong className="text-text">Propagación</strong>: <code className="text-primary">REQUIRED</code> (default) — usa la transacción existente o crea una nueva. <code className="text-primary">REQUIRES_NEW</code> — siempre crea una nueva.</li>
            <li><strong className="text-text">Sin @Transactional</strong> en operaciones múltiples: si falla en el paso 3 de 5, los pasos 1 y 2 ya se guardaron. Datos inconsistentes.</li>
          </ul>
          <p>
            <strong className="text-text">Buena práctica</strong>: pon <code className="text-primary">@Transactional</code>
            a nivel de clase en el Service (cubre todos los métodos) y sobrescribe con
            <code className="text-primary"> @Transactional(readOnly = true)</code> en métodos de solo lectura
            para optimización.
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
