import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function ExcepcionesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Excepciones</h1>
      <p className="text-text-muted text-lg mb-8">Manejo de errores con try-catch-finally y throw</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">try-catch-finally</h2>
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
    </div>
  );
}
