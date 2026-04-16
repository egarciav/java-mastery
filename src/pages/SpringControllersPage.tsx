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
        Hoy construirás REST APIs completas con @RestController y ResponseEntity.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">CRUD completo</h2>

        <ThinkSection title="Controller = la fachada HTTP de tu aplicación">
          <p>
            El Controller solo recibe HTTP y delega al Service. <strong className="text-text">Nunca</strong> pongas
            lógica de negocio en el Controller. Es como un Component de Angular que solo conecta
            la UI con el Service.
          </p>
        </ThinkSection>

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
