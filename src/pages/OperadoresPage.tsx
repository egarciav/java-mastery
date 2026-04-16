import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function OperadoresPage() {
  return (
    <div>
      <DayHeader
        day={5}
        title="Operadores"
        duration="45 min"
        commitMsg="dia-5: operadores aritmeticos, logicos, comparacion, ternario"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a dominar todos los operadores de Java. La mayoría son idénticos a TypeScript,
        pero hay trampas importantes que debes conocer (especialmente con la división entera y la comparación de objetos).
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operadores Aritméticos</h2>

        <ThinkSection title="La trampa #1 de Java: la división entera">
          <p>
            En TypeScript, <code className="text-primary">10 / 3</code> da <code className="text-primary">3.333...</code>.
            En Java, <code className="text-primary">10 / 3</code> da <code className="text-primary">3</code>. Punto. Sin decimales.
          </p>
          <p>
            ¿Por qué? Porque ambos operandos son <code className="text-primary">int</code>, así que Java hace <strong className="text-text">división entera</strong>.
            Para obtener decimales, al menos uno debe ser <code className="text-primary">double</code>:
            <code className="text-primary"> 10.0 / 3</code> o <code className="text-primary">(double) 10 / 3</code>.
          </p>
        </ThinkSection>

        <CodeBlock filename="Aritmeticos.java" code={`
public class Aritmeticos {
    public static void main(String[] args) {
        int a = 10, b = 3;

        System.out.println(a + b);  // 13  Suma
        System.out.println(a - b);  // 7   Resta
        System.out.println(a * b);  // 30  Multiplicación
        System.out.println(a / b);  // 3   División ENTERA (trunca decimales)
        System.out.println(a % b);  // 1   Módulo (residuo)

        // Para obtener decimales, al menos un operando debe ser double
        System.out.println(10.0 / 3);   // 3.3333...
        System.out.println((double) a / b); // 3.3333... (cast)

        // Incremento y decremento
        int x = 5;
        x++;          // x = 6 (post-incremento)
        ++x;          // x = 7 (pre-incremento)
        x--;          // x = 6 (post-decremento)

        // Diferencia entre pre y post
        int y = 10;
        System.out.println(y++); // Imprime 10, LUEGO y se vuelve 11
        System.out.println(++y); // y se vuelve 12, LUEGO imprime 12
    }
}
`} />
        <InfoBox type="warning">
          <strong>División entera:</strong> <code className="text-primary">10 / 3 = 3</code> (no 3.33). 
          Java trunca los decimales cuando ambos operandos son enteros. Si necesitas decimales, 
          usa <code className="text-primary">double</code> o haz un cast.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operadores de Asignación</h2>
        <CodeBlock filename="Asignacion.java" code={`
public class Asignacion {
    public static void main(String[] args) {
        int x = 10;    // Asignación simple

        x += 5;  // x = x + 5  → 15
        x -= 3;  // x = x - 3  → 12
        x *= 2;  // x = x * 2  → 24
        x /= 4;  // x = x / 4  → 6
        x %= 4;  // x = x % 4  → 2

        // También existen para operaciones de bits
        // x &= 3;  x |= 3;  x ^= 3;  x <<= 2;  x >>= 1;
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operadores de Comparación</h2>
        <CodeBlock filename="Comparacion.java" code={`
public class Comparacion {
    public static void main(String[] args) {
        int a = 10, b = 20;

        System.out.println(a == b);  // false  Igual a
        System.out.println(a != b);  // true   Diferente de
        System.out.println(a > b);   // false  Mayor que
        System.out.println(a < b);   // true   Menor que
        System.out.println(a >= b);  // false  Mayor o igual
        System.out.println(a <= b);  // true   Menor o igual

        // CUIDADO con == para objetos (String, Integer, etc.)
        String s1 = new String("hola");
        String s2 = new String("hola");
        System.out.println(s1 == s2);      // false (compara REFERENCIAS)
        System.out.println(s1.equals(s2)); // true  (compara VALORES)

        // Para primitivos, == compara valores correctamente
        int x = 5, y = 5;
        System.out.println(x == y); // true (compara valores)
    }
}
`} />
        <ThinkSection title="== vs .equals() — La trampa #2 más común">
          <p>
            En TypeScript tienes <code className="text-primary">===</code> (estricto) y <code className="text-primary">==</code> (flexible).
            En Java solo existe <code className="text-primary">==</code>.
          </p>
          <p>
            Para <strong className="text-text">primitivos</strong> (int, double, boolean): <code className="text-primary">==</code> compara <em>valores</em>. Funciona perfecto.
          </p>
          <p>
            Para <strong className="text-text">objetos</strong> (String, Integer, etc.): <code className="text-primary">==</code> compara <em>referencias</em> (direcciones de memoria).
            Usa <code className="text-primary">.equals()</code> para comparar contenido. Esta es una fuente constante de bugs en código Java de principiantes.
          </p>
        </ThinkSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operadores Lógicos</h2>
        <CodeBlock filename="Logicos.java" code={`
public class Logicos {
    public static void main(String[] args) {
        boolean a = true, b = false;

        // AND: ambos deben ser true
        System.out.println(a && b);  // false
        System.out.println(a && true); // true

        // OR: al menos uno debe ser true
        System.out.println(a || b);  // true
        System.out.println(b || false); // false

        // NOT: invierte el valor
        System.out.println(!a);      // false
        System.out.println(!b);      // true

        // Short-circuit (evaluación perezosa)
        // && → si el primero es false, NO evalúa el segundo
        // || → si el primero es true, NO evalúa el segundo
        String texto = null;
        // Esto es SEGURO gracias al short-circuit:
        if (texto != null && texto.length() > 0) {
            System.out.println("Texto no vacío");
        }
        // Si texto es null, NO intenta llamar a .length()

        // Operador ternario (condicional)
        int edad = 20;
        String resultado = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
        System.out.println(resultado); // "Mayor de edad"
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">instanceof — Verificar tipo</h2>
        <CodeBlock filename="InstanceOf.java" code={`
public class InstanceOf {
    public static void main(String[] args) {
        Object texto = "Hola mundo";
        Object numero = 42;

        // instanceof verifica si un objeto es de un tipo específico
        System.out.println(texto instanceof String);  // true
        System.out.println(texto instanceof Integer); // false
        System.out.println(numero instanceof Integer); // true

        // Uso práctico: verificar antes de hacer cast
        if (texto instanceof String) {
            String s = (String) texto;
            System.out.println(s.toUpperCase()); // "HOLA MUNDO"
        }

        // Java 16+: Pattern matching con instanceof
        if (texto instanceof String s) {
            // s ya está casteado a String automáticamente
            System.out.println(s.toUpperCase()); // "HOLA MUNDO"
        }
    }
}
`} />
        <InfoBox type="tip">
          El pattern matching con <code className="text-primary">instanceof</code> (Java 16+) es una mejora 
          muy útil que elimina la necesidad de hacer cast manual después de verificar el tipo.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Precedencia de Operadores</h2>
        <p className="text-text-muted leading-relaxed mb-4">De mayor a menor prioridad:</p>
        <div className="bg-surface-light border border-border rounded-xl p-4 text-sm text-text-muted">
          <ol className="space-y-1 list-decimal list-inside">
            <li><code className="text-primary">() [] .</code> — Paréntesis, acceso</li>
            <li><code className="text-primary">++ -- ! ~</code> — Unarios</li>
            <li><code className="text-primary">* / %</code> — Multiplicación, división, módulo</li>
            <li><code className="text-primary">+ -</code> — Suma, resta</li>
            <li><code className="text-primary">{"< > <= >= instanceof"}</code> — Comparación</li>
            <li><code className="text-primary">== !=</code> — Igualdad</li>
            <li><code className="text-primary">&&</code> — AND lógico</li>
            <li><code className="text-primary">||</code> — OR lógico</li>
            <li><code className="text-primary">?:</code> — Ternario</li>
            <li><code className="text-primary">= += -= *= /=</code> — Asignación</li>
          </ol>
        </div>
        <InfoBox type="tip">
          Cuando tengas dudas sobre precedencia, <strong>usa paréntesis</strong>. 
          Hacen tu código más legible y evitan errores sutiles.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 5</h2>

        <Exercise
          number={1}
          title="Calculadora completa"
          description={`Crea MiniCalculadora.java con métodos static para las 4 operaciones básicas:
- sumar(double a, double b)
- restar(double a, double b)
- multiplicar(double a, double b)
- dividir(double a, double b) — debe verificar que b != 0 antes de dividir

En main, prueba cada operación e imprime con printf y 2 decimales.
Si b es 0 en dividir, imprime "Error: división por cero".`}
          hint="Usa un if dentro de dividir: if (b == 0) imprime error, else retorna a / b."
          solution={`public class MiniCalculadora {
    static double sumar(double a, double b) { return a + b; }
    static double restar(double a, double b) { return a - b; }
    static double multiplicar(double a, double b) { return a * b; }

    static void dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: división por cero");
        } else {
            System.out.printf("%.2f / %.2f = %.2f%n", a, b, a / b);
        }
    }

    public static void main(String[] args) {
        System.out.printf("10 + 3 = %.2f%n", sumar(10, 3));
        System.out.printf("10 - 3 = %.2f%n", restar(10, 3));
        System.out.printf("10 * 3 = %.2f%n", multiplicar(10, 3));
        dividir(10, 3);
        dividir(10, 0);
    }
}`}
          solutionFilename="MiniCalculadora.java"
        />

        <Exercise
          number={2}
          title="Clasificador con ternarios anidados"
          description={`Crea Clasificador.java con un método static clasificarNota(int nota) que use
operadores ternarios anidados para retornar:
- "Excelente" si nota >= 90
- "Bueno" si nota >= 70
- "Regular" si nota >= 50
- "Reprobado" si nota < 50

En main, prueba con las notas: 95, 75, 55, 30.`}
          hint='String resultado = (nota >= 90) ? "Excelente" : (nota >= 70) ? "Bueno" : ... ;'
          solution={`public class Clasificador {
    static String clasificarNota(int nota) {
        return (nota >= 90) ? "Excelente"
             : (nota >= 70) ? "Bueno"
             : (nota >= 50) ? "Regular"
             : "Reprobado";
    }

    public static void main(String[] args) {
        System.out.println("95: " + clasificarNota(95));
        System.out.println("75: " + clasificarNota(75));
        System.out.println("55: " + clasificarNota(55));
        System.out.println("30: " + clasificarNota(30));
    }
}`}
          solutionFilename="Clasificador.java"
        />

        <Exercise
          number={3}
          title="Validador con short-circuit"
          description={`Crea Validador.java con un método static validarUsuario(String nombre, int edad) que:
1. Use short-circuit (&&) para verificar que nombre no sea null Y no esté vacío
2. Verifique que edad sea >= 18 y <= 120
3. Retorne true solo si todas las condiciones se cumplen

Prueba con: ("Carlos", 25), (null, 25), ("", 17), ("Ana", 200)`}
          hint="if (nombre != null && !nombre.isEmpty() && edad >= 18 && edad <= 120) — el short-circuit protege contra el NullPointerException."
          solution={`public class Validador {
    static boolean validarUsuario(String nombre, int edad) {
        return nombre != null && !nombre.isEmpty()
            && edad >= 18 && edad <= 120;
    }

    public static void main(String[] args) {
        System.out.println(validarUsuario("Carlos", 25)); // true
        System.out.println(validarUsuario(null, 25));      // false (short-circuit)
        System.out.println(validarUsuario("", 17));        // false
        System.out.println(validarUsuario("Ana", 200));    // false
    }
}`}
          solutionFilename="Validador.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-5: operadores aritmeticos, logicos, comparacion, ternario, instanceof"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 6</strong>: Strings — inmutabilidad,
            métodos esenciales, StringBuilder y formateo.
          </p>
        </div>
      </section>
    </div>
  );
}
