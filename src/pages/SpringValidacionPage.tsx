import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringValidacionPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Validación con Bean Validation</h1>
      <p className="text-text-muted text-lg mb-8">@Valid y anotaciones de validación para proteger tu API</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Anotaciones de validación</h2>
        <CodeBlock filename="UsuarioDTO.java" code={`
import jakarta.validation.constraints.*;

public class UsuarioDTO {

    @NotBlank(message = "El nombre no puede estar vacío")
    @Size(min = 2, max = 100, message = "El nombre debe tener entre 2 y 100 caracteres")
    private String nombre;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "Debe ser una dirección de correo válida")
    private String email;

    @NotNull(message = "La edad es obligatoria")
    @Min(value = 0, message = "La edad no puede ser negativa")
    @Max(value = 150, message = "La edad no puede superar 150")
    private Integer edad;

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Pattern(regexp = ".*[A-Z].*", message = "Debe contener al menos una mayúscula")
    private String password;

    @Positive(message = "El precio debe ser positivo")
    private Double precio;

    @NotEmpty(message = "La lista no puede estar vacía")
    private List<String> roles;

    @Past(message = "La fecha de nacimiento debe ser en el pasado")
    private LocalDate fechaNacimiento;

    // getters y setters...
}
`} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {[
            { a: '@NotNull', d: 'No nulo' }, { a: '@NotBlank', d: 'No nulo ni vacío (String)' },
            { a: '@NotEmpty', d: 'No nulo ni vacío (colecciones)' }, { a: '@Size', d: 'Tamaño min/max' },
            { a: '@Min / @Max', d: 'Valor mínimo/máximo' }, { a: '@Email', d: 'Formato email' },
            { a: '@Pattern', d: 'Expresión regular' }, { a: '@Positive', d: 'Número positivo' },
            { a: '@Past / @Future', d: 'Fecha en pasado/futuro' },
          ].map(({ a, d }) => (
            <div key={a} className="p-3 bg-bg-secondary rounded-lg border border-border">
              <code className="text-primary text-sm">{a}</code>
              <p className="text-text-muted text-xs mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Activar validación en el Controller</h2>
        <CodeBlock filename="UsuarioController.java" code={`
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    // @Valid activa la validación del RequestBody
    @PostMapping
    public ResponseEntity<UsuarioDTO> crear(@RequestBody @Valid UsuarioDTO usuario) {
        // Si la validación falla, Spring lanza MethodArgumentNotValidException
        // y @ControllerAdvice la maneja automáticamente (retorna 400)
        UsuarioDTO creado = service.guardar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }

    // También funciona con @RequestParam y @PathVariable con @Validated
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> obtener(
            @PathVariable @Positive(message = "El id debe ser positivo") Long id) {
        return service.buscarPorId(id)
            .map(ResponseEntity::ok)
            .orElseThrow(() -> new RecursoNoEncontradoException("Usuario " + id + " no encontrado"));
    }
}

// Para validar @PathVariable y @RequestParam, la clase controller debe tener:
@Validated  // en la clase del controller (no en el método)
`} />
        <InfoBox type="tip">
          <code className="text-primary">@Valid</code> vs <code className="text-primary">@Validated</code>: Usa <code className="text-primary">@Valid</code> 
          para validar el body completo de una petición. Usa <code className="text-primary">@Validated</code> a nivel de clase 
          para habilitar validación en parámetros sueltos (<code className="text-primary">@PathVariable</code>, <code className="text-primary">@RequestParam</code>).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Validación en grupos y anidada</h2>
        <CodeBlock filename="ValidacionAvanzada.java" code={`
// Validación anidada: validar objetos dentro de objetos
public class PedidoDTO {
    @Valid  // activa la validación de los objetos dentro de la lista
    @NotEmpty
    private List<@Valid ProductoDTO> productos;

    @Valid
    @NotNull
    private DireccionDTO direccion;
}

// Grupos de validación: validar diferente en create vs update
public interface OnCreate {}
public interface OnUpdate {}

public class UsuarioDTO {
    @Null(groups = OnCreate.class)  // null al crear (lo genera la BD)
    @NotNull(groups = OnUpdate.class)  // requerido al actualizar
    private Long id;

    @NotBlank(groups = {OnCreate.class, OnUpdate.class})
    private String nombre;
}

// En el controller, usar @Validated(grupo) en lugar de @Valid
@PostMapping
public ResponseEntity<?> crear(@RequestBody @Validated(OnCreate.class) UsuarioDTO dto) {...}

@PutMapping("/{id}")
public ResponseEntity<?> actualizar(@RequestBody @Validated(OnUpdate.class) UsuarioDTO dto) {...}
`} />
        <InfoBox type="angular">
          Bean Validation es equivalente a los validadores de Angular Reactive Forms:
          <code className="text-primary"> @NotBlank</code> = <code className="text-primary">Validators.required</code>,
          <code className="text-primary"> @Email</code> = <code className="text-primary">Validators.email</code>,
          <code className="text-primary"> @Size</code> = <code className="text-primary">Validators.minLength/maxLength</code>.
          La diferencia: en Spring la validación ocurre en el servidor (nunca confíes solo en el cliente).
        </InfoBox>
      </section>
    </div>
  );
}
