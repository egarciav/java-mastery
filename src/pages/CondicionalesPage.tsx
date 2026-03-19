import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function CondicionalesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Condicionales</h1>
      <p className="text-text-muted text-lg mb-8">if, else, switch y operador ternario</p>

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
        <InfoBox type="angular">
          TypeScript no tiene switch con arrow syntax. El switch moderno de Java 14+ con <code className="text-primary">{"->"}</code> es 
          más limpio y seguro que el switch clásico porque no necesita <code className="text-primary">break</code>.
        </InfoBox>
        <InfoBox type="tip">
          Siempre prefiere el <strong>switch moderno</strong> (arrow syntax) cuando uses Java 14+. 
          Elimina bugs de "fall-through" y permite usar switch como expresión que retorna un valor.
        </InfoBox>
      </section>
    </div>
  );
}
