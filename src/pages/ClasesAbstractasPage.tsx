import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function ClasesAbstractasPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Clases Abstractas</h1>
      <p className="text-text-muted text-lg mb-8">Clases parcialmente implementadas que sirven como base</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es una clase abstracta?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Una clase abstracta es una clase que <strong className="text-text">no se puede instanciar</strong> directamente.
          Puede tener métodos abstractos (sin implementación) y métodos concretos (con implementación).
          Las subclases <strong className="text-text">deben</strong> implementar todos los métodos abstractos.
        </p>
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
    </div>
  );
}
