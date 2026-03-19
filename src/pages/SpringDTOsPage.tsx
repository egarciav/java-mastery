import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringDTOsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">DTOs y MapStruct</h1>
      <p className="text-text-muted text-lg mb-8">Data Transfer Objects — separar la API de la base de datos</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué usar DTOs?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Exponer directamente tus entidades JPA a la API es un error común. Los <strong className="text-text">DTOs</strong> 
          son objetos específicos para transferir datos entre capas, sin acoplar la API al modelo de BD.
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
    </div>
  );
}
