import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function InterfacesPage() {
  return (
    <div>
      <DayHeader
        day={15}
        title="Interfaces"
        duration="50 min"
        commitMsg="dia-15: interfaces, default methods, funcionales, lambdas intro"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás interfaces — el mecanismo de Java para definir contratos que las clases deben cumplir.
        A diferencia de la herencia (solo UNA clase padre), puedes implementar <strong className="text-text">múltiples</strong> interfaces.
        Son la base de la inyección de dependencias en Spring Boot.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es una Interface?</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          Una interface define <strong className="text-text">qué</strong> debe hacer una clase, pero no <strong className="text-text">cómo</strong>.
          Es un contrato: "si implementas esta interface, DEBES tener estos métodos". Cualquier clase que
          implemente la interface garantiza que puede hacer esas operaciones, sin importar cómo las implemente internamente.
        </p>

        <ThinkSection title="Interface = contrato de capacidades">
          <p>
            En TypeScript, las interfaces son solo contratos de forma/tipo — definen qué propiedades y métodos
            debe tener un objeto. En Java, las interfaces también son contratos, pero desde Java 8 pueden tener
            <code className="text-primary"> default</code> methods con implementación real. Esto permite agregar
            métodos nuevos a una interface sin romper todas las clases que la implementan.
          </p>
          <p>
            <strong className="text-text">¿Cuándo usar interface vs clase abstracta?</strong> Usa interface cuando defines
            una <em>capacidad</em> que clases no relacionadas pueden tener: un Pato puede ser
            <code className="text-primary"> Volable</code> y <code className="text-primary">Nadable</code>.
            Un Avión también puede ser <code className="text-primary">Volable</code>. No tienen relación de herencia,
            pero comparten la capacidad de volar.
          </p>
          <p>
            En Spring Boot, la DI funciona principalmente a través de interfaces: tu Controller depende de
            <code className="text-primary"> UsuarioService</code> (interface), y Spring inyecta la implementación concreta.
            Esto permite cambiar la implementación sin tocar el código que la usa.
          </p>
        </ThinkSection>

        <CodeBlock filename="Volable.java" code={`
public interface Volable {
    void volar();              // abstracto (sin cuerpo)
    double getAlturaMax();

    // default method (Java 8+): tiene implementación
    default void aterrizar() {
        System.out.println("Aterrizando...");
    }

    // static method en interfaz
    static String tipo() { return "Volable"; }
}

public interface Nadable {
    void nadar();
}

// Implementar MÚLTIPLES interfaces (a diferencia de extends)
public class Pato implements Volable, Nadable {
    @Override
    public void volar() { System.out.println("Pato volando"); }

    @Override
    public double getAlturaMax() { return 100; }

    @Override
    public void nadar() { System.out.println("Pato nadando"); }
    // aterrizar() se hereda del default
}
`} />
        <InfoBox type="angular">
          Las interfaces de Java son como las de TypeScript pero con una diferencia clave:
          en Java pueden tener métodos <code className="text-primary">default</code> con implementación
          y métodos <code className="text-primary">static</code>. En TS las interfaces son solo contratos de tipos.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Interfaces funcionales</h2>
        <CodeBlock filename="InterfazFuncional.java" code={`
// Interfaz con UN SOLO método abstracto = interfaz funcional
// Se puede usar con lambdas
@FunctionalInterface
public interface Operacion {
    double calcular(double a, double b);
}

public class Main {
    public static void main(String[] args) {
        // Usar con lambda
        Operacion suma = (a, b) -> a + b;
        Operacion resta = (a, b) -> a - b;

        System.out.println(suma.calcular(5, 3));  // 8.0
        System.out.println(resta.calcular(5, 3)); // 2.0

        // Interfaces funcionales del JDK:
        // Predicate<T>    -> boolean test(T t)
        // Function<T, R>  -> R apply(T t)
        // Consumer<T>     -> void accept(T t)
        // Supplier<T>     -> T get()
    }
}
`} />
        <InfoBox type="tip">
          <code className="text-primary">@FunctionalInterface</code> es opcional pero recomendada.
          Le dice al compilador que la interfaz debe tener exactamente un método abstracto.
          Son la base de las lambdas y Streams en Java.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Interface vs Clase abstracta</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-text-muted">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-text">Característica</th>
                <th className="text-left py-3 px-3 text-text">Interface</th>
                <th className="text-left py-3 px-3 text-text">Clase Abstracta</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="py-2 px-3">Múltiple herencia</td><td className="py-2 px-3">Sí (implements A, B)</td><td className="py-2 px-3">No (solo un extends)</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">Campos de instancia</td><td className="py-2 px-3">No (solo constantes)</td><td className="py-2 px-3">Sí</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">Constructores</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Sí</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 px-3">Métodos con cuerpo</td><td className="py-2 px-3">Solo default/static</td><td className="py-2 px-3">Sí</td></tr>
              <tr><td className="py-2 px-3">Uso típico</td><td className="py-2 px-3">Definir capacidades</td><td className="py-2 px-3">Compartir código base</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 15</h2>
        <Exercise
          number={1}
          title="Sistema de notificaciones"
          description={`Crea interfaces Notificable con método enviar(String mensaje):
- EmailNotificacion implements Notificable
- SmsNotificacion implements Notificable
- PushNotificacion implements Notificable
Cada una imprime el mensaje con su canal. Crea un array Notificable[] y recórrelo.`}
          hint="interface Notificable { void enviar(String mensaje); }"
          solution={`public interface Notificable {
    void enviar(String mensaje);
}

class EmailNotificacion implements Notificable {
    public void enviar(String msg) { System.out.println("EMAIL: " + msg); }
}
class SmsNotificacion implements Notificable {
    public void enviar(String msg) { System.out.println("SMS: " + msg); }
}
class PushNotificacion implements Notificable {
    public void enviar(String msg) { System.out.println("PUSH: " + msg); }

    public static void main(String[] args) {
        Notificable[] canales = {
            new EmailNotificacion(),
            new SmsNotificacion(),
            new PushNotificacion()
        };
        for (Notificable n : canales) n.enviar("Pedido confirmado");
    }
}`}
          solutionFilename="Notificable.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-15: interfaces, default methods, funcionales"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 16</strong> — clases abstractas en profundidad.
          </p>
        </div>
      </section>
    </div>
  );
}
