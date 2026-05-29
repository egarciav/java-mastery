import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function ExcepcionesPage() {
  return (
    <div>
      <DayHeader
        day={18}
        title="Excepciones"
        duration="50 min"
        commitMsg="dia-18: try-catch, throw, custom exceptions, try-with-resources"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy dominarás el manejo de errores en Java. A diferencia de TypeScript donde capturar errores
        es totalmente opcional, Java tiene un sistema de excepciones donde el compilador te <strong className="text-text">obliga</strong>
        a pensar en qué puede fallar y cómo manejar cada caso.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">El sistema de excepciones de Java</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          En Java, cuando algo sale mal, se lanza (throw) una <strong className="text-text">excepción</strong> — un objeto
          que describe el error. El flujo del programa se interrumpe y busca un bloque <code className="text-primary">catch</code>
          que pueda manejar ese tipo de error. Si no lo encuentra, el programa se detiene con un stack trace.
        </p>

        <ThinkSection title="Checked vs Unchecked — la diferencia fundamental con TypeScript">
          <p>
            En TypeScript/JavaScript, todos los errores son opcionales de manejar. Puedes ignorarlos y tu código
            compila igual (aunque crashee en runtime). Java tiene una filosofía diferente con dos categorías:
          </p>
          <p>
            <strong className="text-text">Checked exceptions</strong> (heredan de <code className="text-primary">Exception</code>):
            el compilador te <em>obliga</em> a manejarlas con try-catch o declararlas con throws.
            Representan errores recuperables que tu programa debería anticipar: archivos que no existen
            (<code className="text-primary">IOException</code>), conexiones a BD fallidas (<code className="text-primary">SQLException</code>).
            Si no las manejas, <strong className="text-text">tu código no compila</strong>.
          </p>
          <p>
            <strong className="text-text">Unchecked exceptions</strong> (heredan de <code className="text-primary">RuntimeException</code>):
            son opcionales de capturar. Representan errores de programación que NO deberían ocurrir si el código
            es correcto: <code className="text-primary">NullPointerException</code> (usaste null sin verificar),
            <code className="text-primary"> ArrayIndexOutOfBoundsException</code> (accediste fuera del rango).
            La solución es arreglar el código, no ponerle try-catch.
          </p>
        </ThinkSection>

        <CodeBlock filename="Excepciones.java" code={`
public class Excepciones {
    public static void main(String[] args) {
        // try-catch básico
        try {
            int resultado = 10 / 0; // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Múltiples catch
        try {
            String texto = null;
            texto.length(); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Null: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error general: " + e.getMessage());
        }

        // Multi-catch (Java 7+)
        try {
            // código que puede lanzar varias excepciones
            int[] arr = {1, 2};
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException | NullPointerException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // finally: SIEMPRE se ejecuta
        try {
            System.out.println("Intentando...");
        } catch (Exception e) {
            System.out.println("Error");
        } finally {
            System.out.println("Siempre se ejecuta (limpiar recursos)");
        }
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">throw y throws</h2>
        <CodeBlock filename="ThrowEjemplo.java" code={`
public class ThrowEjemplo {
    // throws: DECLARA que el método puede lanzar una excepción checked
    public static int dividir(int a, int b) throws IllegalArgumentException {
        if (b == 0) {
            throw new IllegalArgumentException("Divisor no puede ser 0");
        }
        return a / b;
    }

    // Excepción personalizada
    static class SaldoInsuficienteException extends Exception {
        private double saldo;

        public SaldoInsuficienteException(String msg, double saldo) {
            super(msg);
            this.saldo = saldo;
        }

        public double getSaldo() { return saldo; }
    }

    public static void retirar(double monto, double saldo)
            throws SaldoInsuficienteException {
        if (monto > saldo) {
            throw new SaldoInsuficienteException(
                "Saldo insuficiente para retirar " + monto, saldo);
        }
    }

    public static void main(String[] args) {
        try {
            retirar(500, 100);
        } catch (SaldoInsuficienteException e) {
            System.out.println(e.getMessage());
            System.out.println("Saldo actual: " + e.getSaldo());
        }
    }
}
`} />
        <InfoBox type="info">
          <strong>Checked exceptions</strong> (heredan de Exception): el compilador te obliga a manejarlas con try-catch o declararlas con throws.
          <strong> Unchecked exceptions</strong> (heredan de RuntimeException): no requieren manejo explícito (NullPointer, ArrayIndex, etc.).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">try-with-resources (Java 7+)</h2>
        <CodeBlock filename="TryWithResources.java" code={`
import java.io.*;

public class TryWithResources {
    public static void main(String[] args) {
        // Cierra automáticamente recursos que implementan AutoCloseable
        try (BufferedReader reader = new BufferedReader(new FileReader("datos.txt"))) {
            String linea = reader.readLine();
            System.out.println(linea);
        } catch (IOException e) {
            System.out.println("Error de archivo: " + e.getMessage());
        }
        // reader se cierra automáticamente al salir del try
    }
}
`} />
        <InfoBox type="angular">
          TypeScript no tiene checked exceptions. En Java, el compilador te fuerza a manejar ciertas excepciones.
          Es más estricto pero previene errores no manejados en producción.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 18</h2>
        <Exercise
          number={1}
          title="Validador con excepciones personalizadas"
          description={`Crea un sistema de validación:
1. EdadInvalidaException extends Exception (con campo int edad)
2. EmailInvalidoException extends Exception (con campo String email)
3. Clase Validador con métodos static:
   - validarEdad(int edad) — lanza si edad < 0 o > 150
   - validarEmail(String email) — lanza si no contiene "@"
4. Main que pruebe ambos casos con try-catch`}
          hint='throw new EdadInvalidaException("Edad fuera de rango: " + edad, edad);'
          solution={`class EdadInvalidaException extends Exception {
    private int edad;
    public EdadInvalidaException(String msg, int edad) {
        super(msg); this.edad = edad;
    }
    public int getEdad() { return edad; }
}

class EmailInvalidoException extends Exception {
    private String email;
    public EmailInvalidoException(String msg, String email) {
        super(msg); this.email = email;
    }
    public String getEmail() { return email; }
}

public class Validador {
    public static void validarEdad(int edad) throws EdadInvalidaException {
        if (edad < 0 || edad > 150)
            throw new EdadInvalidaException("Edad inválida: " + edad, edad);
    }

    public static void validarEmail(String email) throws EmailInvalidoException {
        if (email == null || !email.contains("@"))
            throw new EmailInvalidoException("Email inválido: " + email, email);
    }

    public static void main(String[] args) {
        try { validarEdad(200); }
        catch (EdadInvalidaException e) { System.out.println(e.getMessage()); }

        try { validarEmail("sin-arroba"); }
        catch (EmailInvalidoException e) { System.out.println(e.getMessage()); }

        try {
            validarEdad(25);
            validarEmail("user@mail.com");
            System.out.println("Todo válido");
        } catch (EdadInvalidaException | EmailInvalidoException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`}
          solutionFilename="Validador.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-18: excepciones, try-catch, custom exceptions"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 19</strong> — Generics: tipos paramétricos, bounded types, wildcards.
          </p>
        </div>
      </section>
    </div>
  );
}
