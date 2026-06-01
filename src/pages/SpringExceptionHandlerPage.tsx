import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringExceptionHandlerPage() {
  return (
    <div>
      <DayHeader
        day={42}
        title="Manejo de Excepciones"
        duration="45 min"
        commitMsg="dia-42: @ControllerAdvice, @ExceptionHandler, ErrorResponse"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy centralizarás el manejo de errores de tu API en un solo lugar usando <code className="text-primary">@ControllerAdvice</code>.
        En vez de poner try-catch en cada Controller, defines UN handler global que intercepta excepciones
        de cualquier endpoint y las transforma en respuestas JSON limpias y profesionales.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué necesitas manejo global de errores?</h2>

        <ThinkSection title="@ControllerAdvice: manejo global de errores para una API profesional">
          <p>
            En Angular capturas errores HTTP en interceptors y los presentas al usuario de forma coherente.
            En Spring, <code className="text-primary">@ControllerAdvice</code> hace lo análogo en el servidor:
            un componente central que captura excepciones de <em>todos</em> los Controllers y las transforma
            en respuestas JSON estructuradas con el código HTTP correcto.
          </p>
          <p>
            <strong className="text-text">Sin @ControllerAdvice</strong>, Spring Boot retorna por defecto
            su "Whitelabel Error Page" en HTML o un JSON de Spring con campos como <code className="text-primary">timestamp</code>,
            <code className="text-primary"> status</code>, <code className="text-primary">error</code>, <code className="text-primary">path</code>
            — útil para desarrollo pero inaceptable en producción porque expone detalles internos.
          </p>
          <p>
            <strong className="text-text">El flujo correcto en una API profesional:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>Service lanza <code className="text-primary">ResourceNotFoundException("Producto con id 5 no encontrado")</code></li>
            <li><code className="text-primary">@ControllerAdvice</code> la captura con <code className="text-primary">@ExceptionHandler(ResourceNotFoundException.class)</code></li>
            <li>Retorna <code className="text-primary">ResponseEntity</code> con status 404 y un JSON consistente: <code className="text-primary">{"{'{'} \"error\": \"NOT_FOUND\", \"mensaje\": \"...\", \"timestamp\": \"...\" {'}'}"}</code></li>
            <li>El Service nunca sabe nada de HTTP. El Controller nunca maneja errores. Todo centralizado.</li>
          </ul>
          <p>
            <strong className="text-text">Mapeo de excepciones a códigos HTTP:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">ResourceNotFoundException</code> → 404 Not Found</li>
            <li><code className="text-primary">ValidationException</code> / <code className="text-primary">MethodArgumentNotValidException</code> → 400 Bad Request</li>
            <li><code className="text-primary">AccessDeniedException</code> → 403 Forbidden</li>
            <li><code className="text-primary">Exception</code> (genérica) → 500 Internal Server Error</li>
          </ul>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          El patrón es: (1) creas excepciones personalizadas para cada caso de error (recurso no encontrado,
          validación fallida, acceso denegado), (2) las lanzas desde tus Services cuando algo falla, y
          (3) <code className="text-primary">@ControllerAdvice</code> las captura y las convierte en ResponseEntity
          con el código HTTP y body JSON apropiados. Tu código de negocio solo lanza excepciones — nunca se
          preocupa por construir respuestas HTTP de error.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Excepciones personalizadas</h2>
        <CodeBlock filename="Excepciones.java" code={`
// Excepción para recurso no encontrado (404)
public class RecursoNoEncontradoException extends RuntimeException {
    public RecursoNoEncontradoException(String mensaje) {
        super(mensaje);
    }
}

// Excepción para datos duplicados (409)
public class RecursoDuplicadoException extends RuntimeException {
    public RecursoDuplicadoException(String mensaje) {
        super(mensaje);
    }
}

// Usar en el Service:
public Usuario buscarPorId(Long id) {
    return repository.findById(id)
        .orElseThrow(() -> new RecursoNoEncontradoException(
            "Usuario con id " + id + " no encontrado"
        ));
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">ErrorResponse DTO</h2>
        <CodeBlock filename="ErrorResponse.java" code={`
// Estructura consistente para todas las respuestas de error
public record ErrorResponse(
    int status,
    String error,
    String mensaje,
    String timestamp,
    String path
) {
    public static ErrorResponse of(int status, String error, String mensaje, String path) {
        return new ErrorResponse(
            status, error, mensaje,
            LocalDateTime.now().toString(),
            path
        );
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">@ControllerAdvice — Manejador global</h2>
        <CodeBlock filename="GlobalExceptionHandler.java" code={`
@RestControllerAdvice  // = @ControllerAdvice + @ResponseBody
public class GlobalExceptionHandler {

    // 404 - No encontrado
    @ExceptionHandler(RecursoNoEncontradoException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNoEncontrado(
            RecursoNoEncontradoException ex,
            HttpServletRequest request) {
        return ErrorResponse.of(404, "Not Found", ex.getMessage(), request.getRequestURI());
    }

    // 409 - Conflicto (duplicado)
    @ExceptionHandler(RecursoDuplicadoException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handleDuplicado(
            RecursoDuplicadoException ex,
            HttpServletRequest request) {
        return ErrorResponse.of(409, "Conflict", ex.getMessage(), request.getRequestURI());
    }

    // 400 - Validación fallida (@Valid)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleValidacion(
            MethodArgumentNotValidException ex,
            HttpServletRequest request) {
        Map<String, String> errores = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(e -> errores.put(e.getField(), e.getDefaultMessage()));

        return Map.of(
            "status", 400,
            "error", "Bad Request",
            "errores", errores,
            "path", request.getRequestURI()
        );
    }

    // 500 - Cualquier otra excepción no manejada
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneral(Exception ex, HttpServletRequest request) {
        return ErrorResponse.of(500, "Internal Server Error",
            "Error interno del servidor", request.getRequestURI());
    }
}
`} />
        <InfoBox type="spring">
          Con este patrón, cuando tu Service lanza <code className="text-primary">RecursoNoEncontradoException</code>, 
          Spring automáticamente retorna un JSON 404 limpio al cliente. Nunca más stacktraces expuestos en producción.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejemplo de respuesta JSON</h2>
        <CodeBlock language="bash" filename="GET /api/usuarios/99 (no existe)" code={`
// HTTP 404 Not Found
{
  "status": 404,
  "error": "Not Found",
  "mensaje": "Usuario con id 99 no encontrado",
  "timestamp": "2024-01-15T10:30:45",
  "path": "/api/usuarios/99"
}

// HTTP 400 Bad Request (validación)
{
  "status": 400,
  "error": "Bad Request",
  "errores": {
    "email": "debe ser una dirección de correo válida",
    "nombre": "el nombre no puede estar vacío"
  },
  "path": "/api/usuarios"
}
`} />
        <InfoBox type="angular">
          En Angular, tu <code className="text-primary">HttpClient</code> recibirá estos errores en el bloque 
          <code className="text-primary"> catchError</code> del observable. El <code className="text-primary">error.error.mensaje</code> 
          o <code className="text-primary">error.error.errores</code> tendrá el detalle para mostrar en la UI.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 42</h2>
        <Exercise
          number={1}
          title="GlobalExceptionHandler completo"
          description={`Implementa un @RestControllerAdvice con handlers para:
1. RecursoNoEncontradoException → 404
2. RecursoDuplicadoException → 409
3. IllegalArgumentException → 400
4. Exception genérica → 500
Todos retornando ErrorResponse con status, error, mensaje, timestamp, path.`}
          hint="@ExceptionHandler(MiException.class) @ResponseStatus(HttpStatus.NOT_FOUND) public ErrorResponse handle(...)"
          solution={`@RestControllerAdvice
public class GlobalExceptionHandler {
    record ErrorResponse(int status, String error, String mensaje, String timestamp, String path) {
        static ErrorResponse of(int s, String e, String m, String p) {
            return new ErrorResponse(s, e, m, java.time.LocalDateTime.now().toString(), p);
        }
    }

    @ExceptionHandler(RecursoNoEncontradoException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handle404(RecursoNoEncontradoException ex, HttpServletRequest req) {
        return ErrorResponse.of(404, "Not Found", ex.getMessage(), req.getRequestURI());
    }

    @ExceptionHandler(RecursoDuplicadoException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorResponse handle409(RecursoDuplicadoException ex, HttpServletRequest req) {
        return ErrorResponse.of(409, "Conflict", ex.getMessage(), req.getRequestURI());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handle400(IllegalArgumentException ex, HttpServletRequest req) {
        return ErrorResponse.of(400, "Bad Request", ex.getMessage(), req.getRequestURI());
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handle500(Exception ex, HttpServletRequest req) {
        return ErrorResponse.of(500, "Internal Server Error", "Error interno", req.getRequestURI());
    }
}`}
          solutionFilename="GlobalExceptionHandler.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-42: @ControllerAdvice, ErrorResponse, exception handlers"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 43</strong> — Validación con @Valid y Bean Validation.
          </p>
        </div>
      </section>
    </div>
  );
}
