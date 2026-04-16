import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function CondicionalesPage() {
  return (
    <div>
      <DayHeader
        day={7}
        title="Condicionales"
        duration="45 min"
        commitMsg="dia-7: if-else, switch clasico y moderno, ternario"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a aprender a tomar decisiones en tu código. Los condicionales son idénticos a TypeScript
        en su forma básica, pero Java tiene un <strong className="text-text">switch moderno</strong> muy poderoso.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">if / else if / else</h2>
        <CodeBlock filename="Condicionales.java" code={`
public class Condicionales {
    public static void main(String[] args) {
        int edad = 20;

        // if simple
        if (edad >= 18) {
            System.out.println("Mayor de edad");
        }

        // if-else
        if (edad >= 18) {
            System.out.println("Mayor");
        } else {
            System.out.println("Menor");
        }

        // if-else if-else
        int nota = 85;
        if (nota >= 90) {
            System.out.println("A - Excelente");
        } else if (nota >= 80) {
            System.out.println("B - Muy bien");
        } else if (nota >= 70) {
            System.out.println("C - Bien");
        } else {
            System.out.println("F - Reprobado");
        }

        // Condiciones compuestas con && (AND) y || (OR)
        String rol = "admin";
        boolean activo = true;
        if (rol.equals("admin") && activo) {
            System.out.println("Acceso concedido");
        }
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Operador Ternario</h2>
        <CodeBlock filename="Ternario.java" code={`
// Sintaxis: condición ? valorSiTrue : valorSiFalse
int edad = 20;
String resultado = (edad >= 18) ? "Mayor" : "Menor";

int a = 10, b = 20;
int mayor = (a > b) ? a : b; // 20
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">switch (clásico y moderno)</h2>
        <CodeBlock filename="SwitchEjemplo.java" code={`
public class SwitchEjemplo {
    public static void main(String[] args) {
        // Switch CLÁSICO (necesita break)
        int dia = 3;
        switch (dia) {
            case 1:
                System.out.println("Lunes");
                break;  // sin break, cae al siguiente case
            case 2:
                System.out.println("Martes");
                break;
            case 3:
                System.out.println("Miércoles");
                break;
            default:
                System.out.println("Otro día");
        }

        // Switch con String (desde Java 7)
        String color = "rojo";
        switch (color) {
            case "rojo":
                System.out.println("Peligro");
                break;
            case "verde":
                System.out.println("Seguro");
                break;
            default:
                System.out.println("Desconocido");
        }

        // Switch MODERNO con arrow -> (Java 14+) NO necesita break
        String resultado = switch (dia) {
            case 1 -> "Lunes";
            case 2 -> "Martes";
            case 3 -> "Miércoles";
            case 4, 5 -> "Jueves o Viernes"; // múltiples valores
            default -> "Fin de semana";
        };
        System.out.println(resultado);

        // Switch con bloques y yield (Java 14+)
        String mensaje = switch (dia) {
            case 1, 2, 3, 4, 5 -> {
                String tipo = "laborable";
                yield "Día " + tipo; // yield retorna el valor del bloque
            }
            default -> "Fin de semana";
        };
    }
}
`} />
        <ThinkSection title="¿Cuándo usar switch clásico vs moderno?">
          <p>
            <strong className="text-text">Switch clásico</strong> (con break): solo si estás en Java 13 o menos,
            o si necesitas fall-through intencional (raro).
          </p>
          <p>
            <strong className="text-text">Switch moderno</strong> (con arrow →): siempre que puedas (Java 14+).
            Es más seguro (no hay bugs de break olvidado), más limpio, y puede retornar un valor directamente.
          </p>
        </ThinkSection>

        <InfoBox type="angular">
          TypeScript no tiene switch con arrow syntax. El switch moderno de Java 14+ con <code className="text-primary">{"->"}</code> es 
          más limpio y seguro que el switch clásico porque no necesita <code className="text-primary">break</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 7</h2>

        <Exercise
          number={1}
          title="Clasificador de IMC"
          description={`Crea ClasificadorIMC.java con un método static clasificar(double peso, double altura):
1. Calcula el IMC: peso / (altura * altura)
2. Clasifica según:
   - IMC < 18.5 → "Bajo peso"
   - IMC < 25 → "Normal"
   - IMC < 30 → "Sobrepeso"
   - IMC >= 30 → "Obesidad"
3. Imprime el IMC con 1 decimal y la clasificación

Prueba con: (70, 1.75), (50, 1.60), (95, 1.70)`}
          hint="double imc = peso / (altura * altura); luego usa if-else if-else para clasificar."
          solution={`public class ClasificadorIMC {
    static void clasificar(double peso, double altura) {
        double imc = peso / (altura * altura);
        String clasificacion;

        if (imc < 18.5) {
            clasificacion = "Bajo peso";
        } else if (imc < 25) {
            clasificacion = "Normal";
        } else if (imc < 30) {
            clasificacion = "Sobrepeso";
        } else {
            clasificacion = "Obesidad";
        }

        System.out.printf("Peso: %.1f, Altura: %.2f → IMC: %.1f (%s)%n",
                          peso, altura, imc, clasificacion);
    }

    public static void main(String[] args) {
        clasificar(70, 1.75);
        clasificar(50, 1.60);
        clasificar(95, 1.70);
    }
}`}
          solutionFilename="ClasificadorIMC.java"
        />

        <Exercise
          number={2}
          title="Traductor de día con switch moderno"
          description={`Crea TraductorDia.java que use switch moderno (arrow syntax) para:
1. Recibir un int del 1 al 7
2. Retornar el nombre del día en español
3. Retornar si es "laborable" o "fin de semana"

Usa switch como expresión que retorna un valor String.
Prueba con: 1, 3, 6, 7, 9 (inválido)`}
          hint='String dia = switch (numero) { case 1 -> "Lunes"; case 6, 7 -> "fin de semana"; default -> "Día inválido"; };'
          solution={`public class TraductorDia {
    static String obtenerDia(int numero) {
        return switch (numero) {
            case 1 -> "Lunes";
            case 2 -> "Martes";
            case 3 -> "Miércoles";
            case 4 -> "Jueves";
            case 5 -> "Viernes";
            case 6 -> "Sábado";
            case 7 -> "Domingo";
            default -> "Día inválido";
        };
    }

    static String obtenerTipo(int numero) {
        return switch (numero) {
            case 1, 2, 3, 4, 5 -> "Laborable";
            case 6, 7 -> "Fin de semana";
            default -> "Inválido";
        };
    }

    public static void main(String[] args) {
        for (int i : new int[]{1, 3, 6, 7, 9}) {
            System.out.printf("%d → %s (%s)%n", i, obtenerDia(i), obtenerTipo(i));
        }
    }
}`}
          solutionFilename="TraductorDia.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-7: condicionales if-else, switch clasico y moderno, ternario"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 8</strong>: bucles — for, while,
            do-while, for-each, break y continue.
          </p>
        </div>
      </section>
    </div>
  );
}
