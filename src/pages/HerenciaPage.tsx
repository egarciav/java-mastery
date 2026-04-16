import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function HerenciaPage() {
  return (
    <div>
      <DayHeader
        day={13}
        title="Herencia"
        duration="60 min"
        commitMsg="dia-13: herencia, extends, super, override, clases abstractas"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a aprender a reutilizar código con herencia. Una clase hija hereda todo de la padre
        y puede agregar o sobrescribir comportamiento.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">extends — Heredar de una clase</h2>

        <ThinkSection title="Herencia = 'es un'. ¿Cuándo usarla?">
          <p>
            Un <code className="text-primary">Perro</code> <strong className="text-text">es un</strong>
            <code className="text-primary"> Animal</code>. Un <code className="text-primary">Círculo</code>
            <strong className="text-text"> es una</strong> <code className="text-primary">Figura</code>.
            Si la relación "es un" tiene sentido, herencia es apropiada.
          </p>
          <p>
            Java solo permite <strong className="text-text">herencia simple</strong>: una clase extiende UNA sola clase padre.
            Para "herencia múltiple", usarás interfaces (Día 15).
          </p>
        </ThinkSection>

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 13</h2>

        <Exercise
          number={1}
          title="Jerarquía de empleados"
          description={`Crea una jerarquía:
- Empleado (clase padre): nombre, salarioBase. Método calcularSalario() retorna salarioBase.
- Gerente extends Empleado: tiene bono (double). calcularSalario() retorna salarioBase + bono.
- Desarrollador extends Empleado: tiene horasExtra (int). calcularSalario() retorna salarioBase + (horasExtra * 50).

Crea un array de Empleado[] con mezcla de Gerentes y Desarrolladores, recórrelo e imprime nombre + salario.`}
          hint="Usa super(nombre, salarioBase) en los constructores hijos. Override calcularSalario() en cada subclase."
          solution={`public class Empleado {
    protected String nombre;
    protected double salarioBase;

    public Empleado(String nombre, double salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    public double calcularSalario() { return salarioBase; }

    @Override
    public String toString() {
        return String.format("%s - Salario: $%.2f", nombre, calcularSalario());
    }
}

class Gerente extends Empleado {
    private double bono;

    public Gerente(String nombre, double salarioBase, double bono) {
        super(nombre, salarioBase);
        this.bono = bono;
    }

    @Override
    public double calcularSalario() { return salarioBase + bono; }
}

class Desarrollador extends Empleado {
    private int horasExtra;

    public Desarrollador(String nombre, double salarioBase, int horasExtra) {
        super(nombre, salarioBase);
        this.horasExtra = horasExtra;
    }

    @Override
    public double calcularSalario() { return salarioBase + (horasExtra * 50); }

    public static void main(String[] args) {
        Empleado[] equipo = {
            new Gerente("Ana", 5000, 2000),
            new Desarrollador("Carlos", 4000, 20),
            new Desarrollador("Luis", 4000, 10),
            new Gerente("María", 5500, 1500)
        };

        for (Empleado e : equipo) {
            System.out.println(e);
        }
    }
}`}
          solutionFilename="Empleado.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-13: herencia, extends, super, override, clases abstractas"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 14</strong>: polimorfismo —
            upcasting, downcasting, instanceof, pattern matching.
          </p>
        </div>
      </section>
    </div>
  );
}
