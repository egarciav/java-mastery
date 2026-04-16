import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function EncapsulamientoPage() {
  return (
    <div>
      <DayHeader
        day={12}
        title="Encapsulamiento"
        duration="45 min"
        commitMsg="dia-12: encapsulamiento, modificadores de acceso, getters/setters"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a aprender a proteger los datos internos de tus clases. La regla de oro:
        campos <code className="text-primary">private</code>, acceso controlado con getters/setters.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Modificadores de Acceso</h2>

        <ThinkSection title="¿Por qué no hacer todo public?">
          <p>
            En TypeScript puedes acceder a cualquier propiedad de un objeto. En Java, la filosofía es diferente:
            <strong className="text-text"> esconde todo lo que puedas</strong>. Si alguien puede modificar tu
            <code className="text-primary"> saldo</code> directamente con <code className="text-primary">cuenta.saldo = -1000</code>,
            tu lógica de negocio no sirve de nada.
          </p>
          <p>
            La regla: <strong className="text-text">campos siempre private</strong>, métodos public solo los necesarios.
          </p>
        </ThinkSection>
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 12</h2>

        <Exercise
          number={1}
          title="Clase Producto encapsulada"
          description={`Crea Producto.java con:
- Campos private: nombre, precio, stock
- Constructor con validación (precio > 0, stock >= 0)
- Getters para todos los campos
- setPrecio con validación (> 0)
- vender(int cantidad) que reduzca stock si hay suficiente
- reabastecer(int cantidad) que aumente stock

No debe haber forma de modificar el precio o stock directamente. Solo a través de los métodos.`}
          hint="En vender: if (cantidad > stock) throw new IllegalArgumentException(...);"
          solution={`public class Producto {
    private String nombre;
    private double precio;
    private int stock;

    public Producto(String nombre, double precio, int stock) {
        if (precio <= 0) throw new IllegalArgumentException("Precio debe ser positivo");
        if (stock < 0) throw new IllegalArgumentException("Stock no puede ser negativo");
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public String getNombre() { return nombre; }
    public double getPrecio() { return precio; }
    public int getStock() { return stock; }

    public void setPrecio(double precio) {
        if (precio <= 0) throw new IllegalArgumentException("Precio debe ser positivo");
        this.precio = precio;
    }

    public void vender(int cantidad) {
        if (cantidad <= 0) throw new IllegalArgumentException("Cantidad debe ser positiva");
        if (cantidad > stock) throw new IllegalArgumentException("Stock insuficiente");
        stock -= cantidad;
        System.out.printf("Vendido %d de %s. Stock restante: %d%n", cantidad, nombre, stock);
    }

    public void reabastecer(int cantidad) {
        if (cantidad <= 0) throw new IllegalArgumentException("Cantidad debe ser positiva");
        stock += cantidad;
        System.out.printf("Reabastecido %d de %s. Stock actual: %d%n", cantidad, nombre, stock);
    }

    @Override
    public String toString() {
        return String.format("%s - $%.2f (stock: %d)", nombre, precio, stock);
    }

    public static void main(String[] args) {
        Producto p = new Producto("Laptop", 999.99, 10);
        System.out.println(p);
        p.vender(3);
        p.reabastecer(5);
        p.setPrecio(899.99);
        System.out.println(p);
    }
}`}
          solutionFilename="Producto.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-12: encapsulamiento, modificadores de acceso, validacion en setters"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 13</strong>: herencia —
            extends, super, @Override, clases abstractas.
          </p>
        </div>
      </section>
    </div>
  );
}
