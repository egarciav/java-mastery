import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function OperadoresPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Operadores</h1>
      <p className="text-text-muted text-lg mb-8">Todos los operadores de Java explicados con ejemplos</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operadores Aritméticos</h2>
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
        <InfoBox type="angular">
          En TypeScript tienes <code className="text-primary">===</code> (estricto) y <code className="text-primary">==</code> (flexible).
          En Java solo existe <code className="text-primary">==</code> y siempre es estricto para primitivos. Para objetos, 
          usa <code className="text-primary">.equals()</code> para comparar contenido.
        </InfoBox>
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
    </div>
  );
}
