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
        Hoy centralizarás el manejo de errores con @ControllerAdvice — respuestas JSON
        consistentes y profesionales para toda tu API.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué es necesario?</h2>

        <ThinkSection title="@ControllerAdvice = ErrorHandler global de Angular">
          <p>
            En Angular usas ErrorHandler o interceptors para capturar errores globalmente.
            En Spring, <code className="text-primary">@ControllerAdvice</code> intercepta excepciones de cualquier
            Controller y las transforma en respuestas JSON limpias con el código HTTP correcto.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Sin manejo de errores global, Spring retorna stacktraces en JSON o páginas HTML de error al cliente. 
          Con <code className="text-primary">@ControllerAdvice</code> defines respuestas de error <strong className="text-text">consistentes y profesionales</strong> 
          para toda tu API en un solo lugar.
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
