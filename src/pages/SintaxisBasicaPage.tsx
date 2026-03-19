import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SintaxisBasicaPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Sintaxis Básica</h1>
      <p className="text-text-muted text-lg mb-8">La estructura fundamental de todo programa Java</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Tu primer programa Java</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Todo programa Java comienza con una <strong className="text-text">clase</strong> y un 
          <strong className="text-text"> método main</strong>. Vamos a desglosar cada parte:
        </p>

        <CodeBlock filename="HolaMundo.java" code={`
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
`} />

        <div className="space-y-3 mt-6">
          <div className="bg-surface-light border border-border rounded-lg p-4">
            <code className="text-primary text-sm">public class HolaMundo</code>
            <p className="text-text-muted text-sm mt-1">
              <strong className="text-text">public</strong> = modificador de acceso (visible para todos).{' '}
              <strong className="text-text">class</strong> = palabra clave para definir una clase.{' '}
              <strong className="text-text">HolaMundo</strong> = nombre de la clase (DEBE coincidir con el nombre del archivo).
            </p>
          </div>
          <div className="bg-surface-light border border-border rounded-lg p-4">
            <code className="text-primary text-sm">public static void main(String[] args)</code>
            <p className="text-text-muted text-sm mt-1">
              Este es el <strong className="text-text">punto de entrada</strong> del programa. La JVM busca exactamente 
              este método para iniciar la ejecución.{' '}
              <strong className="text-text">static</strong> = no necesita una instancia de la clase.{' '}
              <strong className="text-text">void</strong> = no retorna nada.{' '}
              <strong className="text-text">String[] args</strong> = argumentos de línea de comandos.
            </p>
          </div>
          <div className="bg-surface-light border border-border rounded-lg p-4">
            <code className="text-primary text-sm">System.out.println("¡Hola, Mundo!");</code>
            <p className="text-text-muted text-sm mt-1">
              <strong className="text-text">System</strong> = clase del sistema.{' '}
              <strong className="text-text">out</strong> = flujo de salida estándar.{' '}
              <strong className="text-text">println</strong> = imprime una línea y agrega un salto de línea al final.
              Cada instrucción DEBE terminar con <strong className="text-text">punto y coma (;)</strong>.
            </p>
          </div>
        </div>

        <InfoBox type="angular">
          En Angular/TypeScript, el punto de entrada es <code className="text-primary">main.ts</code> con{' '}
          <code className="text-primary">bootstrapApplication()</code>. En Java, el punto de entrada es 
          siempre el método <code className="text-primary">public static void main(String[] args)</code>.
          Es obligatorio y la firma debe ser exacta.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Imprimir en consola</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene varias formas de imprimir texto en la consola:
        </p>

        <CodeBlock filename="ImprimirConsola.java" code={`
public class ImprimirConsola {
    public static void main(String[] args) {
        // println - imprime y agrega salto de línea
        System.out.println("Línea 1");
        System.out.println("Línea 2");
        // Salida:
        // Línea 1
        // Línea 2

        // print - imprime SIN salto de línea
        System.out.print("Hola ");
        System.out.print("Mundo");
        System.out.println(); // Solo salto de línea
        // Salida: Hola Mundo

        // printf - impresión formateada (como en C)
        String nombre = "Carlos";
        int edad = 28;
        double salario = 45000.50;
        System.out.printf("Nombre: %s, Edad: %d, Salario: %.2f%n", nombre, edad, salario);
        // Salida: Nombre: Carlos, Edad: 28, Salario: 45000.50
        // %s = String, %d = entero, %f = decimal, %n = nueva línea

        // Concatenación con +
        System.out.println("Mi nombre es " + nombre + " y tengo " + edad + " años");
    }
}
`} />

        <InfoBox type="tip" title="Formatos comunes de printf">
          <code className="text-primary">%s</code> = String, <code className="text-primary">%d</code> = entero,{' '}
          <code className="text-primary">%f</code> = decimal, <code className="text-primary">%.2f</code> = decimal con 2 decimales,{' '}
          <code className="text-primary">%n</code> = nueva línea, <code className="text-primary">%b</code> = booleano,{' '}
          <code className="text-primary">%c</code> = carácter.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Comentarios</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Los comentarios son texto que el compilador ignora. Sirven para documentar y explicar tu código:
        </p>

        <CodeBlock filename="Comentarios.java" code={`
public class Comentarios {
    public static void main(String[] args) {
        // Esto es un comentario de una línea
        // Se usa para explicaciones cortas

        /*
         * Esto es un comentario de múltiples líneas.
         * Se usa para explicaciones más largas.
         * Puede abarcar tantas líneas como necesites.
         */

        /**
         * Esto es un comentario Javadoc.
         * Se usa para documentar clases, métodos y campos.
         * Las herramientas de documentación lo procesan automáticamente.
         *
         * @param args argumentos de línea de comandos
         * @return void no retorna nada
         */

        System.out.println("Los comentarios no se ejecutan");
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Convenciones de nombres</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene convenciones estrictas de nomenclatura. No son obligatorias, pero 
          <strong className="text-text"> todo el ecosistema Java las sigue</strong>:
        </p>

        <CodeBlock filename="Convenciones.java" code={`
// CLASES: PascalCase (primera letra de cada palabra en mayúscula)
public class MiClaseEjemplo { }
public class CalculadoraDeImpuestos { }

// MÉTODOS: camelCase (primera palabra en minúscula, luego mayúscula)
public void calcularTotal() { }
public String obtenerNombre() { }

// VARIABLES: camelCase
int edadDelUsuario = 25;
String nombreCompleto = "Juan Pérez";

// CONSTANTES: SNAKE_CASE_MAYÚSCULAS
static final int EDAD_MINIMA = 18;
static final String NOMBRE_APP = "MiApp";
static final double PI = 3.14159;

// PAQUETES: todo en minúsculas, separado por puntos
// package com.miempresa.miproyecto.modelos;

// INTERFACES: PascalCase (a veces con prefijo "I" pero NO es la convención Java)
// public interface Serializable { }
// public interface Comparable<T> { }
`} />

        <InfoBox type="angular">
          TypeScript usa las mismas convenciones: PascalCase para clases/interfaces, camelCase para 
          variables/métodos. La diferencia principal es que en Angular las interfaces a veces usan prefijo "I" 
          (como <code className="text-primary">IUser</code>), pero en Java <strong>NO se usa ese prefijo</strong>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Paquetes (packages)</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Los paquetes son la forma de organizar clases en Java. Son como carpetas lógicas para tu código:
        </p>

        <CodeBlock filename="com/miempresa/modelo/Usuario.java" code={`
// La declaración de paquete SIEMPRE va en la primera línea
package com.miempresa.modelo;

// Los imports van después del paquete
import java.util.List;
import java.util.ArrayList;

public class Usuario {
    private String nombre;
    private int edad;

    // Constructor, getters, setters...
}
`} />

        <CodeBlock filename="com/miempresa/servicio/UsuarioServicio.java" code={`
package com.miempresa.servicio;

// Importar una clase específica de otro paquete
import com.miempresa.modelo.Usuario;

// Importar TODAS las clases de un paquete (no recomendado)
// import com.miempresa.modelo.*;

public class UsuarioServicio {
    public Usuario buscarPorId(int id) {
        // Lógica para buscar usuario
        return new Usuario();
    }
}
`} />

        <InfoBox type="angular">
          Los paquetes en Java son como los <code className="text-primary">import</code> de módulos en TypeScript.
          En Angular organizas con carpetas y archivos, en Java con paquetes. La convención es usar el dominio 
          invertido: <code className="text-primary">com.miempresa.proyecto.modulo</code>.
        </InfoBox>

        <InfoBox type="warning">
          El paquete <strong>debe coincidir con la estructura de carpetas</strong>. Si tu paquete es{' '}
          <code className="text-primary">com.miempresa.modelo</code>, el archivo debe estar en la carpeta{' '}
          <code className="text-primary">com/miempresa/modelo/</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Punto y coma, llaves y bloques</h2>

        <CodeBlock filename="SintaxisGeneral.java" code={`
public class SintaxisGeneral {
    public static void main(String[] args) {
        // Cada instrucción TERMINA con punto y coma ;
        int x = 10;
        System.out.println(x);

        // Los bloques de código se delimitan con llaves { }
        if (x > 5) {
            System.out.println("x es mayor que 5");
        }

        // Puedes tener múltiples instrucciones en una línea (NO recomendado)
        int a = 1; int b = 2; int c = a + b;

        // Las llaves definen el alcance (scope) de las variables
        {
            int variableLocal = 42;
            System.out.println(variableLocal); // OK
        }
        // System.out.println(variableLocal); // ERROR: no existe aquí

        // Java es SENSIBLE a mayúsculas/minúsculas (case-sensitive)
        int miVariable = 1;
        // int MiVariable = 2; // Esta es OTRA variable diferente
    }
}
`} />

        <InfoBox type="warning">
          Java es <strong>case-sensitive</strong>. <code className="text-primary">miVariable</code>,{' '}
          <code className="text-primary">MiVariable</code> y <code className="text-primary">MIVARIABLE</code>{' '}
          son tres identificadores completamente diferentes.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Palabras reservadas</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java tiene 50+ palabras reservadas que NO puedes usar como nombres de variables, clases o métodos:
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
              <span key={word} className="bg-code-bg text-primary text-xs font-mono px-2 py-1 rounded">
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
