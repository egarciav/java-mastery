import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import StepByStep from '../components/StepByStep';
import Exercise from '../components/Exercise';

export default function IntroduccionPage() {
  return (
    <div>
      <DayHeader
        day={1}
        title="Introducción a Java"
        duration="45 min"
        commitMsg="dia-1: primer programa Java - HolaMundo"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy vas a entender qué es Java, cómo funciona por dentro, y vas a escribir y ejecutar tu primer programa.
        No solo leer — vas a <strong className="text-text">hacer</strong>.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es Java y por qué te importa?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java es un lenguaje <strong className="text-text">orientado a objetos</strong>,
          <strong className="text-text"> fuertemente tipado</strong> y <strong className="text-text">compilado</strong>.
          Fue creado en 1995 por James Gosling en Sun Microsystems y hoy lo mantiene Oracle con versiones LTS cada dos años.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          Su filosofía es <strong className="text-text">"Write Once, Run Anywhere" (WORA)</strong>:
          escribes el código una vez y se ejecuta en cualquier plataforma que tenga una JVM instalada —
          Windows, Linux, macOS, servidores, dispositivos embebidos.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          Algunos términos clave que oirás constantemente:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-text mb-1">Fuertemente tipado</h3>
            <p className="text-text-muted text-sm">Cada variable tiene un tipo fijo declarado en tiempo de compilación. No puedes asignar un
            <code className="text-primary"> String</code> a una variable <code className="text-primary">int</code>. El compilador detecta ese error
            <strong className="text-text"> antes de que el programa corra</strong>, no en producción.</p>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-text mb-1">Compilado</h3>
            <p className="text-text-muted text-sm">Tu código fuente (<code className="text-primary">.java</code>) pasa por el compilador <code className="text-primary">javac</code>
            y se convierte en <strong className="text-text">bytecode</strong> (<code className="text-primary">.class</code>). Ese bytecode es un lenguaje
            intermedio — no es código máquina directo ni código fuente. La JVM lo ejecuta.</p>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-text mb-1">Orientado a objetos</h3>
            <p className="text-text-muted text-sm">El código se organiza en <strong className="text-text">clases y objetos</strong>. Una clase es el molde,
            un objeto es la instancia concreta. Todo en Java vive dentro de una clase — no existen funciones sueltas
            como en JavaScript.</p>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-text mb-1">Garbage Collector (GC)</h3>
            <p className="text-text-muted text-sm">Java gestiona la memoria automáticamente. A diferencia de C/C++, no tienes que liberar
            memoria manualmente con <code className="text-primary">free()</code>. El GC de la JVM detecta objetos que ya no se
            usan y los elimina. Esto elimina una clase entera de bugs muy difíciles de depurar.</p>
          </div>
        </div>

        <ThinkSection title="¿Por qué debería aprender Java si ya sé TypeScript?">
          <p>
            Piénsalo así: TypeScript te da tipado estático <em>opcional</em> sobre JavaScript.
            Java te da tipado estático <em>obligatorio</em> desde el primer día. Eso significa que
            el compilador atrapa más errores antes de que tu código se ejecute — errores que en
            TypeScript/JavaScript solo los descubrirías en producción.
          </p>
          <p>
            <strong className="text-text">Ecosistema y mercado laboral:</strong> El 90% de los sistemas bancarios,
            aerolíneas, seguros y gobiernos del mundo corren sobre Java. No porque sea el más moderno,
            sino porque es <strong className="text-text">extremadamente estable, predecible y tiene el ecosistema más
            maduro del sector enterprise</strong>. Una aplicación Java bien escrita en 2005 probablemente
            sigue corriendo hoy sin cambios.
          </p>
          <p>
            <strong className="text-text">Spring Boot:</strong> Es el framework dominante para backends enterprise.
            Es el equivalente de NestJS pero con 20 años más de madurez, una comunidad 10x más grande y
            soporte oficial en la mayoría de plataformas cloud (AWS, GCP, Azure). Dominar Java + Spring Boot
            abre las puertas a los proyectos mejor pagados del sector.
          </p>
          <p>
            <strong className="text-text">Android:</strong> Las apps Android se escriben en Java o Kotlin
            (Kotlin compila a bytecode Java). Si alguna vez quieres desarrollar apps móviles nativas,
            el conocimiento de Java te lleva directamente ahí.
          </p>
          <p>
            <strong className="text-text">Lo que ya sabes:</strong> Como desarrollador Angular/TypeScript ya dominas
            OOP, interfaces, clases, tipado estático y arquitectura en capas. Esos conceptos se
            trasladan directamente. La curva de aprendizaje es la <em>sintaxis</em>, no el paradigma.
          </p>
        </ThinkSection>

        <InfoBox type="angular">
          En Angular trabajas con TypeScript, que se <strong>transpila</strong> a JavaScript y se ejecuta en el navegador.
          En Java, el código se <strong>compila</strong> a <code className="text-primary">bytecode</code> y se ejecuta
          en la JVM. El concepto es similar: un paso intermedio antes de la ejecución.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">JDK, JRE y JVM — Las tres piezas clave</h2>

        <ThinkSection title="¿Cómo pensar en estas tres piezas?">
          <p>
            Imagina una <strong className="text-text">muñeca rusa (matrioska)</strong>. La más grande es el JDK,
            que contiene al JRE, que contiene a la JVM. Cada capa agrega herramientas:
          </p>
          <p>
            <strong className="text-text">JVM</strong> = el motor que ejecuta tu programa.
            <strong className="text-text"> JRE</strong> = el motor + las bibliotecas (java.util, java.lang...).
            <strong className="text-text"> JDK</strong> = todo lo anterior + herramientas para desarrollar (compilador, debugger).
          </p>
          <p>
            Como desarrollador, siempre instalas el <strong className="text-text">JDK</strong>. Es todo lo que necesitas.
          </p>
        </ThinkSection>

        <div className="space-y-4 mb-6">
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-java mb-2">JVM (Java Virtual Machine)</h3>
            <p className="text-text-muted text-sm">
              Ejecuta el bytecode de Java. Cada sistema operativo tiene su propia JVM,
              pero todos ejecutan el mismo bytecode — eso es WORA. La JVM también es responsable del
              <strong className="text-text"> Garbage Collector</strong> (gestión automática de memoria) y del
              <strong className="text-text"> JIT compiler</strong> (Just-In-Time): la JVM observa qué partes
              del código se ejecutan más y las compila a código máquina nativo en tiempo real,
              haciendo Java sorprendentemente rápido.
            </p>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-java mb-2">JRE (Java Runtime Environment)</h3>
            <p className="text-text-muted text-sm">
              JVM + las bibliotecas estándar de Java (<code className="text-primary">java.lang</code>,
              <code className="text-primary"> java.util</code>, <code className="text-primary">java.io</code>,
              <code className="text-primary"> java.net</code>, etc.). Lo que necesitas para
              <strong className="text-text"> ejecutar</strong> programas Java ya compilados.
              Antes Java separaba JRE del JDK como descargas distintas; desde Java 9 se fusionaron
              en la práctica.
            </p>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-java mb-2">JDK (Java Development Kit)</h3>
            <p className="text-text-muted text-sm">
              JRE + herramientas de desarrollo: <code className="text-primary">javac</code> (compilador),
              <code className="text-primary"> javadoc</code> (genera documentación HTML desde tus comentarios),
              <code className="text-primary"> jdb</code> (debugger de línea de comandos),
              <code className="text-primary"> jar</code> (empaquetador), y más.
              <strong className="text-text"> Como desarrollador, siempre instalas el JDK.</strong>
              Usa JDK 21 — es la versión LTS (Long-Term Support) más reciente, con soporte hasta 2031.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Instalación paso a paso</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Antes de escribir código, necesitas tener el JDK instalado. Vamos a hacerlo juntos:
        </p>

        <StepByStep title="Instalar JDK 21 en tu máquina" steps={[
          { instruction: 'Descarga el JDK 21 (LTS)', detail: 'Ve a adoptium.net o oracle.com/java y descarga JDK 21 para tu sistema operativo.' },
          { instruction: 'Ejecuta el instalador', detail: 'En Windows: siguiente, siguiente, instalar. En macOS: abre el .dmg y arrastra. En Linux: usa tu gestor de paquetes (apt, dnf, etc.).' },
          { instruction: 'Verifica la instalación en tu terminal', detail: 'Abre una terminal y ejecuta los comandos de abajo.' },
          { instruction: 'Instala IntelliJ IDEA Community', detail: 'Descarga de jetbrains.com/idea. La versión Community es gratuita y perfecta para aprender.' },
        ]} />

        <CodeBlock language="bash" filename="Terminal — Verificar instalación" code={`
# Verificar que Java está instalado
java --version
# Debería mostrar algo como: openjdk 21.0.x ...

# Verificar el compilador
javac --version
# Debería mostrar algo como: javac 21.0.x
`} />

        <InfoBox type="warning" title="¿No te reconoce el comando java?">
          Si la terminal dice "java no se reconoce como un comando", necesitas agregar el JDK al PATH
          de tu sistema. En Windows: Panel de control → Variables de entorno → PATH → agrega la ruta
          del bin del JDK (ejemplo: <code className="text-primary">C:\Program Files\Java\jdk-21\bin</code>).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Tu primer programa: HolaMundo</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Ahora sí, manos al código. Vas a crear tu primer archivo Java y ejecutarlo.
          Presta atención a <strong className="text-text">cada parte</strong> del código:
        </p>

        <StepByStep title="Crear tu primer proyecto en IntelliJ" steps={[
          { instruction: 'Abre IntelliJ IDEA', detail: 'Si es la primera vez, selecciona "New Project".' },
          { instruction: 'Configura el proyecto', detail: 'Name: java-mastery-45-dias, Language: Java, Build system: IntelliJ, JDK: 21. Click "Create".' },
          { instruction: 'Crea el archivo HolaMundo.java', detail: 'Click derecho en la carpeta "src" → New → Java Class → escribe "HolaMundo".' },
          { instruction: 'Escribe el código de abajo', detail: 'No copies y pegues. Escríbelo tú mismo — así tu cerebro empieza a memorizar la estructura.' },
          { instruction: 'Ejecuta el programa', detail: 'Click derecho en el archivo → Run, o usa el atajo Shift+F10 (Windows) / Ctrl+R (Mac).' },
        ]} />

        <CodeBlock language="java" filename="HolaMundo.java" code={`
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
`} />

        <ThinkSection title="¿Qué significa cada palabra de este código?">
          <p>Vamos parte por parte, porque entender esto es la base de TODO lo que viene después:</p>
          <p>
            <strong className="text-text">public</strong> — Es un <em>modificador de acceso</em>. Controla
            quién puede ver o usar esta clase. <code className="text-primary">public</code> significa accesible
            desde cualquier parte. Existen cuatro niveles: <code className="text-primary">public</code>,
            <code className="text-primary"> protected</code>, <code className="text-primary">package-private</code> (sin
            palabra clave) y <code className="text-primary">private</code>. Los verás en detalle en el Día 12 (Encapsulamiento).
          </p>
          <p>
            <strong className="text-text">class HolaMundo</strong> — Defines una clase llamada HolaMundo.
            En Java <em>todo</em> el código vive dentro de una clase — no existen funciones ni variables
            sueltas fuera de una clase. El nombre de la clase <em>debe coincidir exactamente</em> con el
            nombre del archivo (<code className="text-primary">HolaMundo.java</code>) cuando la clase es pública.
            Java es case-sensitive: <code className="text-primary">HolaMundo</code> y <code className="text-primary">holamundo</code>
            son dos clases completamente diferentes.
          </p>
          <p>
            <strong className="text-text">public static void main(String[] args)</strong> — Este es el
            <em> punto de entrada del programa</em>. La JVM busca exactamente este método con esta firma
            exacta para arrancar. No puedes cambiarle el nombre ni los parámetros.
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">static</code> — El método pertenece a la clase, no a una instancia. La JVM puede llamarlo sin crear un objeto.</li>
            <li><code className="text-primary">void</code> — Este método no retorna ningún valor al finalizar.</li>
            <li><code className="text-primary">String[] args</code> — Es un array de Strings con los argumentos que el usuario pasa al ejecutar el programa desde la terminal: <code className="text-primary">java HolaMundo arg1 arg2</code>. Al inicio siempre estará vacío.</li>
          </ul>
          <p>
            <strong className="text-text">System.out.println()</strong> — Imprime texto en la consola
            y agrega un salto de línea al final. Desglosándolo:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">System</code> — Clase del paquete <code className="text-primary">java.lang</code> (importado automáticamente). Representa el sistema donde corre tu programa.</li>
            <li><code className="text-primary">out</code> — Campo estático de tipo <code className="text-primary">PrintStream</code>. Representa la salida estándar (la terminal).</li>
            <li><code className="text-primary">println()</code> — Método que imprime el texto y agrega <code className="text-primary">\n</code> al final. <code className="text-primary">print()</code> hace lo mismo pero sin el salto de línea.</li>
          </ul>
        </ThinkSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Cómo funciona por dentro?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Cuando hiciste click en "Run" en IntelliJ, esto es lo que pasó detrás de escenas:
        </p>

        <CodeBlock language="bash" filename="Lo que IntelliJ hizo por ti" code={`
# Paso 1: El compilador convierte .java → .class (bytecode)
javac HolaMundo.java
# Genera: HolaMundo.class

# Paso 2: La JVM ejecuta el bytecode
java HolaMundo
# Salida: ¡Hola, Mundo!

# NOTA: No pones .class al ejecutar
# NOTA: El archivo .class no es legible por humanos — es bytecode
`} />

        <InfoBox type="info">
          IntelliJ hace estos dos pasos automáticamente con un solo click. Pero es fundamental que
          entiendas el proceso: <strong>tu código → compilador → bytecode → JVM → ejecución</strong>.
          Los errores ocurren en dos momentos distintos:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Errores de compilación</strong> (en el paso <code className="text-primary">javac</code>): tipo incorrecto, variable no declarada, método inexistente. El programa ni siquiera arranca. Son los errores <em>buenos</em> — se detectan temprano.</li>
            <li><strong>Errores de ejecución / runtime</strong> (en el paso <code className="text-primary">java</code>): división por cero, NullPointerException, índice fuera de rango. El programa arranca pero explota en algún momento. Son los errores difíciles.</li>
          </ul>
          El compilador de Java es tu primer line of defense.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Java vs TypeScript — Mapa mental</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Si vienes de TypeScript, esta tabla te ayuda a conectar lo que ya sabes:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-text-muted">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-text">Concepto</th>
                <th className="text-left py-3 px-4 text-angular">TypeScript</th>
                <th className="text-left py-3 px-4 text-java">Java</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Tipado</td>
                <td className="py-3 px-4">Estático (opcional)</td>
                <td className="py-3 px-4">Estático (obligatorio)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Compilación</td>
                <td className="py-3 px-4">Transpila a JS</td>
                <td className="py-3 px-4">Compila a bytecode</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Ejecución</td>
                <td className="py-3 px-4">Navegador / Node.js</td>
                <td className="py-3 px-4">JVM</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Punto de entrada</td>
                <td className="py-3 px-4">main.ts / index.ts</td>
                <td className="py-3 px-4">public static void main()</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Dependencias</td>
                <td className="py-3 px-4">npm / yarn / pnpm</td>
                <td className="py-3 px-4">Maven / Gradle</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Imprimir</td>
                <td className="py-3 px-4">console.log()</td>
                <td className="py-3 px-4">System.out.println()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 1</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          No avances al Día 2 sin completar estos ejercicios. Escríbelos tú mismo en IntelliJ,
          ejecútalos y verifica que funcionen.
        </p>

        <Exercise
          number={1}
          title="Saluda con tu nombre"
          description={`Crea una clase llamada MiSaludo.java que imprima:
"Hola, me llamo [TU NOMBRE] y estoy aprendiendo Java"

Recuerda: el nombre de la clase debe coincidir con el nombre del archivo.`}
          hint="Usa System.out.println() con tu nombre dentro de las comillas."
          solution={`public class MiSaludo {
    public static void main(String[] args) {
        System.out.println("Hola, me llamo Carlos y estoy aprendiendo Java");
    }
}`}
          solutionFilename="MiSaludo.java"
        />

        <Exercise
          number={2}
          title="Múltiples líneas"
          description={`Crea una clase llamada MiPerfil.java que imprima tu perfil en 4 líneas separadas:
- Tu nombre
- Tu edad
- Tu lenguaje favorito actual
- Lo que esperas aprender con Java

Usa 4 llamadas separadas a System.out.println().`}
          hint="Cada System.out.println() imprime una línea. Necesitas 4 sentencias separadas, cada una terminando con punto y coma."
          solution={`public class MiPerfil {
    public static void main(String[] args) {
        System.out.println("Nombre: Carlos García");
        System.out.println("Edad: 28");
        System.out.println("Lenguaje favorito: TypeScript");
        System.out.println("Meta: Aprender Spring Boot para backend");
    }
}`}
          solutionFilename="MiPerfil.java"
        />

        <Exercise
          number={3}
          title="print vs println"
          description={`Crea una clase Impresion.java que demuestre la diferencia entre print y println:
1. Usa System.out.print("Java ") (sin ln)
2. Usa System.out.print("es ") (sin ln)
3. Usa System.out.println("genial!") (con ln)
4. Usa System.out.println("--- fin ---")

¿Qué diferencia notas en la salida?`}
          hint='print() NO agrega salto de línea al final, println() SÍ. Las primeras tres palabras deberían aparecer en la misma línea.'
          solution={`public class Impresion {
    public static void main(String[] args) {
        System.out.print("Java ");      // NO salto de línea
        System.out.print("es ");        // NO salto de línea
        System.out.println("genial!");  // SÍ salto de línea
        System.out.println("--- fin ---");
        // Salida:
        // Java es genial!
        // --- fin ---
    }
}`}
          solutionFilename="Impresion.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <p className="text-text-muted text-sm mb-3">
            Si completaste los 3 ejercicios, haz tu primer commit:
          </p>
          <CodeBlock language="bash" code={`
git add .
git commit -m "dia-1: primer programa Java - HolaMundo, MiSaludo, MiPerfil, Impresion"
git push origin main
`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana en el <strong className="text-text">Día 2</strong> vas a aprender la estructura completa
            de un programa Java: paquetes, imports, convenciones y más.
          </p>
        </div>
      </section>
    </div>
  );
}
