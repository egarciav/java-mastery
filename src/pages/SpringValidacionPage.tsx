import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringValidacionPage() {
  return (
    <div>
      <DayHeader
        day={43}
        title="Validación con Bean Validation"
        duration="45 min"
        commitMsg="dia-43: @Valid, @NotBlank, @Email, @Size, grupos de validación"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás Bean Validation — el estándar de Java para validar datos con anotaciones declarativas.
        La validación del frontend es para UX (feedback rápido); la del backend es para <strong className="text-text">seguridad</strong>.
        Nunca confíes en que el cliente envía datos correctos — cualquiera puede usar Postman o curl.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Cómo funciona Bean Validation?</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          <strong className="text-text">Bean Validation</strong> (JSR 380) te permite declarar restricciones con anotaciones
          (<code className="text-primary">@NotBlank</code>, <code className="text-primary">@Email</code>, <code className="text-primary">@Size</code>)
          directamente en los campos de tu DTO. Cuando un Controller recibe un request con <code className="text-primary">@Valid</code>,
          Spring valida automáticamente el objeto ANTES de ejecutar tu método. Si falla, lanza una excepción que
          puedes manejar para retornar un error 400 con los mensajes apropiados.
        </p>

        <ThinkSection title="Bean Validation: anotaciones declarativas que sustituyen el código de validación manual">
          <p>
            En Angular usas <code className="text-primary">Validators.required</code>,
            <code className="text-primary"> Validators.email</code>, <code className="text-primary">Validators.minLength()</code>
            en Reactive Forms. Bean Validation (Jakarta Validation) es el equivalente para el servidor Java:
            anotaciones directamente en los campos del DTO que el framework valida automáticamente.
          </p>
          <p>
            <strong className="text-text">Sin Bean Validation</strong> tendrías que escribir en cada servicio:
            <code className="text-primary"> if (email == null || email.isBlank()) throw new ValidationException(...)</code>
            para cada campo — código repetitivo y propenso a olvidar casos. Con
            <code className="text-primary"> @NotBlank</code>, <code className="text-primary">@Email</code>,
            <code className="text-primary"> @Size(min=2)</code> en el DTO + <code className="text-primary">@Valid</code> en el
            Controller, Spring lo hace automáticamente.
          </p>
          <p>
            <strong className="text-text">El trigger: <code className="text-primary">@Valid</code></strong> en el parámetro
            del Controller activa la validación. Si falla, Spring lanza
            <code className="text-primary"> MethodArgumentNotValidException</code> antes de que tu método se ejecute.
            Tu <code className="text-primary">@ControllerAdvice</code> la captura y retorna 400 con los mensajes de error.
          </p>
          <p>
            <strong className="text-text">Las anotaciones más importantes:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">@NotNull</code>: no puede ser null</li>
            <li><code className="text-primary">@NotBlank</code>: no puede ser null ni vacío ni solo espacios (para Strings)</li>
            <li><code className="text-primary">@Size(min, max)</code>: longitud de String o tamaño de colección</li>
            <li><code className="text-primary">@Min / @Max</code>: rango numérico</li>
            <li><code className="text-primary">@Email</code>: formato de email válido</li>
            <li><code className="text-primary">@Pattern(regexp)</code>: validación con regex personalizada</li>
            <li><code className="text-primary">@Valid</code>: valida objetos anidados en el DTO</li>
          </ul>
          <p>
            <strong className="text-text">Validación frontend vs backend:</strong> la validación de Angular
            mejora la UX mostrando errores antes de enviar. La validación de Spring protege tu API de
            datos malformados independientemente del cliente. <em>Siempre valida en ambos lados</em>.
          </p>
        </ThinkSection>

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 43</h2>
        <Exercise
          number={1}
          title="DTO con validaciones completas"
          description={`Crea ProductoCreateRequest con:
- nombre: @NotBlank, @Size(2-100)
- precio: @NotNull, @Positive
- categoria: @NotBlank
- stock: @Min(0)
Usa @Valid en el controller y verifica que Spring retorna 400 con mensajes claros.`}
          hint="@PostMapping public ResponseEntity<?> crear(@RequestBody @Valid ProductoCreateRequest req)"
          solution={`public record ProductoCreateRequest(
    @NotBlank(message = "Nombre requerido")
    @Size(min = 2, max = 100, message = "Nombre: 2-100 chars")
    String nombre,

    @NotNull(message = "Precio requerido")
    @Positive(message = "Precio debe ser positivo")
    Double precio,

    @NotBlank(message = "Categoría requerida")
    String categoria,

    @Min(value = 0, message = "Stock no puede ser negativo")
    int stock
) {}

// En el controller:
@PostMapping
public ResponseEntity<ProductoResponse> crear(
        @RequestBody @Valid ProductoCreateRequest req) {
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(service.crear(req));
}`}
          solutionFilename="ProductoCreateRequest.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-43: Bean Validation, @Valid, grupos de validación"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 44</strong> — DTOs y MapStruct: separar API de BD.
          </p>
        </div>
      </section>
    </div>
  );
}
