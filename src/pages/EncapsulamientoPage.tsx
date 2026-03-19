import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function EncapsulamientoPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Encapsulamiento</h1>
      <p className="text-text-muted text-lg mb-8">Proteger los datos internos de una clase</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Modificadores de Acceso</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene 4 niveles de acceso que controlan quién puede ver y usar tus campos y métodos:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-text-muted">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-text">Modificador</th>
                <th className="text-left py-3 px-3 text-text">Misma clase</th>
                <th className="text-left py-3 px-3 text-text">Mismo paquete</th>
                <th className="text-left py-3 px-3 text-text">Subclase</th>
                <th className="text-left py-3 px-3 text-text">Cualquiera</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">public</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">✅</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">protected</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">❌</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3 font-mono text-primary">(default)</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">❌</td><td className="py-2 px-3">❌</td></tr>
              <tr><td className="py-2 px-3 font-mono text-primary">private</td><td className="py-2 px-3">✅</td><td className="py-2 px-3">❌</td><td className="py-2 px-3">❌</td><td className="py-2 px-3">❌</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Encapsulamiento en práctica</h2>
        <CodeBlock filename="CuentaBancaria.java" code={`
public class CuentaBancaria {
    // Campos PRIVADOS: nadie puede acceder directamente
    private String titular;
    private double saldo;
    private String numeroCuenta;

    public CuentaBancaria(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.numeroCuenta = generarNumeroCuenta();
    }

    // Getter público: permite LEER el saldo
    public double getSaldo() {
        return saldo;
    }

    // NO hay setSaldo() — el saldo solo cambia con depositar/retirar

    public String getTitular() {
        return titular;
    }

    // Métodos públicos con lógica de negocio
    public void depositar(double monto) {
        if (monto <= 0) {
            throw new IllegalArgumentException("Monto debe ser positivo");
        }
        saldo += monto;
        System.out.printf("Depositado: $%.2f. Saldo: $%.2f%n", monto, saldo);
    }

    public void retirar(double monto) {
        if (monto <= 0) {
            throw new IllegalArgumentException("Monto debe ser positivo");
        }
        if (monto > saldo) {
            throw new IllegalArgumentException("Saldo insuficiente");
        }
        saldo -= monto;
        System.out.printf("Retirado: $%.2f. Saldo: $%.2f%n", monto, saldo);
    }

    // Método PRIVADO: solo uso interno
    private String generarNumeroCuenta() {
        return "CTA-" + System.currentTimeMillis();
    }
}
`} />
        <CodeBlock filename="UsoCuenta.java" code={`
public class UsoCuenta {
    public static void main(String[] args) {
        CuentaBancaria cuenta = new CuentaBancaria("Carlos", 1000);

        cuenta.depositar(500);  // OK: método público
        cuenta.retirar(200);    // OK: método público
        System.out.println(cuenta.getSaldo()); // 1300.0

        // cuenta.saldo = 999999; // ERROR: saldo es private
        // cuenta.saldo -= 100;   // ERROR: no puedes manipular directamente
    }
}
`} />
        <InfoBox type="tip" title="¿Por qué encapsular?">
          <strong>1.</strong> Proteges los datos de modificaciones no controladas.{' '}
          <strong>2.</strong> Puedes agregar validación en setters.{' '}
          <strong>3.</strong> Puedes cambiar la implementación interna sin afectar el código que usa tu clase.{' '}
          <strong>4.</strong> Es el principio fundamental de OOP.
        </InfoBox>
      </section>
    </div>
  );
}
