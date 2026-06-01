import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function ClasesObjetosPage() {
  return (
    <div>
      <DayHeader
        day={11}
        title="Clases y Objetos"
        duration="60 min"
        commitMsg="dia-11: clases, objetos, constructores, this, static, equals"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy entras al corazón de Java: la Programación Orientada a Objetos. Una clase es un plano,
        un objeto es una instancia concreta. Dominar esto cambia tu forma de pensar en código.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es una Clase?</h2>

        <ThinkSection title="Clase = plano. Objeto = instancia concreta. ¿Cómo pensar en esto?">
          <p>
            Una <strong className="text-text">clase</strong> es como el molde de una galleta o el plano de una casa:
            define la estructura y el comportamiento, pero no es ninguna casa concreta. Un
            <strong className="text-text"> objeto</strong> es una instancia creada a partir de ese molde —
            <em>una</em> casa específica con <em>su</em> dirección y <em>sus</em> inquilinos.
          </p>
          <p>
            En TypeScript/Angular ya usas clases. En Java la idea es la misma: <strong className="text-text">campos</strong>
            (el estado del objeto: propiedades, atributos) + <strong className="text-text">métodos</strong>
            (el comportamiento: lo que puede hacer). Diferencias clave con TypeScript:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>El constructor en Java se llama igual que la clase (<code className="text-primary">Persona(...)</code>), no con la keyword <code className="text-primary">constructor</code>.</li>
            <li>Una clase pública Java <strong className="text-text">debe</strong> estar en un archivo con el mismo nombre. <code className="text-primary">Persona</code> → <code className="text-primary">Persona.java</code>. El compilador exige esto.</li>
            <li>Puedes tener múltiples constructores con diferentes parámetros (overloading de constructores).</li>
            <li>Todos los objetos Java heredan implícitamente de <code className="text-primary">Object</code>, igual que en TypeScript todo hereda de <code className="text-primary">Object</code>.</li>
          </ul>
          <p>
            <strong className="text-text">Acceso a memoria:</strong> cuando haces <code className="text-primary">Persona p = new Persona()</code>,
            la variable <code className="text-primary">p</code> está en el stack y contiene la <em>dirección</em> del objeto.
            El objeto en sí (sus campos) está en el heap. Cuando el método termina, la variable en el stack
            desaparece pero el objeto en el heap persiste hasta que el GC lo recolecta.
          </p>
        </ThinkSection>

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
          <strong>static</strong>: pertenece a la clase, no a una instancia. Existe desde que la clase
          se carga, sin necesitar un <code className="text-primary">new</code>. Se accede como
          <code className="text-primary"> Clase.campo</code> o <code className="text-primary">Clase.metodo()</code>.
          <br/><br/>
          <strong>this</strong>: referencia a la instancia actual del objeto. Lo usas cuando hay
          ambigüedad entre un campo y un parámetro con el mismo nombre
          (<code className="text-primary">this.nombre = nombre</code>), o cuando quieres llamar a otro
          constructor de la misma clase (<code className="text-primary">this()</code>).
          <br/><br/>
          <strong>final en campo de instancia</strong>: un campo <code className="text-primary">final</code> debe
          inicializarse en el constructor. Una vez asignado, no puede cambiar. Esto crea objetos
          inmutables (como los Records de Java 16+).
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
          El contrato <code className="text-primary">equals()</code> / <code className="text-primary">hashCode()</code>
          es fundamental en Java:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Si <code className="text-primary">a.equals(b)</code> es <code className="text-primary">true</code>, entonces <code className="text-primary">a.hashCode() == b.hashCode()</code> debe ser <code className="text-primary">true</code> también.</li>
            <li>Si rompes este contrato (overrides equals pero no hashCode), las colecciones como <code className="text-primary">HashMap</code> y <code className="text-primary">HashSet</code> funcionarán incorrectamente: objetos iguales pueden aparecer duplicados o no encontrarse.</li>
            <li>IntelliJ puede generar ambos automáticamente: <code className="text-primary">Alt+Insert → equals() and hashCode()</code>.</li>
            <li>Alternativa moderna: usa Records (Java 16+) que generan equals/hashCode/toString automáticamente.</li>
          </ul>
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 11</h2>

        <Exercise
          number={1}
          title="Clase CuentaBancaria"
          description={`Crea CuentaBancaria.java con:
- Campos: titular (String), saldo (double), numeroCuenta (String)
- Constructor con los 3 parámetros
- Métodos: depositar(double monto), retirar(double monto), getSaldo()
- depositar debe rechazar montos negativos
- retirar debe rechazar si no hay saldo suficiente
- toString que muestre la info de la cuenta

Crea un Main.java que pruebe depositar, retirar e imprimir la cuenta.`}
          hint="En retirar: if (monto > saldo) { System.out.println('Saldo insuficiente'); return; }"
          solution={`public class CuentaBancaria {
    private String titular;
    private double saldo;
    private String numeroCuenta;

    public CuentaBancaria(String titular, double saldo, String numeroCuenta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroCuenta = numeroCuenta;
    }

    public void depositar(double monto) {
        if (monto <= 0) {
            System.out.println("Error: monto debe ser positivo");
            return;
        }
        saldo += monto;
        System.out.printf("Depositado: $%.2f. Nuevo saldo: $%.2f%n", monto, saldo);
    }

    public void retirar(double monto) {
        if (monto <= 0) {
            System.out.println("Error: monto debe ser positivo");
            return;
        }
        if (monto > saldo) {
            System.out.println("Error: saldo insuficiente");
            return;
        }
        saldo -= monto;
        System.out.printf("Retirado: $%.2f. Nuevo saldo: $%.2f%n", monto, saldo);
    }

    public double getSaldo() { return saldo; }

    @Override
    public String toString() {
        return String.format("Cuenta[%s] %s - Saldo: $%.2f",
                             numeroCuenta, titular, saldo);
    }

    public static void main(String[] args) {
        CuentaBancaria cuenta = new CuentaBancaria("Carlos", 1000, "001-234");
        System.out.println(cuenta);
        cuenta.depositar(500);
        cuenta.retirar(200);
        cuenta.retirar(5000);
        System.out.println(cuenta);
    }
}`}
          solutionFilename="CuentaBancaria.java"
        />

        <Exercise
          number={2}
          title="Contador con static"
          description={`Crea Estudiante.java con:
- Campo static: totalEstudiantes (int)
- Campos de instancia: nombre (String), matricula (String)
- Constructor que auto-incremente totalEstudiantes y genere la matrícula como "EST-" + totalEstudiantes
- Método static getTotalEstudiantes()
- toString con nombre y matrícula

Crea 3 estudiantes y verifica que el contador y las matrículas son correctas.`}
          hint='En el constructor: totalEstudiantes++; this.matricula = "EST-" + totalEstudiantes;'
          solution={`public class Estudiante {
    private static int totalEstudiantes = 0;
    private String nombre;
    private String matricula;

    public Estudiante(String nombre) {
        totalEstudiantes++;
        this.nombre = nombre;
        this.matricula = "EST-" + totalEstudiantes;
    }

    public static int getTotalEstudiantes() {
        return totalEstudiantes;
    }

    @Override
    public String toString() {
        return matricula + ": " + nombre;
    }

    public static void main(String[] args) {
        Estudiante e1 = new Estudiante("Carlos");
        Estudiante e2 = new Estudiante("Ana");
        Estudiante e3 = new Estudiante("Luis");

        System.out.println(e1);
        System.out.println(e2);
        System.out.println(e3);
        System.out.println("Total: " + Estudiante.getTotalEstudiantes());
    }
}`}
          solutionFilename="Estudiante.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-11: clases, objetos, constructores, this, static, getters, equals"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 12</strong>: encapsulamiento —
            modificadores de acceso, validación en setters.
          </p>
        </div>
      </section>
    </div>
  );
}
