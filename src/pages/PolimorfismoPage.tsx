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
        Hoy entenderás el concepto más poderoso de la Programación Orientada a Objetos: el <strong className="text-text">polimorfismo</strong>.
        Significa que un mismo método se comporta de forma diferente según el tipo real del objeto que lo ejecuta.
        Es lo que permite que frameworks como Spring Boot funcionen con código extensible y desacoplado.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es el Polimorfismo?</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          La palabra viene del griego: <strong className="text-text">"poli"</strong> (muchos) + <strong className="text-text">"morfo"</strong> (formas).
          En programación significa que una variable de tipo padre puede contener un objeto de cualquier tipo hijo,
          y al llamar un método, Java ejecuta la versión del <strong className="text-text">tipo real del objeto</strong> (no de la variable).
          Esto se decide en runtime — se llama <strong className="text-text">dynamic dispatch</strong> o <strong className="text-text">late binding</strong>.
        </p>

        <ThinkSection title="¿Por qué el polimorfismo es el pilar de la extensibilidad?">
          <p>
            <strong className="text-text">Dynamic dispatch</strong> (despacho dinámico): cuando llamas
            <code className="text-primary"> animal.comer()</code>, Java no decide en compilación qué método
            ejecutar. Lo decide en <em>runtime</em> basándose en el tipo real del objeto en memoria.
            Aunque la variable sea de tipo <code className="text-primary">Animal</code>, si el objeto real es
            un <code className="text-primary">Perro</code>, se ejecuta <code className="text-primary">Perro.comer()</code>.
            Esto se llama <strong className="text-text">late binding</strong>.
          </p>
          <p>
            Imagina un método <code className="text-primary">alimentar(Animal animal)</code>. Puedes pasarle un Perro,
            un Gato, un Pájaro — cualquier subtipo de Animal. El método funciona correctamente para todos
            sin importar el tipo concreto. Ahora agregas <code className="text-primary">Tortuga</code>: el método
            <code className="text-primary"> alimentar()</code> funciona automáticamente sin ningún cambio.
            Esto es el principio <strong className="text-text">Open/Closed</strong> del SOLID en acción.
          </p>
          <p>
            <strong className="text-text">Upcasting y downcasting:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Upcasting</strong> (implícito, siempre seguro): <code className="text-primary">Animal a = new Perro()</code> — tratas al Perro como Animal. Pierdes acceso a los métodos específicos de Perro.</li>
            <li><strong className="text-text">Downcasting</strong> (explícito, puede fallar): <code className="text-primary">Perro p = (Perro) a</code> — recuperas acceso a los métodos de Perro. Si el objeto real NO es un Perro, lanza <code className="text-primary">ClassCastException</code> en runtime.</li>
            <li>Usa siempre <code className="text-primary">instanceof</code> antes de hacer downcast. En Java 16+, usa pattern matching: <code className="text-primary">if (a instanceof Perro p) {'{'} p.ladrar(); {'}'}</code></li>
          </ul>
          <p>
            En Spring Boot: Spring inyecta una implementación concreta
            (<code className="text-primary">ProductoServiceImpl</code>) en una variable del tipo interfaz
            (<code className="text-primary">ProductoService</code>). Esto es upcasting en acción.
            El controller no sabe ni le importa qué implementación concreta recibe.
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
