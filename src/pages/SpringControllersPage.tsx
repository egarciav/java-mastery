import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringControllersPage() {
  return (
    <div>
      <DayHeader
        day={37}
        title="Controllers"
        duration="50 min"
        commitMsg="dia-37: @RestController, CRUD, ResponseEntity, @PathVariable"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy construirás REST APIs completas. Un Controller es la puerta de entrada HTTP a tu
        aplicación — recibe peticiones, las valida, delega al Service, y construye la respuesta
        con el código HTTP apropiado (200, 201, 404, etc.).
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es un @RestController?</h2>

        <ThinkSection title="Controller = la fachada HTTP de tu aplicación">
          <p>
            En Angular, un Component recibe input del usuario (clicks, forms) y delega al Service.
            En Spring, un <code className="text-primary">@RestController</code> recibe peticiones HTTP (GET, POST, PUT, DELETE)
            y delega al Service. <strong className="text-text">Nunca</strong> pongas lógica de negocio, validaciones complejas,
            ni acceso a BD en el Controller. Su única responsabilidad es traducir HTTP ↔ Java.
          </p>
          <p>
            <code className="text-primary">@RestController</code> = <code className="text-primary">@Controller</code> +
            <code className="text-primary"> @ResponseBody</code>. Significa que cada método retorna datos (JSON) directamente,
            no una vista HTML. Spring usa Jackson para convertir automáticamente tus objetos Java a JSON.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          El flujo completo de una petición es: <strong className="text-text">Cliente HTTP → DispatcherServlet → Controller → Service →
          Repository → BD</strong>, y la respuesta viaja de vuelta en sentido inverso. El Controller solo maneja
          la capa HTTP: extrae parámetros, llama al service, y envuelve el resultado en un ResponseEntity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {[
            { a: '@GetMapping', d: 'Maneja GET — obtener datos (listar, buscar por ID).' },
            { a: '@PostMapping', d: 'Maneja POST — crear nuevos recursos.' },
            { a: '@PutMapping', d: 'Maneja PUT — reemplazar un recurso completo.' },
            { a: '@DeleteMapping', d: 'Maneja DELETE — eliminar un recurso.' },
            { a: '@PathVariable', d: 'Extrae valor de la URL: /api/users/{id}' },
            { a: '@RequestParam', d: 'Extrae query params: /api/users?name=Carlos' },
            { a: '@RequestBody', d: 'Deserializa el body JSON a un objeto Java.' },
            { a: 'ResponseEntity<T>', d: 'Control total: código HTTP + headers + body.' },
          ].map(({ a, d }) => (
            <div key={a} className="p-3 bg-bg-secondary rounded-lg border border-border">
              <code className="text-primary text-sm">{a}</code>
              <p className="text-text-muted text-xs mt-1">{d}</p>
            </div>
          ))}
        </div>

        <CodeBlock filename="UsuarioController.java" code={`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    // GET /api/usuarios
    @GetMapping
    public List<Usuario> listar() {
        return service.listarTodos();
    }

    // GET /api/usuarios/5
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtener(@PathVariable Long id) {
        return service.buscarPorId(id)
            .map(ResponseEntity::ok)                    // 200 OK
            .orElse(ResponseEntity.notFound().build());  // 404
    }

    // POST /api/usuarios (body: JSON)
    @PostMapping
    public ResponseEntity<Usuario> crear(@RequestBody @Valid Usuario usuario) {
        Usuario creado = service.guardar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado); // 201
    }

    // PUT /api/usuarios/5
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizar(
            @PathVariable Long id,
            @RequestBody @Valid Usuario usuario) {
        return service.buscarPorId(id)
            .map(existente -> {
                usuario.setId(id);
                return ResponseEntity.ok(service.guardar(usuario));
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/usuarios/5
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (service.buscarPorId(id).isPresent()) {
            service.eliminar(id);
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.notFound().build(); // 404
    }

    // GET /api/usuarios?nombre=Carlos&page=0&size=10
    @GetMapping("/buscar")
    public List<Usuario> buscar(
            @RequestParam String nombre,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return service.buscarPorNombre(nombre, page, size);
    }
}
`} />
        <InfoBox type="spring">
          <code className="text-primary">ResponseEntity</code> te da control total sobre el código HTTP, headers y body 
          de la respuesta. Siempre úsalo para APIs profesionales en lugar de retornar objetos directamente.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 37</h2>
        <Exercise
          number={1}
          title="API de Tareas con ResponseEntity"
          description={`Crea TareaController con endpoints:
- GET /api/tareas — listar todas (200)
- POST /api/tareas — crear (201 Created)
- PUT /api/tareas/{id}/completar — marcar como completada (200 o 404)
- DELETE /api/tareas/{id} — eliminar (204 o 404)
Usa ResponseEntity para códigos HTTP correctos.`}
          hint="ResponseEntity.status(HttpStatus.CREATED).body(tarea) para 201"
          solution={`@RestController
@RequestMapping("/api/tareas")
public class TareaController {
    record Tarea(long id, String titulo, boolean completada) {}
    private List<Tarea> tareas = new ArrayList<>();
    private long nextId = 1;

    @GetMapping
    public ResponseEntity<List<Tarea>> listar() {
        return ResponseEntity.ok(tareas);
    }

    @PostMapping
    public ResponseEntity<Tarea> crear(@RequestBody Tarea t) {
        var nueva = new Tarea(nextId++, t.titulo(), false);
        tareas.add(nueva);
        return ResponseEntity.status(HttpStatus.CREATED).body(nueva);
    }

    @PutMapping("/{id}/completar")
    public ResponseEntity<Tarea> completar(@PathVariable long id) {
        for (int i = 0; i < tareas.size(); i++) {
            if (tareas.get(i).id() == id) {
                var c = new Tarea(id, tareas.get(i).titulo(), true);
                tareas.set(i, c);
                return ResponseEntity.ok(c);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable long id) {
        boolean removed = tareas.removeIf(t -> t.id() == id);
        return removed
            ? ResponseEntity.noContent().build()   // 204
            : ResponseEntity.notFound().build();   // 404
    }
}`}
          solutionFilename="TareaController.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-37: controllers CRUD, ResponseEntity, @PathVariable"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 38</strong> — Services: lógica de negocio y @Transactional.
          </p>
        </div>
      </section>
    </div>
  );
}
