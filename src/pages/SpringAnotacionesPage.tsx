import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringAnotacionesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Anotaciones de Spring</h1>
      <p className="text-text-muted text-lg mb-8">Las anotaciones más importantes que debes conocer</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Anotaciones de componentes</h2>
        <CodeBlock filename="Componentes.java" code={`
// Spring escanea estas anotaciones y crea beans automáticamente

@Component          // Bean genérico
@Service            // Bean de lógica de negocio (semántico)
@Repository         // Bean de acceso a datos (traduce excepciones de BD)
@Controller         // Bean que maneja peticiones web (retorna vistas)
@RestController     // = @Controller + @ResponseBody (retorna JSON)
@Configuration      // Clase de configuración (define @Bean methods)

// Ejemplo:
@Service
public class UsuarioService {
    // Spring crea UNA instancia (singleton) y la gestiona
}

@RestController
public class UsuarioController {
    // Spring inyecta las dependencias automáticamente
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Inyección de dependencias</h2>
        <CodeBlock filename="DI.java" code={`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    // Opción 1: Constructor injection (RECOMENDADA)
    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service; // Spring inyecta automáticamente
    }

    // Opción 2: @Autowired en campo (menos recomendada)
    // @Autowired
    // private UsuarioService service;

    // Opción 3: @Autowired en setter
    // @Autowired
    // public void setService(UsuarioService service) { ... }
}

// Si hay múltiples implementaciones de una interfaz:
@Service
@Primary                    // Esta es la implementación por defecto
public class UsuarioServiceImpl implements UsuarioService { }

@Service("cache")
public class UsuarioCacheService implements UsuarioService { }

// Inyectar específica:
// @Qualifier("cache") UsuarioService service
`} />
        <InfoBox type="angular">
          La DI en Spring es casi idéntica a Angular: <code className="text-primary">@Injectable()</code> = <code className="text-primary">@Service</code>,
          inyección por constructor es la forma preferida en ambos. <code className="text-primary">@Primary</code> es como
          <code className="text-primary"> providedIn: 'root'</code> por defecto.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Anotaciones HTTP</h2>
        <CodeBlock filename="HTTP.java" code={`
@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @GetMapping              // GET /api/productos
    @GetMapping("/{id}")     // GET /api/productos/5
    @PostMapping             // POST /api/productos
    @PutMapping("/{id}")     // PUT /api/productos/5
    @DeleteMapping("/{id}")  // DELETE /api/productos/5
    @PatchMapping("/{id}")   // PATCH /api/productos/5

    // Parámetros
    @PathVariable    // Extrae de la URL: /productos/{id}
    @RequestParam    // Extrae query param: /productos?nombre=Java
    @RequestBody     // Extrae del cuerpo JSON de la petición
    @RequestHeader   // Extrae un header HTTP
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Anotaciones JPA</h2>
        <CodeBlock filename="JPA.java" code={`
@Entity                          // Marca como entidad de BD
@Table(name = "usuarios")       // Nombre de la tabla
public class Usuario {
    @Id                          // Clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(unique = true)
    private String email;

    @OneToMany(mappedBy = "usuario")  // Relación 1:N
    private List<Pedido> pedidos;

    @ManyToOne                        // Relación N:1
    @JoinColumn(name = "rol_id")
    private Rol rol;

    @Transient                        // NO se guarda en BD
    private String campoTemporal;
}
`} />
      </section>
    </div>
  );
}
