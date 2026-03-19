import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function InterfacesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Interfaces</h1>
      <p className="text-text-muted text-lg mb-8">Contratos que definen qué debe hacer una clase</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Definir e implementar</h2>
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
    </div>
  );
}
