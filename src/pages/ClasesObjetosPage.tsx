import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function ClasesObjetosPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Clases y Objetos</h1>
      <p className="text-text-muted text-lg mb-8">El corazón de la Programación Orientada a Objetos en Java</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es una Clase?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Una <strong className="text-text">clase</strong> es un plano/molde que define las propiedades (campos) y 
          comportamientos (métodos) de un tipo de objeto. Un <strong className="text-text">objeto</strong> es una 
          instancia concreta de esa clase.
        </p>
        <CodeBlock filename="Persona.java" code={`
public class Persona {
    // Campos (atributos/propiedades)
    String nombre;
    int edad;
    String email;

    // Constructor: se ejecuta al crear un objeto con "new"
    public Persona(String nombre, int edad, String email) {
        this.nombre = nombre;  // "this" se refiere a la instancia actual
        this.edad = edad;
        this.email = email;
    }

    // Constructor vacío (sin argumentos)
    public Persona() {
        this.nombre = "Sin nombre";
        this.edad = 0;
        this.email = "";
    }

    // Métodos (comportamientos)
    public void saludar() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años");
    }

    public boolean esMayorDeEdad() {
        return edad >= 18;
    }

    // toString: representación en texto del objeto
    @Override
    public String toString() {
        return "Persona{nombre='" + nombre + "', edad=" + edad + "}";
    }
}
`} />
        <CodeBlock filename="Main.java" code={`
public class Main {
    public static void main(String[] args) {
        // Crear objetos con "new"
        Persona p1 = new Persona("Carlos", 25, "carlos@mail.com");
        Persona p2 = new Persona("Ana", 17, "ana@mail.com");
        Persona p3 = new Persona(); // constructor vacío

        p1.saludar();  // "Hola, soy Carlos y tengo 25 años"
        System.out.println(p2.esMayorDeEdad()); // false

        // Acceder a campos
        System.out.println(p1.nombre); // "Carlos"
        p3.nombre = "Luis";

        // toString se llama automáticamente
        System.out.println(p1); // "Persona{nombre='Carlos', edad=25}"
    }
}
`} />
        <InfoBox type="angular">
          En TypeScript/Angular defines clases igual con <code className="text-primary">class</code>. La 
          diferencia principal es que Java requiere un archivo por clase pública y el constructor se llama 
          con el nombre de la clase (no <code className="text-primary">constructor()</code>).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">this, static y final</h2>
        <CodeBlock filename="Conceptos.java" code={`
public class Contador {
    // Campo static: compartido por TODAS las instancias
    static int totalCreados = 0;

    // Campo de instancia: cada objeto tiene su propia copia
    String id;

    // Constante de clase
    static final int MAX_INSTANCIAS = 100;

    public Contador(String id) {
        this.id = id;       // "this" distingue campo de parámetro
        totalCreados++;      // incrementa el contador compartido
    }

    // Método static: se llama sin instancia
    public static int getTotal() {
        return totalCreados;
    }

    // Método de instancia: necesita un objeto
    public String getId() {
        return this.id;
    }

    public static void main(String[] args) {
        Contador c1 = new Contador("A");
        Contador c2 = new Contador("B");

        // Llamar método static: Clase.metodo()
        System.out.println(Contador.getTotal()); // 2
        System.out.println(Contador.MAX_INSTANCIAS); // 100

        // Llamar método de instancia: objeto.metodo()
        System.out.println(c1.getId()); // "A"
    }
}
`} />
        <InfoBox type="info">
          <strong>static</strong> = pertenece a la clase, no a la instancia. No necesitas crear un objeto.
          <strong> this</strong> = referencia a la instancia actual. <strong>final</strong> = constante, no se puede reasignar.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Getters, Setters y equals</h2>
        <CodeBlock filename="Producto.java" code={`
public class Producto {
    private String nombre;
    private double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        setPrecio(precio); // usar setter para validar
    }

    // Getter
    public String getNombre() { return nombre; }
    public double getPrecio() { return precio; }

    // Setter con validación
    public void setPrecio(double precio) {
        if (precio < 0) throw new IllegalArgumentException("Precio no puede ser negativo");
        this.precio = precio;
    }

    // equals: comparar objetos por contenido
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Producto otro = (Producto) obj;
        return nombre.equals(otro.nombre) && Double.compare(precio, otro.precio) == 0;
    }

    // hashCode: SIEMPRE sobreescribir junto con equals
    @Override
    public int hashCode() {
        return java.util.Objects.hash(nombre, precio);
    }
}
`} />
        <InfoBox type="warning">
          Si sobreescribes <code className="text-primary">equals()</code>, <strong>siempre</strong> sobreescribe 
          también <code className="text-primary">hashCode()</code>. Es un contrato de Java — objetos iguales 
          deben tener el mismo hashCode. Si no lo haces, las colecciones como HashMap fallarán.
        </InfoBox>
      </section>
    </div>
  );
}
