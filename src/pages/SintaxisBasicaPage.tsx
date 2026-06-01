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
            Todo — absolutamente todo — debe estar dentro de una clase. ¿Por qué? Porque Java fue diseñado
            como un lenguaje <strong className="text-text">puro de orientación a objetos</strong> desde su concepción.
            La idea central es que el mundo real se modela con objetos, y cada objeto pertenece a una clase.
          </p>
          <p>
            <strong className="text-text">La consecuencia práctica:</strong> incluso un programa que solo suma dos números
            necesita una clase. Parece verboso al inicio, pero esto tiene ventajas reales:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>El compilador sabe exactamente dónde buscar cada elemento del programa.</li>
            <li>La organización en clases obliga a pensar en <em>responsabilidades</em>: ¿qué hace esta clase? ¿a qué pertenece este método?</li>
            <li>En proyectos con cientos de archivos, esa estructura hace la diferencia entre código mantenible y código caos.</li>
          </ul>
          <p>
            Nota: Java 21 introduce <code className="text-primary">void main()</code> sin la firma completa (en preview),
            pero en la práctica profesional siempre escribirás la firma completa.
            <code className="text-primary"> public static void main(String[] args)</code> será tu firma por los próximos años.
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
            Es lo que usarás el 90% del tiempo al principio. La concatenación con <code className="text-primary">+</code>
            funciona con cualquier tipo: Java convierte automáticamente números y booleanos a String cuando
            están junto a un String en una concatenación.
          </p>
          <p>
            <strong className="text-text">printf</strong>: Cuando necesitas control de formato preciso — decimales
            con exactamente 2 posiciones (<code className="text-primary">%.2f</code>), alinear columnas en una tabla,
            rellenar con espacios o ceros. Es como el template literal de TypeScript pero más potente para números.
            La <code className="text-primary">f</code> en <code className="text-primary">printf</code> viene de <em>formatted</em>.
          </p>
          <p>
            <strong className="text-text">String.format()</strong>: Igual que printf pero retorna el String formateado
            en lugar de imprimirlo. Útil cuando quieres construir un String para guardarlo en una variable:
            <code className="text-primary"> String msg = String.format("Hola %s", nombre);</code>
          </p>
          <p>
            <strong className="text-text">Nota:</strong> <code className="text-primary">%n</code> es el salto de línea
            dependiente del sistema operativo (usa <code className="text-primary">\r\n</code> en Windows y
            <code className="text-primary"> \n</code> en Unix/Mac). Siempre preferírelo sobre <code className="text-primary">\n</code>
            en printf para máxima portabilidad.
          </p>
        </ThinkSection>

        <InfoBox type="tip" title="Formatos completos de printf">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-semibold text-text mb-1">Tipos básicos</p>
              <ul className="space-y-1">
                <li><code className="text-primary">%s</code> — String</li>
                <li><code className="text-primary">%d</code> — entero (int, long)</li>
                <li><code className="text-primary">%f</code> — decimal (float, double)</li>
                <li><code className="text-primary">%.2f</code> — decimal con 2 posiciones</li>
                <li><code className="text-primary">%b</code> — booleano</li>
                <li><code className="text-primary">%c</code> — caracter</li>
                <li><code className="text-primary">%n</code> — nueva línea (OS-independiente)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-text mb-1">Formato avanzado</p>
              <ul className="space-y-1">
                <li><code className="text-primary">%10s</code> — alineado a la derecha en 10 chars</li>
                <li><code className="text-primary">%-10s</code> — alineado a la izquierda en 10 chars</li>
                <li><code className="text-primary">%05d</code> — entero con ceros: 00042</li>
                <li><code className="text-primary">%e</code> — notación científica: 1.23e+05</li>
                <li><code className="text-primary">%X</code> — hexadecimal: FF</li>
                <li><code className="text-primary">%%</code> — el carácter %</li>
              </ul>
            </div>
          </div>
        </InfoBox>

      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Comentarios — Documenta tu pensamiento</h2>

        <CodeBlock filename="Comentarios.java" code={`
public class Comentarios {
    // Comentario de una línea — para explicaciones cortas
    // Atajo IntelliJ: Ctrl+/ (selecciona líneas y presiona Ctrl+/)

    /*
     * Comentario de múltiples líneas.
     * Útil para desactivar un bloque de código
     * o para explicaciones que requieren varios párrafos.
     */

    /**
     * Comentario Javadoc — documentación oficial del método.
     * IntelliJ muestra esto como tooltip cuando el código se importa.
     * La herramienta javadoc lo convierte en HTML navegable.
     *
     * @param nombre el nombre del usuario a saludar
     * @return cadena con el saludo personalizado
     * @throws IllegalArgumentException si nombre es null
     */
    public static String saludar(String nombre) {
        if (nombre == null) throw new IllegalArgumentException("nombre no puede ser null");
        return "Hola, " + nombre;
    }

    public static void main(String[] args) {
        System.out.println(saludar("Carlos"));
    }
}
`} />

        <ThinkSection title="¿Cuándo escribir comentarios y cuándo no?">
          <p>
            <strong className="text-text">El error más común:</strong> comentar <em>qué</em> hace el código
            en lugar de <em>por qué</em> lo hace. Si el código es claro, el comentario sobra.
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Sí comenta:</strong> decisiones no obvias, workarounds de bugs externos, reglas de negocio complejas, fórmulas matemáticas.</li>
            <li><strong className="text-text">No comentes:</strong> <code className="text-primary">i++; // incrementa i</code> — eso es ruido, no ayuda.</li>
            <li><strong className="text-text">Javadoc SIEMPRE</strong> en APIs públicas: métodos y clases que otros van a usar necesitan documentación formal.</li>
          </ul>
          <p>
            El código bien escrito se lee como prosa. Los nombres de variables y métodos descriptivos
            valen más que cien comentarios. <code className="text-primary">calcularImpuesto(precio)</code> no
            necesita comentario. <code className="text-primary">calc(p)</code> sí.
          </p>
        </ThinkSection>

        <InfoBox type="info">
          En IntelliJ, escribe <code className="text-primary">/**</code> justo arriba de un método y presiona Enter.
          IntelliJ genera automáticamente la estructura del Javadoc con los <code className="text-primary">@param</code> y
          <code className="text-primary"> @return</code> según la firma del método. También puedes generar
          el HTML de la documentación completa con <code className="text-primary">Tools → Generate JavaDoc</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Convenciones de nombres</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene convenciones estrictas. No son obligatorias por el compilador, pero
          <strong className="text-text"> todo el ecosistema Java las sigue</strong> — desde la biblioteca
          estándar hasta Spring Boot. Romperlas no da error, pero hace que tu código se vea amateur
          para cualquier desarrollador Java que lo lea. Adoptar estas convenciones desde el primer día
          te entrena para trabajar en cualquier equipo.
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

        <ThinkSection title="¿Por qué los paquetes usan el dominio invertido?">
          <p>
            Un paquete es la <strong className="text-text">dirección postal</strong> de tu clase. Así como una dirección
            tiene país → ciudad → calle → número, un paquete tiene dominio → empresa → proyecto → módulo.
          </p>
          <p>
            <strong className="text-text">¿Por qué dominio invertido?</strong> Para garantizar unicidad global.
            Si dos empresas distintas crean una clase llamada <code className="text-primary">Usuario</code>, habría
            conflicto de nombres. Con dominios invertidos:
            <code className="text-primary"> com.google.Usuario</code> vs <code className="text-primary">com.miempresa.Usuario</code>
            son inequívocamente diferentes. Los dominios de internet son únicos por definición, así que
            invertirlos garantiza que tus paquetes nunca colisionarán con los de nadie más.
          </p>
          <p>
            <strong className="text-text">Estructura típica de paquetes en Spring Boot:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">com.empresa.proyecto.controller</code> — controladores REST</li>
            <li><code className="text-primary">com.empresa.proyecto.service</code> — lógica de negocio</li>
            <li><code className="text-primary">com.empresa.proyecto.repository</code> — acceso a datos</li>
            <li><code className="text-primary">com.empresa.proyecto.model</code> — entidades y DTOs</li>
          </ul>
          <p>
            La carpeta física <strong className="text-text">debe coincidir exactamente</strong> con el paquete.
            IntelliJ crea esa estructura de carpetas automáticamente cuando declaras el paquete.
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
