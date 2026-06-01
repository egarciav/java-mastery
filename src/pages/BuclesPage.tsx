import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function BuclesPage() {
  return (
    <div>
      <DayHeader
        day={8}
        title="Bucles"
        duration="50 min"
        commitMsg="dia-8: for, while, do-while, for-each, break, continue"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a dominar las 4 formas de repetir código en Java. Además aprenderás
        cuándo usar cada una — algo que muchos cursos no explican.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Bucle for</h2>

        <ThinkSection title="¿Cuándo usar cada tipo de bucle? La guía definitiva">
          <p>
            Elegir el bucle correcto hace que tu código sea más expresivo e intención clara.
            La regla es: el bucle debe comunicar <em>cuándo</em> y <em>por qué</em> itera.
          </p>
          <p>
            <strong className="text-text">for clásico</strong>: cuando necesitas el índice o cuando el número
            de iteraciones es conocido de antemano. <code className="text-primary">for (int i = 0; i &lt; n; i++)</code>
            comunica claramente: "itero exactamente N veces". También cuando necesitas iterar de atras hacia adelante
            o con incrementos distintos de 1.
          </p>
          <p>
            <strong className="text-text">for-each (enhanced for)</strong>: cuando iteras <em>todos</em> los
            elementos de una colección o array y no necesitas el índice ni modificar la estructura.
            Es la forma preferida en Java moderno. Internamente usa un <code className="text-primary">Iterator</code>,
            por lo que funciona con cualquier clase que implemente <code className="text-primary">Iterable</code>.
          </p>
          <p>
            <strong className="text-text">while</strong>: cuando el número de iteraciones es <em>desconocido</em>
            hasta runtime. Ejemplos clásicos: leer líneas de un archivo hasta EOF, esperar una condición
            externa (conexión de red), procesar elementos de una cola hasta que esté vacía.
            La condición se evalúa <em>antes</em> de la primera iteración — puede que el cuerpo nunca se ejecute.
          </p>
          <p>
            <strong className="text-text">do-while</strong>: igual que while pero garantiza que el cuerpo se
            ejecute <em>al menos una vez</em>. El caso de uso más común es menús interactivos y validaciones
            de entrada donde debes preguntar al usuario al menos una vez. En la práctica profesional es
            el bucle menos usado — muchos equipos evitan do-while por claridad.
          </p>
          <p>
            <strong className="text-text">Streams (Java 8+)</strong>: para muchos casos donde antes usarías un bucle
            para filtrar/transformar/reducir, hoy se usa la API de Streams. Lo verás en el Día 23.
          </p>
        </ThinkSection>

        <CodeBlock filename="BucleFor.java" code={`
public class BucleFor {
    public static void main(String[] args) {
        // for clásico: for (inicialización; condición; actualización)
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteración: " + i); // 0, 1, 2, 3, 4
        }

        // Contar hacia atrás
        for (int i = 10; i >= 0; i--) {
            System.out.print(i + " "); // 10 9 8 7 6 5 4 3 2 1 0
        }

        // Incremento personalizado
        for (int i = 0; i < 100; i += 10) {
            System.out.print(i + " "); // 0 10 20 30 40 50 60 70 80 90
        }

        // Bucles anidados
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.printf("(%d,%d) ", i, j);
            }
            System.out.println();
        }
        // (1,1) (1,2) (1,3)
        // (2,1) (2,2) (2,3)
        // (3,1) (3,2) (3,3)
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">for-each (Enhanced for)</h2>
        <CodeBlock filename="ForEach.java" code={`
public class ForEach {
    public static void main(String[] args) {
        // for-each para arrays
        String[] frutas = {"Manzana", "Banana", "Cereza"};
        for (String fruta : frutas) {
            System.out.println(fruta);
        }

        // for-each para colecciones
        java.util.List<Integer> numeros = java.util.List.of(1, 2, 3, 4, 5);
        for (int num : numeros) {
            System.out.println(num);
        }

        // LIMITACIÓN: no tienes acceso al índice
        // Si necesitas el índice, usa el for clásico
    }
}
`} />
        <InfoBox type="angular">
          El for-each de Java (<code className="text-primary">for (Type item : collection)</code>) es como 
          el <code className="text-primary">for...of</code> de TypeScript/JavaScript.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">while y do-while</h2>
        <CodeBlock filename="While.java" code={`
public class While {
    public static void main(String[] args) {
        // while: verifica ANTES de ejecutar
        int contador = 0;
        while (contador < 5) {
            System.out.println("Contador: " + contador);
            contador++;
        }

        // do-while: ejecuta AL MENOS UNA VEZ, luego verifica
        int intentos = 0;
        do {
            System.out.println("Intento: " + intentos);
            intentos++;
        } while (intentos < 3);

        // Bucle infinito controlado
        int numero = 0;
        while (true) {
            if (numero >= 10) break; // salir del bucle
            numero++;
        }
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">break y continue</h2>
        <CodeBlock filename="BreakContinue.java" code={`
public class BreakContinue {
    public static void main(String[] args) {
        // break: sale del bucle completamente
        for (int i = 0; i < 10; i++) {
            if (i == 5) break;
            System.out.print(i + " "); // 0 1 2 3 4
        }

        System.out.println();

        // continue: salta a la siguiente iteración
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue; // saltar pares
            System.out.print(i + " "); // 1 3 5 7 9
        }

        System.out.println();

        // break con etiqueta (label) - para bucles anidados
        externo:
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (i == 2 && j == 2) break externo; // sale de AMBOS bucles
                System.out.printf("(%d,%d) ", i, j);
            }
        }
    }
}
`} />
        <InfoBox type="tip">
          El <code className="text-primary">break</code> con etiqueta es útil pero poco común. Si lo necesitas 
          frecuentemente, considera refactorizar tu código en métodos separados.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 8</h2>

        <Exercise
          number={1}
          title="FizzBuzz"
          description={`El clásico FizzBuzz. Crea FizzBuzz.java que imprima los números del 1 al 30:
- Si es divisible por 3, imprime "Fizz"
- Si es divisible por 5, imprime "Buzz"
- Si es divisible por ambos, imprime "FizzBuzz"
- Si no, imprime el número

Este ejercicio aparece en entrevistas técnicas reales.`}
          hint="Usa el operador módulo (%). Verifica primero divisible por ambos (15), luego por 3, luego por 5."
          solution={`public class FizzBuzz {
    public static void main(String[] args) {
        for (int i = 1; i <= 30; i++) {
            if (i % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}`}
          solutionFilename="FizzBuzz.java"
        />

        <Exercise
          number={2}
          title="Tabla de multiplicar"
          description={`Crea TablaMultiplicar.java que:
1. Reciba un número (hardcoded, ej: 7)
2. Imprima su tabla de multiplicar del 1 al 10
3. Use printf para alinear las columnas

Formato esperado:
 7 x  1 =   7
 7 x  2 =  14
 7 x 10 =  70`}
          hint="Usa un for del 1 al 10 y printf con %2d para alinear los números."
          solution={`public class TablaMultiplicar {
    public static void main(String[] args) {
        int numero = 7;
        System.out.println("Tabla del " + numero + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%2d x %2d = %3d%n", numero, i, numero * i);
        }
    }
}`}
          solutionFilename="TablaMultiplicar.java"
        />

        <Exercise
          number={3}
          title="Números primos"
          description={`Crea BuscadorPrimos.java con:
1. Un método static esPrimo(int n) que retorne true si n es primo
2. En main, imprima todos los primos entre 2 y 50

Un número es primo si solo es divisible por 1 y por sí mismo.`}
          hint="Para verificar si n es primo, recorre desde 2 hasta la raíz cuadrada de n. Si alguno lo divide exactamente, no es primo."
          solution={`public class BuscadorPrimos {
    static boolean esPrimo(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.print("Primos del 2 al 50: ");
        for (int i = 2; i <= 50; i++) {
            if (esPrimo(i)) {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }
}`}
          solutionFilename="BuscadorPrimos.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-8: bucles for, while, do-while, for-each, FizzBuzz, primos"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 9</strong>: arrays — declaración,
            iteración, multidimensionales y java.util.Arrays.
          </p>
        </div>
      </section>
    </div>
  );
}
