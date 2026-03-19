import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function BuclesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Bucles</h1>
      <p className="text-text-muted text-lg mb-8">for, while, do-while y for-each</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Bucle for</h2>
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
    </div>
  );
}
