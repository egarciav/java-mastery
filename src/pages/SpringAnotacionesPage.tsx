import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringAnotacionesPage() {
  return (
    <div>
      <DayHeader
        day={36}
        title="Anotaciones de Spring"
        duration="50 min"
        commitMsg="dia-36: @Component, @Service, @RestController, DI, JPA annotations"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás las anotaciones esenciales de Spring — los "decoradores" que le dicen al
        framework cómo tratar cada clase, método y campo. Sin anotaciones, Spring no sabe que tu
        clase existe. Con ellas, Spring la detecta, la instancia, la inyecta y la configura automáticamente.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué son las anotaciones en Spring?</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          Una <strong className="text-text">anotación</strong> es metadatos que agregas con <code className="text-primary">@</code>
          encima de una clase, método o campo. Spring escanea tu código al arrancar, encuentra estas anotaciones,
          y actúa según lo que indican: crear un bean, mapear una URL, inyectar una dependencia, definir una
          transacción, etc. Son el "lenguaje" con el que te comunicas con el framework.
        </p>

        <ThinkSection title="Anotaciones = decoradores de Angular (mismo concepto)">
          <p>
            En Angular usas <code className="text-primary">@Component()</code>, <code className="text-primary">@Injectable()</code>,
            <code className="text-primary"> @Input()</code>. Angular lee estos decoradores y sabe qué hacer con cada clase.
            En Spring es idéntico: <code className="text-primary">@Service</code>,
            <code className="text-primary"> @RestController</code>, <code className="text-primary">@GetMapping</code>
            le dicen a Spring el rol y comportamiento de cada pieza.
          </p>
          <p>
            La diferencia: en Angular los decoradores modifican la clase en tiempo de compilación (TypeScript).
            En Spring, las anotaciones son leídas en <strong className="text-text">runtime</strong> usando reflexión (Java Reflection API).
            Spring escanea el classpath buscando clases con anotaciones específicas y las registra como beans.
          </p>
        </ThinkSection>

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 36</h2>
        <Exercise
          number={1}
          title="CRUD completo con anotaciones"
          description={`Crea un ProductoController con:
1. @GetMapping — listar todos
2. @GetMapping("/{id}") — buscar por id
3. @PostMapping — crear producto (@RequestBody)
4. @PutMapping("/{id}") — actualizar
5. @DeleteMapping("/{id}") — eliminar
Usa una List<Producto> en memoria por ahora.`}
          hint="private List<Producto> productos = new ArrayList<>(); Usa @PathVariable y @RequestBody"
          solution={`@RestController
@RequestMapping("/api/productos")
public class ProductoController {
    private List<Producto> productos = new ArrayList<>();
    private long nextId = 1;

    record Producto(long id, String nombre, double precio) {}

    @GetMapping
    public List<Producto> listar() { return productos; }

    @GetMapping("/{id}")
    public Producto buscar(@PathVariable long id) {
        return productos.stream().filter(p -> p.id() == id)
            .findFirst().orElseThrow();
    }

    @PostMapping
    public Producto crear(@RequestBody Producto p) {
        var nuevo = new Producto(nextId++, p.nombre(), p.precio());
        productos.add(nuevo);
        return nuevo;
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable long id) {
        productos.removeIf(p -> p.id() == id);
    }
}`}
          solutionFilename="ProductoController.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-36: anotaciones Spring, DI, HTTP mappings, JPA"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 37</strong> — Controllers en profundidad.
          </p>
        </div>
      </section>
    </div>
  );
}
