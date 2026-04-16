import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SintaxisBasicaPage() {
  return (
    <div>
      <DayHeader
        day={2}
        title="Sintaxis Básica"
        duration="50 min"
        commitMsg="dia-2: sintaxis basica, comentarios, convenciones, paquetes"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a dominar la estructura de un programa Java: cómo imprimir texto de varias formas,
        cómo documentar tu código, y las convenciones que todo desarrollador Java sigue.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">La anatomía de un programa Java</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Ayer escribiste tu primer HolaMundo. Hoy vamos a profundizar en cada pieza y aprender
          nuevas formas de trabajar con la consola.
        </p>

        <CodeBlock filename="Anatomia.java" code={`
// 1. Declaración de paquete (opcional en programas simples)
// package com.tuempresa.proyecto;

// 2. Imports (clases que necesitas de otros paquetes)
// import java.util.Scanner;

// 3. Declaración de clase (obligatoria — todo va dentro de una clase)
public class Anatomia {

    // 4. Método main (punto de entrada del programa)
    public static void main(String[] args) {
        // 5. Tu código va aquí
        System.out.println("¡Estructura completa!");
    }
}
`} />

        <ThinkSection title="¿Por qué Java obliga a poner todo dentro de una clase?">
          <p>
            En TypeScript puedes escribir una función suelta en un archivo. En Java, <strong className="text-text">no existe código suelto</strong>.
            Todo debe estar dentro de una clase. ¿Por qué? Porque Java fue diseñado como un lenguaje
            100% orientado a objetos. Incluso tu programa más simple es una clase.
          </p>
          <p>
            Piénsalo como una regla de organización: así como Angular te obliga a poner lógica en
            componentes, Java te obliga a poner lógica en clases. Es más verboso al inicio,
            pero a gran escala mantiene el código organizado.
          </p>
        </ThinkSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Imprimir en consola — Las 3 formas</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Imprimir en consola es tu herramienta #1 de debugging. Aprende las tres formas y cuándo usar cada una:
        </p>

        <CodeBlock filename="FormasDeImprimir.java" code={`
public class FormasDeImprimir {
    public static void main(String[] args) {
        // === println: imprime + salto de línea ===
        System.out.println("Línea 1");
        System.out.println("Línea 2");
        // Salida:
        // Línea 1
        // Línea 2

        // === print: imprime SIN salto de línea ===
        System.out.print("Hola ");
        System.out.print("Mundo");
        System.out.println(); // Solo salto de línea
        // Salida: Hola Mundo

        // === printf: impresión formateada ===
        String nombre = "Carlos";
        int edad = 28;
        double salario = 45000.50;
        System.out.printf("Nombre: %s, Edad: %d, Salario: $%.2f%n",
                          nombre, edad, salario);
        // Salida: Nombre: Carlos, Edad: 28, Salario: $45000.50

        // === Concatenación con + ===
        System.out.println("Me llamo " + nombre + " y tengo " + edad + " años");
    }
}
`} />

        <ThinkSection title="¿Cuándo uso printf vs println con concatenación?">
          <p>
            <strong className="text-text">println + concatenación</strong>: Para mensajes simples y debugging rápido.
            Es lo que usarás el 90% del tiempo al principio.
          </p>
          <p>
            <strong className="text-text">printf</strong>: Cuando necesitas control de formato — como mostrar
            decimales con exactamente 2 posiciones (<code className="text-primary">%.2f</code>), alinear columnas,
            o construir salidas tabulares. Es como el template literal de TypeScript pero más potente para números.
          </p>
        </ThinkSection>

        <InfoBox type="tip" title="Formatos comunes de printf">
          <code className="text-primary">%s</code> = String, <code className="text-primary">%d</code> = entero,{' '}
          <code className="text-primary">%f</code> = decimal, <code className="text-primary">%.2f</code> = 2 decimales,{' '}
          <code className="text-primary">%n</code> = nueva línea, <code className="text-primary">%b</code> = booleano,{' '}
          <code className="text-primary">%10s</code> = alinear a 10 caracteres.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Comentarios — Documenta tu pensamiento</h2>

        <CodeBlock filename="Comentarios.java" code={`
public class Comentarios {
    // Comentario de una línea — para explicaciones cortas
    // Atajo IntelliJ: Ctrl+/ (selecciona líneas y presiona Ctrl+/)

    /*
     * Comentario de múltiples líneas
     * Para explicaciones más largas que necesitan
     * varias líneas de texto.
     */

    /**
     * Comentario Javadoc — para documentar clases y métodos.
     * IntelliJ lo usa para mostrarte tooltips de ayuda.
     *
     * @param nombre el nombre del usuario
     * @return saludo personalizado
     */
    public static String saludar(String nombre) {
        return "Hola, " + nombre;
    }

    public static void main(String[] args) {
        System.out.println(saludar("Carlos"));
    }
}
`} />

        <InfoBox type="info">
          En IntelliJ, escribe <code className="text-primary">/**</code> justo arriba de un método y presiona Enter.
          IntelliJ genera automáticamente la estructura del Javadoc con los @param y @return.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Convenciones de nombres</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene convenciones estrictas. No son obligatorias, pero <strong className="text-text">todo el ecosistema Java las sigue</strong>.
          Romperlas es como escribir JavaScript sin camelCase — funciona, pero nadie lo hace.
        </p>

        <CodeBlock filename="Convenciones.java" code={`
// CLASES: PascalCase
public class MiClaseEjemplo { }
public class CalculadoraDeImpuestos { }

// MÉTODOS y VARIABLES: camelCase
public void calcularTotal() { }
int edadDelUsuario = 25;
String nombreCompleto = "Juan Pérez";

// CONSTANTES: SNAKE_CASE_MAYÚSCULAS
static final int EDAD_MINIMA = 18;
static final String NOMBRE_APP = "MiApp";

// PAQUETES: todo en minúsculas
// package com.miempresa.miproyecto.modelos;

// INTERFACES: PascalCase (sin prefijo "I")
// public interface Serializable { }
`} />

        <InfoBox type="angular">
          TypeScript usa las mismas convenciones: PascalCase para clases, camelCase para variables.
          Diferencia clave: en Angular a veces pones prefijo "I" en interfaces
          (<code className="text-primary">IUser</code>). En Java <strong>nunca</strong> se hace eso.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Paquetes — Organizar tu código</h2>

        <ThinkSection title="¿Cómo pensar en los paquetes?">
          <p>
            Un paquete es la <strong className="text-text">dirección postal</strong> de tu clase. Así como una dirección
            tiene país → ciudad → calle → número, un paquete tiene dominio → empresa → proyecto → módulo.
          </p>
          <p>
            La convención es usar tu dominio invertido: si tu sitio es <code className="text-primary">miempresa.com</code>,
            tu paquete base es <code className="text-primary">com.miempresa</code>. Y la carpeta física
            <strong className="text-text"> debe coincidir</strong> con el paquete.
          </p>
        </ThinkSection>

        <CodeBlock filename="com/miempresa/modelo/Usuario.java" code={`
package com.miempresa.modelo;

import java.util.List;

public class Usuario {
    private String nombre;
    private int edad;
}
`} />

        <CodeBlock filename="com/miempresa/servicio/UsuarioServicio.java" code={`
package com.miempresa.servicio;

import com.miempresa.modelo.Usuario;

public class UsuarioServicio {
    public Usuario buscarPorId(int id) {
        return new Usuario();
    }
}
`} />

        <InfoBox type="warning">
          El paquete <strong>debe coincidir con la estructura de carpetas</strong>. Si tu paquete es{' '}
          <code className="text-primary">com.miempresa.modelo</code>, el archivo debe estar en{' '}
          <code className="text-primary">com/miempresa/modelo/</code>. IntelliJ crea las carpetas automáticamente.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Punto y coma, llaves y case-sensitive</h2>

        <CodeBlock filename="ReglasBasicas.java" code={`
public class ReglasBasicas {
    public static void main(String[] args) {
        // Cada instrucción TERMINA con punto y coma ;
        int x = 10;
        System.out.println(x);

        // Los bloques se delimitan con llaves { }
        if (x > 5) {
            System.out.println("x es mayor que 5");
        }

        // Las llaves crean un scope (alcance)
        {
            int variableLocal = 42;
            System.out.println(variableLocal); // OK
        }
        // System.out.println(variableLocal); // ERROR: no existe fuera del bloque

        // Java es CASE-SENSITIVE
        int miVariable = 1;
        int MiVariable = 2; // ¡Es OTRA variable diferente!
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Palabras reservadas</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene 50+ palabras que NO puedes usar como nombres. No necesitas memorizarlas — IntelliJ
          te marcará error si intentas usar una. Pero conócelas de vista:
        </p>

        <div className="bg-surface-light border border-border rounded-xl p-4">
          <div className="flex flex-wrap gap-2">
            {['abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const',
              'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final', 'finally', 'float',
              'for', 'goto', 'if', 'implements', 'import', 'instanceof', 'int', 'interface', 'long', 'native',
              'new', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
              'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'try', 'void',
              'volatile', 'while', 'var', 'record', 'sealed', 'permits', 'yield'
            ].map(word => (
              <span key={word} className="bg-[#282c34] text-primary text-xs font-mono px-2 py-1 rounded">
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 2</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Escríbelos tú mismo. No copies y pegues — tu memoria muscular importa.
        </p>

        <Exercise
          number={1}
          title="Tarjeta de presentación con printf"
          description={`Crea TarjetaPresentacion.java que use printf para imprimir:
"Nombre: [tu nombre]"
"Edad: [tu edad] años"
"Experiencia: [X.X] años en programación"

El último valor debe mostrarse con exactamente 1 decimal.`}
          hint="Usa %s para strings, %d para enteros, y %.1f para un decimal con 1 posición."
          solution={`public class TarjetaPresentacion {
    public static void main(String[] args) {
        String nombre = "Carlos García";
        int edad = 28;
        double experiencia = 3.5;

        System.out.printf("Nombre: %s%n", nombre);
        System.out.printf("Edad: %d años%n", edad);
        System.out.printf("Experiencia: %.1f años en programación%n", experiencia);
    }
}`}
          solutionFilename="TarjetaPresentacion.java"
        />

        <Exercise
          number={2}
          title="Comentarios y Javadoc"
          description={`Crea Calculadora.java con:
1. Un comentario Javadoc para la clase
2. Un método static "sumar" que reciba dos int y retorne su suma
3. Un comentario Javadoc para el método con @param y @return
4. En el main, llama al método e imprime el resultado

Tip: En IntelliJ, escribe /** arriba del método y presiona Enter.`}
          hint='El método se declara como: static int sumar(int a, int b) { return a + b; }'
          solution={`/**
 * Calculadora básica para operaciones aritméticas.
 * Día 2 del curso Java Mastery.
 */
public class Calculadora {

    /**
     * Suma dos números enteros.
     *
     * @param a primer número
     * @param b segundo número
     * @return la suma de a + b
     */
    public static int sumar(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int resultado = sumar(15, 27);
        System.out.println("15 + 27 = " + resultado);
    }
}`}
          solutionFilename="Calculadora.java"
        />

        <Exercise
          number={3}
          title="Tabla formateada con printf"
          description={`Crea TablaProductos.java que imprima una tabla con 3 productos:
- Cada fila: nombre (alineado a 15 caracteres), precio con 2 decimales, cantidad
- Incluye una fila de encabezado

Ejemplo de salida:
Producto         Precio    Cant
Laptop           $1299.99     5
Mouse            $29.50      50
Teclado          $89.00      20`}
          hint="Usa %-15s para alinear texto a la izquierda en 15 caracteres, %8.2f para precio, y %5d para cantidad."
          solution={`public class TablaProductos {
    public static void main(String[] args) {
        System.out.printf("%-15s %8s %5s%n", "Producto", "Precio", "Cant");
        System.out.printf("%-15s $%7.2f %5d%n", "Laptop", 1299.99, 5);
        System.out.printf("%-15s $%7.2f %5d%n", "Mouse", 29.50, 50);
        System.out.printf("%-15s $%7.2f %5d%n", "Teclado", 89.00, 20);
    }
}`}
          solutionFilename="TablaProductos.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-2: sintaxis basica, printf, comentarios, convenciones"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 3</strong>: tipos de datos primitivos,
            casting, y la diferencia entre primitivos y objetos.
          </p>
        </div>
      </section>
    </div>
  );
}
