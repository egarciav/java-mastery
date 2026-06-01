import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function ClasesAbstractasPage() {
  return (
    <div>
      <DayHeader
        day={16}
        title="Clases Abstractas"
        duration="45 min"
        commitMsg="dia-16: clases abstractas, template method pattern"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy profundizamos en clases abstractas — el punto medio entre una clase concreta y una interfaz.
        Una clase abstracta puede tener campos con estado, constructores, métodos con implementación completa,
        Y métodos abstractos que las subclases deben implementar obligatoriamente.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es una clase abstracta?</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          Una clase abstracta es una clase que <strong className="text-text">no se puede instanciar directamente</strong>
          (no puedes hacer <code className="text-primary">new Figura()</code>). Existe solo para ser heredada.
          Define un "contrato parcial": parte del código ya está implementado (métodos concretos), y parte
          queda pendiente para que las subclases lo completen (métodos abstractos marcados con <code className="text-primary">abstract</code>).
        </p>

        <ThinkSection title="Abstracta vs Interface — la guía definitiva para elegir">
          <p>
            Esta es una de las decisiones de diseño más comunes en Java. La regla mental:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Clase abstracta</strong>: cuando las subclases comparten <em>estado</em> (campos) y <em>código concreto</em> además del comportamiento abstracto. Ejemplo: todas las figuras tienen un color y un método <code className="text-primary">mostrarInfo()</code> idéntico. Solo cambia cómo se calcula el área.</li>
            <li><strong className="text-text">Interface</strong>: cuando defines una <em>capacidad</em> que clases no relacionadas pueden tener. <code className="text-primary">Serializable</code> lo puede implementar un Pato, un Documento, y un Número — sin relación entre sí.</li>
          </ul>
          <p>
            <strong className="text-text">Diferencias técnicas clave:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>Una clase solo puede extender <strong className="text-text">una</strong> clase abstracta, pero implementar <strong className="text-text">múltiples</strong> interfaces.</li>
            <li>Las clases abstractas pueden tener campos de instancia, constructores, y métodos concretos. Las interfaces (hasta Java 7) solo podían tener constantes y métodos abstractos.</li>
            <li>Desde Java 8, las interfaces tienen <code className="text-primary">default</code> methods con implementación. Esto acerca las interfaces a las clases abstractas, pero la diferencia principal persiste: las interfaces no tienen estado (no pueden tener campos de instancia).</li>
            <li>Las interfaces son ideales para el <strong className="text-text">Patrón Estrategia</strong> y la inyección de dependencias en Spring Boot.</li>
          </ul>
          <p>
            <strong className="text-text">Cuándo es difícil elegir:</strong> si tu "clase abstracta" no tiene
            ningún campo ni código concreto, probablemente debería ser una interface. Si tu interface
            necesita guardar estado entre llamadas, probablemente debería ser una clase abstracta.
          </p>
          <p>
            <strong className="text-text">Patrón Template Method</strong> (el patrón natural de las clases abstractas):
            define el <em>esqueleto</em> de un algoritmo en la clase padre con pasos abstractos que cada hijo completa.
            El padre controla el flujo, los hijos aportan los detalles. Muy común en frameworks.
          </p>
        </ThinkSection>

        <CodeBlock filename="Figura.java" code={`
public abstract class Figura {
    protected String color;

    public Figura(String color) {
        this.color = color;
    }

    // Métodos abstractos: las subclases DEBEN implementarlos
    public abstract double calcularArea();
    public abstract double calcularPerimetro();

    // Método concreto: se hereda normalmente
    public void mostrarInfo() {
        System.out.printf("Figura %s - Área: %.2f - Perímetro: %.2f%n",
            color, calcularArea(), calcularPerimetro());
    }
}

public class Circulo extends Figura {
    private double radio;

    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }

    @Override
    public double calcularPerimetro() {
        return 2 * Math.PI * radio;
    }
}

public class Rectangulo extends Figura {
    private double ancho, alto;

    public Rectangulo(String color, double ancho, double alto) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public double calcularArea() { return ancho * alto; }

    @Override
    public double calcularPerimetro() { return 2 * (ancho + alto); }
}
`} />
        <CodeBlock filename="Main.java" code={`
public class Main {
    public static void main(String[] args) {
        // Figura f = new Figura("rojo"); // ERROR: no se puede instanciar

        Figura c = new Circulo("azul", 5);
        Figura r = new Rectangulo("verde", 4, 6);

        c.mostrarInfo(); // Figura azul - Área: 78.54 - Perímetro: 31.42
        r.mostrarInfo(); // Figura verde - Área: 24.00 - Perímetro: 20.00

        // Polimorfismo con clases abstractas
        Figura[] figuras = { c, r, new Circulo("rojo", 3) };
        for (Figura f : figuras) {
            f.mostrarInfo();
        }
    }
}
`} />
        <InfoBox type="tip">
          Usa clases abstractas cuando necesites <strong>compartir código</strong> entre clases relacionadas
          y al mismo tiempo obligar a implementar ciertos métodos. Si solo necesitas definir un contrato
          sin compartir código, usa una <strong>interfaz</strong>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 16</h2>
        <Exercise
          number={1}
          title="Template Method con Bebida"
          description={`Crea una clase abstracta Bebida con un template method preparer():
1. hervir() — concreto, imprime "Hirviendo agua..."
2. agregarIngrediente() — abstracto
3. servir() — concreto, imprime "Sirviendo en taza..."

Subclases: Cafe (agrega café molido), Te (agrega bolsita de té), Chocolate (agrega cacao).
Crea las 3 y llama preparar() en cada una.`}
          hint="El método preparar() llama hervir(), agregarIngrediente(), servir() en orden. Las subclases solo implementan agregarIngrediente()."
          solution={`public abstract class Bebida {
    public final void preparar() {
        hervir();
        agregarIngrediente();
        servir();
        System.out.println();
    }
    private void hervir() { System.out.println("Hirviendo agua..."); }
    protected abstract void agregarIngrediente();
    private void servir() { System.out.println("Sirviendo en taza..."); }
}

class Cafe extends Bebida {
    protected void agregarIngrediente() { System.out.println("Agregando café molido"); }
}
class Te extends Bebida {
    protected void agregarIngrediente() { System.out.println("Agregando bolsita de té"); }
}
class Chocolate extends Bebida {
    protected void agregarIngrediente() { System.out.println("Agregando cacao en polvo"); }

    public static void main(String[] args) {
        Bebida[] bebidas = { new Cafe(), new Te(), new Chocolate() };
        for (Bebida b : bebidas) b.preparar();
    }
}`}
          solutionFilename="Bebida.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-16: clases abstractas, template method pattern"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 17</strong> — colecciones: List, Set, Map y la revolución dinámica.
          </p>
        </div>
      </section>
    </div>
  );
}
