import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function PolimorfismoPage() {
  return (
    <div>
      <DayHeader
        day={14}
        title="Polimorfismo"
        duration="50 min"
        commitMsg="dia-14: polimorfismo, upcasting, downcasting, instanceof"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy entenderás el concepto más poderoso de OOP: un mismo método se comporta diferente
        según el objeto real. Esto es lo que hace que OOP sea tan flexible.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es el Polimorfismo?</h2>

        <ThinkSection title="Polimorfismo = 'muchas formas'">
          <p>
            Imagina un método <code className="text-primary">alimentar(Animal animal)</code>. Puedes pasarle un Perro,
            un Gato, o cualquier subtipo de Animal. Java ejecutará el método <code className="text-primary">comer()</code>
            correcto <strong className="text-text">según el tipo real del objeto</strong>, no el tipo de la variable.
          </p>
          <p>
            Esto te permite escribir código genérico que funciona con cualquier subtipo. Es la base de los frameworks como Spring.
          </p>
        </ThinkSection>

        <CodeBlock filename="Polimorfismo.java" code={`
public class Polimorfismo {
    public static void main(String[] args) {
        // Variable tipo Animal, objeto tipo Perro/Gato
        Animal[] animales = {
            new Perro("Rex", 5, "Pastor"),
            new Gato("Misi", 3, true),
            new Perro("Luna", 2, "Labrador")
        };

        // Java llama al método correcto según el TIPO REAL del objeto
        for (Animal animal : animales) {
            animal.comer();  // Cada uno ejecuta su propia versión
        }
        // "Rex come croquetas de Pastor"
        // "Misi está comiendo (y también come atún)"
        // "Luna come croquetas de Labrador"
    }

    // Método que acepta CUALQUIER Animal
    static void alimentar(Animal animal) {
        System.out.println("Alimentando a " + animal.nombre);
        animal.comer(); // ejecuta la versión correcta
    }

    // Método que acepta CUALQUIER Figura
    static void imprimirArea(Figura figura) {
        System.out.printf("Área: %.2f%n", figura.calcularArea());
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Casting de objetos</h2>
        <CodeBlock filename="CastingObjetos.java" code={`
public class CastingObjetos {
    public static void main(String[] args) {
        // Upcasting (implícito): hijo → padre (siempre seguro)
        Animal animal = new Perro("Rex", 5, "Pastor");

        // Downcasting (explícito): padre → hijo (puede fallar)
        if (animal instanceof Perro) {
            Perro perro = (Perro) animal; // cast explícito
            perro.ladrar(); // ahora sí puedes usar métodos de Perro
        }

        // Java 16+: Pattern matching (más limpio)
        if (animal instanceof Perro perro) {
            perro.ladrar(); // cast automático
        }

        // ClassCastException si el cast es inválido
        // Gato gato = (Gato) animal; // CRASH: animal es un Perro, no un Gato
    }
}
`} />
        <InfoBox type="tip">
          Siempre verifica con <code className="text-primary">instanceof</code> antes de hacer downcasting.
          El pattern matching de Java 16+ combina la verificación y el cast en una sola línea.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 14</h2>

        <Exercise
          number={1}
          title="Sistema de pagos polimórfico"
          description={`Crea una jerarquía de pagos:
- MetodoPago (clase abstracta): monto. Método abstracto procesar().
- TarjetaCredito extends MetodoPago: ultimos4Digitos. procesar() imprime "Cobrado $X a tarjeta ****1234".
- PayPal extends MetodoPago: email. procesar() imprime "Cobrado $X a PayPal user@mail.com".
- Transferencia extends MetodoPago: banco. procesar() imprime "Transferencia de $X desde Banco X".

Crea un array MetodoPago[] con los 3 tipos y recórrelo llamando procesar().`}
          hint="abstract class MetodoPago { protected double monto; public abstract void procesar(); }"
          solution={`public abstract class MetodoPago {
    protected double monto;

    public MetodoPago(double monto) { this.monto = monto; }
    public abstract void procesar();
}

class TarjetaCredito extends MetodoPago {
    private String ultimos4;
    public TarjetaCredito(double monto, String ultimos4) {
        super(monto);
        this.ultimos4 = ultimos4;
    }
    @Override
    public void procesar() {
        System.out.printf("Cobrado $%.2f a tarjeta ****%s%n", monto, ultimos4);
    }
}

class PayPal extends MetodoPago {
    private String email;
    public PayPal(double monto, String email) {
        super(monto);
        this.email = email;
    }
    @Override
    public void procesar() {
        System.out.printf("Cobrado $%.2f a PayPal %s%n", monto, email);
    }
}

class Transferencia extends MetodoPago {
    private String banco;
    public Transferencia(double monto, String banco) {
        super(monto);
        this.banco = banco;
    }
    @Override
    public void procesar() {
        System.out.printf("Transferencia de $%.2f desde %s%n", monto, banco);
    }

    public static void main(String[] args) {
        MetodoPago[] pagos = {
            new TarjetaCredito(99.99, "1234"),
            new PayPal(49.50, "user@mail.com"),
            new Transferencia(200.00, "Banco Nacional")
        };
        for (MetodoPago pago : pagos) {
            pago.procesar();
        }
    }
}`}
          solutionFilename="MetodoPago.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-14: polimorfismo, upcasting, downcasting, instanceof"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 15</strong>: interfaces —
            contratos, default methods, implementación múltiple.
          </p>
        </div>
      </section>
    </div>
  );
}
