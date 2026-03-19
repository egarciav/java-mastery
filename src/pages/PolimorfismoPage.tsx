import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function PolimorfismoPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Polimorfismo</h1>
      <p className="text-text-muted text-lg mb-8">Un mismo método, diferentes comportamientos según el objeto</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es el Polimorfismo?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          <strong className="text-text">Polimorfismo</strong> significa "muchas formas". En Java, permite que una 
          variable de tipo padre pueda referirse a cualquier objeto hijo, y el método ejecutado será el de la 
          clase real del objeto (no el de la variable).
        </p>
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
    </div>
  );
}
