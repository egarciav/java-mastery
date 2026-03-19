import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function ArraysPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Arrays</h1>
      <p className="text-text-muted text-lg mb-8">Colecciones de tamaño fijo en Java</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Declarar y crear Arrays</h2>
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
    </div>
  );
}
