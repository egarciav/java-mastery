import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringDTOsPage() {
  return (
    <div>
      <DayHeader
        day={44}
        title="DTOs y MapStruct"
        duration="50 min"
        commitMsg="dia-44: DTOs, records, mapper manual, MapStruct"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás DTOs (Data Transfer Objects) — la capa intermedia que separa tu modelo
        de base de datos de lo que tu API expone al mundo. Es una práctica esencial en APIs
        profesionales que protege datos sensibles y desacopla tu API de tu esquema de BD.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué NUNCA exponer entidades JPA directamente?</h2>

        <ThinkSection title="DTOs: separar el contrato HTTP del modelo interno de base de datos">
          <p>
            En Angular tienes interfaces distintas para tipar lo que envías y recibes:
            <code className="text-primary"> CreateUserRequest</code>, <code className="text-primary">UserResponse</code>,
            <code className="text-primary"> UpdateUserRequest</code>. No usas la misma interfaz para todo.
            El patrón en Spring Boot es idéntico, pero en el servidor.
          </p>
          <p>
            <strong className="text-text">¿Por qué NUNCA exponer entidades JPA directamente en la API?</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Seguridad</strong>: tu entidad <code className="text-primary">Usuario</code> tiene el campo <code className="text-primary">password</code>. Sin DTO, se expone en el JSON de respuesta. Un error catastrófico.</li>
            <li><strong className="text-text">Acoplamiento</strong>: si cambias el modelo de BD (renombras una columna, añades una relación), cambias el contrato de tu API. Los clientes se rompen.</li>
            <li><strong className="text-text">Ciclos de serialización</strong>: si <code className="text-primary">Usuario</code> tiene <code className="text-primary">List&lt;Pedido&gt;</code> y <code className="text-primary">Pedido</code> tiene <code className="text-primary">Usuario</code>, Jackson entra en un ciclo infinito intentando serializar.</li>
            <li><strong className="text-text">Lazy loading</strong>: Jackson intenta serializar relaciones lazy fuera de una sesión JPA → <code className="text-primary">LazyInitializationException</code>.</li>
          </ul>
          <p>
            <strong className="text-text">El patrón correcto</strong>: entidades JPA para persistencia,
            DTOs para la API HTTP. Conviertes entre ellos en el Service:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">XxxRequest</code> (o <code className="text-primary">XxxDto</code>): datos que recibe el endpoint. Tiene anotaciones de validación.</li>
            <li><code className="text-primary">XxxResponse</code>: datos que retorna el endpoint. Solo los campos públicos necesarios.</li>
          </ul>
          <p>
            <strong className="text-text">Records son ideales para DTOs</strong> (Java 16+): inmutables,
            generan equals/hashCode/toString, y su sintaxis compacta es perfecta para objetos de datos puros.
            Para conversiones en escala, usa <strong className="text-text">MapStruct</strong> —
            genera automáticamente el código de mapeo entre entidades y DTOs en tiempo de compilación.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Exponer directamente tus entidades JPA a la API es uno de los errores más comunes en Spring Boot.
          Los <strong className="text-text">DTOs</strong> son objetos simples (records) diseñados específicamente para
          cada caso de uso de tu API, sin acoplar el contrato HTTP al modelo interno de BD.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-red-400 mb-2">❌ Sin DTOs (problemas)</h3>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• Expones campos internos (contraseña, etc.)</li>
              <li>• Lazy-loading de JPA causa errores JSON</li>
              <li>• Ciclos infinitos en relaciones bidireccionales</li>
              <li>• El cliente puede enviar campos que no debería</li>
              <li>• Cambio en la BD = cambio en la API</li>
            </ul>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border">
            <h3 className="font-bold text-green-400 mb-2">✅ Con DTOs (solución)</h3>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• Solo expones lo que el cliente necesita</li>
              <li>• Sin problemas de serialización JPA</li>
              <li>• Puedes tener DTOs distintos para crear/leer</li>
              <li>• La BD y la API evolucionan independientemente</li>
              <li>• Validaciones específicas por operación</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Definir DTOs con Records</h2>
        <CodeBlock filename="DTOs.java" code={`
// Entidad JPA (base de datos)
@Entity
public class Usuario {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String passwordHash; // ¡nunca debe salir en la API!
    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos; // relación que puede causar problemas
}

// DTO de respuesta (GET) — solo lo que el cliente necesita ver
public record UsuarioResponse(
    Long id,
    String nombre,
    String email
) {}

// DTO de creación (POST) — lo que el cliente envía
public record UsuarioCreateRequest(
    @NotBlank String nombre,
    @Email String email,
    @Size(min = 8) String password  // aquí sí recibimos la contraseña
) {}

// DTO de actualización (PUT/PATCH)
public record UsuarioUpdateRequest(
    @NotBlank String nombre,
    @Email String email
) {}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Mapeo manual y con MapStruct</h2>
        <CodeBlock filename="UsuarioMapper.java" code={`
// Opción 1: Mapeo manual (simple, sin dependencias)
@Component
public class UsuarioMapper {

    public UsuarioResponse toResponse(Usuario usuario) {
        return new UsuarioResponse(
            usuario.getId(),
            usuario.getNombre(),
            usuario.getEmail()
        );
    }

    public Usuario toEntity(UsuarioCreateRequest request, PasswordEncoder encoder) {
        var usuario = new Usuario();
        usuario.setNombre(request.nombre());
        usuario.setEmail(request.email());
        usuario.setPasswordHash(encoder.encode(request.password()));
        return usuario;
    }

    public List<UsuarioResponse> toResponseList(List<Usuario> usuarios) {
        return usuarios.stream().map(this::toResponse).toList();
    }
}

// Opción 2: MapStruct (genera el mapeo automáticamente)
// Dependencia: org.mapstruct:mapstruct
@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    UsuarioResponse toResponse(Usuario usuario);  // automático por nombres iguales
    List<UsuarioResponse> toResponseList(List<Usuario> usuarios);

    @Mapping(target = "passwordHash", ignore = true) // ignorar campo
    Usuario toEntity(UsuarioCreateRequest request);
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Usando DTOs en Controller y Service</h2>
        <CodeBlock filename="UsuarioController.java" code={`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService service;

    @GetMapping
    public List<UsuarioResponse> listar() {
        return service.listarTodos(); // retorna DTOs, no entidades
    }

    @PostMapping
    public ResponseEntity<UsuarioResponse> crear(
            @RequestBody @Valid UsuarioCreateRequest request) {
        UsuarioResponse creado = service.crear(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }
}

@Service
public class UsuarioService {
    private final UsuarioRepository repository;
    private final UsuarioMapper mapper;
    private final PasswordEncoder encoder;

    public List<UsuarioResponse> listarTodos() {
        return mapper.toResponseList(repository.findAll());
    }

    @Transactional
    public UsuarioResponse crear(UsuarioCreateRequest request) {
        if (repository.existsByEmail(request.email())) {
            throw new RecursoDuplicadoException("Email ya registrado");
        }
        Usuario usuario = mapper.toEntity(request, encoder);
        return mapper.toResponse(repository.save(usuario));
    }
}
`} />
        <InfoBox type="angular">
          Los DTOs en Spring son como los <strong>interfaces/models</strong> en Angular: 
          <code className="text-primary"> UsuarioResponse</code> = la interface que defines en Angular para tipar 
          lo que llega del HTTP. <code className="text-primary">UsuarioCreateRequest</code> = los datos del formulario 
          que envías al backend.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 44</h2>
        <Exercise
          number={1}
          title="DTOs completos para Producto"
          description={`Crea el set completo de DTOs para Producto:
1. ProductoResponse(Long id, String nombre, double precio, String categoria)
2. ProductoCreateRequest con validaciones (@NotBlank, @Positive)
3. ProductoUpdateRequest (nombre y precio opcionales)
4. ProductoMapper manual con toResponse(), toEntity(), toResponseList()
5. Úsalos en el Controller y Service`}
          hint="Los records son perfectos para DTOs. El mapper convierte entre entidad y DTO."
          solution={`public record ProductoResponse(Long id, String nombre, double precio, String cat) {}
public record ProductoCreateRequest(
    @NotBlank String nombre, @Positive double precio, @NotBlank String cat) {}
public record ProductoUpdateRequest(String nombre, Double precio) {}

@Component
public class ProductoMapper {
    public ProductoResponse toResponse(Producto p) {
        return new ProductoResponse(p.getId(), p.getNombre(), p.getPrecio(), p.getCategoria());
    }
    public Producto toEntity(ProductoCreateRequest r) {
        var p = new Producto();
        p.setNombre(r.nombre()); p.setPrecio(r.precio()); p.setCategoria(r.cat());
        return p;
    }
    public List<ProductoResponse> toResponseList(List<Producto> list) {
        return list.stream().map(this::toResponse).toList();
    }
}`}
          solutionFilename="ProductoMapper.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-44: DTOs, records, mapper, separar API de BD"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 45</strong> — Perfiles, configuración y CORS.
          </p>
        </div>
      </section>
    </div>
  );
}
