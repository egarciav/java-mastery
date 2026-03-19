import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function HerenciaPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Herencia</h1>
      <p className="text-text-muted text-lg mb-8">Reutilizar código extendiendo clases existentes</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">extends — Heredar de una clase</h2>
        <CodeBlock filename="Herencia.java" code={`
// Clase padre (superclase)
public class Animal {
    protected String nombre;
    protected int edad;

    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void comer() {
        System.out.println(nombre + " está comiendo");
    }

    public void dormir() {
        System.out.println(nombre + " está durmiendo");
    }

    @Override
    public String toString() {
        return nombre + " (edad: " + edad + ")";
    }
}

// Clase hija (subclase) — hereda TODO de Animal
public class Perro extends Animal {
    private String raza;

    public Perro(String nombre, int edad, String raza) {
        super(nombre, edad); // OBLIGATORIO: llamar al constructor padre
        this.raza = raza;
    }

    // Método PROPIO del Perro
    public void ladrar() {
        System.out.println(nombre + " dice: ¡Guau!");
    }

    // SOBRESCRIBIR (Override) un método del padre
    @Override
    public void comer() {
        System.out.println(nombre + " come croquetas de " + raza);
    }
}
`} />
        <CodeBlock filename="Main.java" code={`
public class Main {
    public static void main(String[] args) {
        Perro perro = new Perro("Rex", 5, "Pastor Alemán");

        perro.comer();   // "Rex come croquetas de Pastor Alemán" (override)
        perro.dormir();  // "Rex está durmiendo" (heredado)
        perro.ladrar();  // "Rex dice: ¡Guau!" (propio)

        // Un Perro ES un Animal (polimorfismo)
        Animal animal = new Perro("Luna", 3, "Labrador");
        animal.comer();  // "Luna come croquetas de Labrador" (usa el override)
        // animal.ladrar(); // ERROR: Animal no tiene ladrar()
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">super y @Override</h2>
        <CodeBlock filename="SuperYOverride.java" code={`
public class Gato extends Animal {
    private boolean esInterior;

    public Gato(String nombre, int edad, boolean esInterior) {
        super(nombre, edad); // super() llama al constructor padre
        this.esInterior = esInterior;
    }

    @Override
    public void comer() {
        super.comer(); // Llamar al método original del padre
        System.out.println("(y también come atún)");
    }

    // @Override es OPCIONAL pero MUY recomendado
    // Si te equivocas en el nombre del método, el compilador te avisa
    @Override
    public String toString() {
        return super.toString() + " - Gato " + (esInterior ? "interior" : "exterior");
    }
}
`} />
        <InfoBox type="warning">
          Java solo permite <strong>herencia simple</strong>: una clase solo puede extender UNA clase padre.
          No existe herencia múltiple de clases (pero sí puedes implementar múltiples interfaces).
        </InfoBox>
        <InfoBox type="angular">
          TypeScript también usa <code className="text-primary">extends</code> para herencia y tiene la misma 
          limitación de herencia simple. La diferencia es que Java tiene <code className="text-primary">@Override</code> como 
          anotación explícita y <code className="text-primary">super</code> funciona igual.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Clases Abstractas</h2>
        <CodeBlock filename="ClaseAbstracta.java" code={`
// abstract = no se puede instanciar directamente
public abstract class Figura {
    protected String color;

    public Figura(String color) {
        this.color = color;
    }

    // Método abstracto: SIN implementación, las subclases DEBEN implementarlo
    public abstract double calcularArea();
    public abstract double calcularPerimetro();

    // Método concreto: tiene implementación, se hereda normalmente
    public void mostrarInfo() {
        System.out.printf("Figura %s - Área: %.2f%n", color, calcularArea());
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
        <InfoBox type="tip">
          Usa clases abstractas cuando quieras definir un <strong>comportamiento común</strong> + obligar a 
          las subclases a implementar ciertos métodos. Es un punto medio entre una clase normal y una interfaz.
        </InfoBox>
      </section>
    </div>
  );
}
