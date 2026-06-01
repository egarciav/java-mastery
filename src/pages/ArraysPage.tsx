import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function ArraysPage() {
  return (
    <div>
      <DayHeader
        day={9}
        title="Arrays"
        duration="50 min"
        commitMsg="dia-9: arrays, multidimensionales, java.util.Arrays"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a dominar arrays — la estructura de datos más básica de Java.
        Son de tamaño fijo, pero son la base para entender colecciones dinámicas después.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Declarar y crear Arrays</h2>

        <ThinkSection title="Arrays en Java vs TypeScript — la diferencia fundamental">
          <p>
            En TypeScript, los arrays son <strong className="text-text">dinámicos por defecto</strong>:
            <code className="text-primary"> push()</code>, <code className="text-primary">pop()</code>,
            <code className="text-primary"> splice()</code> cambian el tamaño automáticamente. Bajo el capó,
            JavaScript reasigna memoria cuando el array crece.
          </p>
          <p>
            En Java, los arrays primitivos tienen <strong className="text-text">tamaño fijo en tiempo de creación</strong>.
            <code className="text-primary">new int[5]</code> reserva exactamente 5 espacios contiguos en memoria.
            No puedes agregar ni quitar elementos. ¿Por qué esta limitación?
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Rendimiento óptimo</strong>: los arrays de tamaño fijo son la estructura de datos más rápida posible. Acceso en O(1) garantizado. Sin overhead de redimensionamiento.</li>
            <li><strong className="text-text">Memoria predecible</strong>: sabes exactamente cuánta RAM vas a usar. Importante en sistemas embebidos o cuando optimizas rendimiento.</li>
            <li><strong className="text-text">Base de otras estructuras</strong>: <code className="text-primary">ArrayList</code> internamente usa un array que redimensiona cuando necesita. Entender arrays es entender cómo funciona ArrayList.</li>
          </ul>
          <p>
            <strong className="text-text">Error clásico — ArrayIndexOutOfBoundsException:</strong> intentar acceder a
            un índice fuera del rango (negativo o mayor que <code className="text-primary">length - 1</code>).
            Este es un error de runtime, no de compilación — el compilador no lo detecta. Es uno de los
            errores más comunes en Java. Regla: el último índice válido es siempre
            <code className="text-primary"> array.length - 1</code>.
          </p>
          <p>
            <strong className="text-text">Cuándo usar qué:</strong> Array si el tamaño es fijo y conocido
            (buffer de bytes, tabla de multiplicar, días de la semana). <code className="text-primary">ArrayList</code>
            cuando el número de elementos puede variar. En la práctica enterprise, usarás <code className="text-primary">ArrayList</code>
            la mayoría del tiempo.
          </p>
        </ThinkSection>

        <CodeBlock filename="Arrays.java" code={`
public class Arrays {
    public static void main(String[] args) {
        // Declarar con tamaño fijo
        int[] numeros = new int[5]; // array de 5 enteros (todos 0)
        numeros[0] = 10;
        numeros[1] = 20;

        // Declarar con valores iniciales
        String[] frutas = {"Manzana", "Banana", "Cereza"};
        double[] precios = {19.99, 29.99, 39.99};

        // Acceder a elementos (índice empieza en 0)
        System.out.println(frutas[0]);       // "Manzana"
        System.out.println(frutas.length);   // 3 (NO es un método, es un campo)

        // Modificar elementos
        frutas[1] = "Pera";

        // CUIDADO: ArrayIndexOutOfBoundsException
        // System.out.println(frutas[10]); // ¡ERROR en tiempo de ejecución!

        // Recorrer con for
        for (int i = 0; i < frutas.length; i++) {
            System.out.println(i + ": " + frutas[i]);
        }

        // Recorrer con for-each
        for (String fruta : frutas) {
            System.out.println(fruta);
        }
    }
}
`} />
        <InfoBox type="warning">
          Los arrays en Java tienen <strong>tamaño fijo</strong>. Una vez creados, no puedes agregar ni quitar elementos.
          Si necesitas una colección dinámica, usa <code className="text-primary">ArrayList</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Arrays multidimensionales</h2>
        <CodeBlock filename="ArraysMulti.java" code={`
// Matriz 2D (array de arrays)
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
System.out.println(matriz[1][2]); // 6 (fila 1, columna 2)

// Recorrer matriz 2D
for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.printf("%d ", matriz[i][j]);
    }
    System.out.println();
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Clase java.util.Arrays</h2>
        <CodeBlock filename="ArraysUtil.java" code={`
import java.util.Arrays;

public class ArraysUtil {
    public static void main(String[] args) {
        int[] nums = {5, 2, 8, 1, 9, 3};

        // Ordenar
        Arrays.sort(nums); // [1, 2, 3, 5, 8, 9]

        // Buscar (el array DEBE estar ordenado)
        int indice = Arrays.binarySearch(nums, 5); // 3

        // Convertir a String legible
        System.out.println(Arrays.toString(nums)); // [1, 2, 3, 5, 8, 9]

        // Llenar con un valor
        int[] ceros = new int[5];
        Arrays.fill(ceros, 0); // [0, 0, 0, 0, 0]

        // Copiar
        int[] copia = Arrays.copyOf(nums, nums.length);
        int[] parcial = Arrays.copyOfRange(nums, 1, 4); // [2, 3, 5]

        // Comparar
        System.out.println(Arrays.equals(nums, copia)); // true

        // Convertir a List
        String[] nombres = {"Ana", "Luis", "María"};
        java.util.List<String> lista = Arrays.asList(nombres);
    }
}
`} />
        <InfoBox type="angular">
          En TypeScript los arrays son dinámicos y tienen métodos como <code className="text-primary">.push()</code>, 
          <code className="text-primary">.map()</code>, <code className="text-primary">.filter()</code>. En Java los arrays primitivos son fijos. 
          Para funcionalidad similar usa <code className="text-primary">ArrayList</code> y <code className="text-primary">Streams</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 9</h2>

        <Exercise
          number={1}
          title="Estadísticas de array"
          description={`Crea EstadisticasArray.java con métodos static que reciban un int[] y retornen:
- encontrarMaximo(int[] nums) → el valor máximo
- encontrarMinimo(int[] nums) → el valor mínimo
- calcularPromedio(int[] nums) → el promedio como double

Prueba con: {45, 12, 78, 3, 56, 91, 23}`}
          hint="Recorre el array con for, lleva una variable para el máximo/mínimo actual. Para promedio, suma todo y divide entre length."
          solution={`public class EstadisticasArray {
    static int encontrarMaximo(int[] nums) {
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) max = nums[i];
        }
        return max;
    }

    static int encontrarMinimo(int[] nums) {
        int min = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < min) min = nums[i];
        }
        return min;
    }

    static double calcularPromedio(int[] nums) {
        int suma = 0;
        for (int num : nums) {
            suma += num;
        }
        return (double) suma / nums.length;
    }

    public static void main(String[] args) {
        int[] datos = {45, 12, 78, 3, 56, 91, 23};
        System.out.println("Datos: " + java.util.Arrays.toString(datos));
        System.out.println("Máximo: " + encontrarMaximo(datos));
        System.out.println("Mínimo: " + encontrarMinimo(datos));
        System.out.printf("Promedio: %.2f%n", calcularPromedio(datos));
    }
}`}
          solutionFilename="EstadisticasArray.java"
        />

        <Exercise
          number={2}
          title="Invertir array"
          description={`Crea InvertirArray.java con un método static invertir(int[] arr) que:
1. Invierta el array IN-PLACE (sin crear uno nuevo)
2. Use dos punteros: uno al inicio y otro al final
3. Intercambie los elementos hasta que se crucen

Prueba con: {1, 2, 3, 4, 5} → {5, 4, 3, 2, 1}
Y con: {10, 20, 30, 40} → {40, 30, 20, 10}`}
          hint="Usa int izq = 0 y int der = arr.length - 1. Intercambia arr[izq] y arr[der], luego izq++ y der-- hasta que izq >= der."
          solution={`public class InvertirArray {
    static void invertir(int[] arr) {
        int izq = 0;
        int der = arr.length - 1;
        while (izq < der) {
            int temp = arr[izq];
            arr[izq] = arr[der];
            arr[der] = temp;
            izq++;
            der--;
        }
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        System.out.println("Antes: " + java.util.Arrays.toString(nums));
        invertir(nums);
        System.out.println("Después: " + java.util.Arrays.toString(nums));

        int[] nums2 = {10, 20, 30, 40};
        invertir(nums2);
        System.out.println("Invertido: " + java.util.Arrays.toString(nums2));
    }
}`}
          solutionFilename="InvertirArray.java"
        />

        <Exercise
          number={3}
          title="Matriz transpuesta"
          description={`Crea MatrizTranspuesta.java que:
1. Cree una matriz 3x3 con valores
2. Imprima la matriz original
3. Cree la matriz transpuesta (filas ↔ columnas)
4. Imprima la transpuesta

Ejemplo:
Original:     Transpuesta:
1 2 3         1 4 7
4 5 6         2 5 8
7 8 9         3 6 9`}
          hint="Para transponer: transpuesta[j][i] = original[i][j]. Necesitas dos bucles anidados."
          solution={`public class MatrizTranspuesta {
    static void imprimirMatriz(int[][] m) {
        for (int[] fila : m) {
            for (int val : fila) {
                System.out.printf("%3d", val);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] original = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("Original:");
        imprimirMatriz(original);

        int[][] transpuesta = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                transpuesta[j][i] = original[i][j];
            }
        }

        System.out.println("Transpuesta:");
        imprimirMatriz(transpuesta);
    }
}`}
          solutionFilename="MatrizTranspuesta.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-9: arrays, multidimensionales, java.util.Arrays, invertir, transponer"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 10</strong>: métodos — parámetros,
            retorno, overloading, varargs y paso por valor.
          </p>
        </div>
      </section>
    </div>
  );
}
