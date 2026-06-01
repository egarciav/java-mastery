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
        Hoy vas a aprender <strong className="text-text">encapsulamiento</strong> — el principio de OOP que dice:
        "esconde los detalles internos y expone solo lo necesario". Es la diferencia entre código frágil
        que se rompe cuando alguien modifica un campo directamente, y código robusto que protege su estado.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Modificadores de Acceso</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          Los modificadores de acceso controlan <strong className="text-text">quién puede ver y usar</strong> tus campos y métodos.
          Java tiene 4 niveles, de más restrictivo a más permisivo: <code className="text-primary">private</code>,
          (default/package), <code className="text-primary">protected</code>, <code className="text-primary">public</code>.
        </p>

        <ThinkSection title="¿Por qué no hacer todo public? El principio de mínima exposición">
          <p>
            En TypeScript/JavaScript, las propiedades de un objeto son públicas por defecto. En Java,
            la filosofía es opuesta: <strong className="text-text">esconde todo lo que no necesites exponer</strong>.
            Esto se llama <em>Principio de Mínima Exposición</em> y es uno de los pilares del buen diseño.
          </p>
          <p>
            <strong className="text-text">El problema de los campos públicos:</strong> imagina
            <code className="text-primary"> CuentaBancaria</code> con <code className="text-primary">public double saldo</code>.
            Cualquier código puede hacer <code className="text-primary">cuenta.saldo = -99999</code> y tu regla
            de negocio de "no permitir saldo negativo" no sirve de nada. Pero con
            <code className="text-primary">private double saldo</code> y un método
            <code className="text-primary">retirar(monto)</code>, <em>tú controlas</em> que el saldo solo cambia
            por caminos controlados con validaciones.
          </p>
          <p>
            <strong className="text-text">Cada nivel tiene su propósito:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">private</code>: implementación interna que nadie más necesita ver. Campos, métodos auxiliares.</li>
            <li><code className="text-primary">package-private</code> (sin keyword): para clases del mismo módulo que colaboran entre sí pero no deben ser visibles afuera.</li>
            <li><code className="text-primary">protected</code>: para subclases. Úsalo cuando una clase hija necesita acceder al campo o método del padre, pero no quieres que cualquiera lo haga.</li>
            <li><code className="text-primary">public</code>: la API que expones al mundo. Piensa bien qué pones aquí — una vez que es público, cambiar esa API rompe el código de todos los que la usen.</li>
          </ul>
          <p>
            <strong className="text-text">Regla de oro en Spring:</strong> en una aplicación Spring Boot profesional,
            las entidades tienen campos <code className="text-primary">private</code> con getters/setters.
            Los servicios tienen métodos <code className="text-primary">public</code> para su API y
            <code className="text-primary">private</code> para lógica interna. Los repositorios extienden interfaces públicas.
            Nunca verás campos públicos en código enterprise profesional.
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
