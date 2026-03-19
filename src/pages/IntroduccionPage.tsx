import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function IntroduccionPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Introducción a Java</h1>
      <p className="text-text-muted text-lg mb-8">Qué es Java, cómo funciona y por qué sigue siendo relevante en 2026</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es Java?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Java es un lenguaje de programación <strong className="text-text">orientado a objetos</strong>, 
          <strong className="text-text"> fuertemente tipado</strong> y <strong className="text-text">compilado</strong>.
          Fue creado por James Gosling en Sun Microsystems en 1995 y actualmente es mantenido por Oracle.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          Su filosofía es <strong className="text-text">"Write Once, Run Anywhere" (WORA)</strong>: 
          escribes el código una vez y se ejecuta en cualquier plataforma que tenga una JVM (Java Virtual Machine).
        </p>

        <InfoBox type="angular">
          En Angular trabajas con TypeScript, que se <strong>transpila</strong> a JavaScript y se ejecuta en el navegador.
          En Java, el código se <strong>compila</strong> a <code className="text-primary">bytecode</code> y se ejecuta
          en la JVM. El concepto es similar: un paso intermedio antes de la ejecución.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">JDK, JRE y JVM — Las tres piezas clave</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Estos tres conceptos son fundamentales para entender cómo funciona Java:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-java mb-2">JVM (Java Virtual Machine)</h3>
            <p className="text-text-muted text-sm">
              Es la máquina virtual que <strong className="text-text">ejecuta</strong> el bytecode de Java. 
              Es lo que permite que Java sea multiplataforma. Cada sistema operativo (Windows, macOS, Linux) 
              tiene su propia implementación de la JVM, pero todos ejecutan el mismo bytecode.
            </p>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-java mb-2">JRE (Java Runtime Environment)</h3>
            <p className="text-text-muted text-sm">
              Es el entorno de <strong className="text-text">ejecución</strong>. Incluye la JVM más 
              las bibliotecas estándar de Java (como java.lang, java.util, etc.). 
              Es lo que necesitas para <strong className="text-text">ejecutar</strong> programas Java.
            </p>
          </div>
          <div className="bg-surface-light border border-border rounded-xl p-4">
            <h3 className="font-semibold text-java mb-2">JDK (Java Development Kit)</h3>
            <p className="text-text-muted text-sm">
              Es el kit de <strong className="text-text">desarrollo</strong>. Incluye el JRE más herramientas 
              para desarrollar: el compilador (<code className="text-primary">javac</code>), 
              el debugger, y otras utilidades. Es lo que necesitas para <strong className="text-text">escribir y compilar</strong> programas Java.
            </p>
          </div>
        </div>

        <CodeBlock language="bash" filename="Relación entre JDK, JRE y JVM" code={`
# La relación es como una matrioska (muñeca rusa):
# JDK contiene → JRE contiene → JVM

# JDK = JRE + herramientas de desarrollo (javac, jar, javadoc)
# JRE = JVM + bibliotecas estándar de Java
# JVM = Motor que ejecuta el bytecode

# Para DESARROLLAR necesitas: JDK
# Para solo EJECUTAR necesitas: JRE
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Cómo se compila y ejecuta Java?</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          El proceso de compilación y ejecución en Java tiene dos pasos:
        </p>

        <CodeBlock language="bash" filename="Paso 1: Escribir el código" code={`
# Creas un archivo con extensión .java
# El nombre del archivo DEBE coincidir con el nombre de la clase pública
# Ejemplo: HolaMundo.java
`} />

        <CodeBlock language="java" filename="HolaMundo.java" code={`
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
`} />

        <CodeBlock language="bash" filename="Paso 2: Compilar" code={`
# El compilador (javac) convierte tu código .java en bytecode .class
javac HolaMundo.java
# Esto genera: HolaMundo.class (bytecode)
`} />

        <CodeBlock language="bash" filename="Paso 3: Ejecutar" code={`
# La JVM ejecuta el bytecode
java HolaMundo
# Salida: ¡Hola, Mundo!
# NOTA: No pones la extensión .class al ejecutar
`} />

        <InfoBox type="info">
          En la práctica, cuando uses un IDE como IntelliJ IDEA o VS Code, los pasos de compilar y ejecutar 
          se hacen con un solo clic o atajo de teclado. Pero es importante que entiendas qué pasa detrás de escenas.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Instalación del JDK</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Para empezar a programar en Java necesitas instalar el JDK. En 2026, las versiones recomendadas son:
        </p>

        <div className="bg-surface-light border border-border rounded-xl p-4 mb-4">
          <ul className="space-y-2 text-text-muted text-sm">
            <li>• <strong className="text-text">Java 21 (LTS)</strong> — Versión de soporte largo, la más usada en producción</li>
            <li>• <strong className="text-text">Java 23+</strong> — Última versión con las features más recientes</li>
          </ul>
        </div>

        <CodeBlock language="bash" filename="Verificar instalación" code={`
# Verificar que Java está instalado
java --version
# Debería mostrar algo como: openjdk 21.0.x ...

# Verificar el compilador
javac --version
# Debería mostrar algo como: javac 21.0.x
`} />

        <InfoBox type="tip" title="IDEs Recomendados">
          <strong>IntelliJ IDEA</strong> (Community Edition es gratuita) es el IDE más popular para Java.
          También puedes usar <strong>VS Code</strong> con el Extension Pack for Java.
          IntelliJ es especialmente bueno para Spring Boot.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué Java en 2026?</h2>
        <div className="space-y-3 text-text-muted leading-relaxed">
          <p>
            <strong className="text-text">1. Ecosistema empresarial masivo:</strong> La mayoría de las empresas grandes 
            (bancos, aerolíneas, gobiernos) usan Java para sus sistemas backend.
          </p>
          <p>
            <strong className="text-text">2. Spring Boot:</strong> El framework más popular para crear APIs REST 
            y microservicios. Es equivalente a lo que Express/NestJS es para Node.js.
          </p>
          <p>
            <strong className="text-text">3. Rendimiento:</strong> La JVM es extremadamente eficiente. 
            Java moderno con GraalVM puede compilar a binarios nativos.
          </p>
          <p>
            <strong className="text-text">4. Evolución constante:</strong> Java lanza nuevas versiones cada 6 meses. 
            Records, sealed classes, pattern matching, virtual threads — Java moderno es muy diferente al Java de hace 10 años.
          </p>
          <p>
            <strong className="text-text">5. Demanda laboral:</strong> Java sigue siendo uno de los lenguajes 
            más demandados en el mercado laboral, especialmente para posiciones backend senior.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Java vs TypeScript — Diferencias clave</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-text-muted">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-text">Aspecto</th>
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
                <td className="py-3 px-4">Paradigma</td>
                <td className="py-3 px-4">Multi-paradigma</td>
                <td className="py-3 px-4">Orientado a Objetos</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Null safety</td>
                <td className="py-3 px-4">strict null checks</td>
                <td className="py-3 px-4">Optional (desde Java 8)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Gestión memoria</td>
                <td className="py-3 px-4">Garbage Collector (V8)</td>
                <td className="py-3 px-4">Garbage Collector (JVM)</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Dependencias</td>
                <td className="py-3 px-4">npm / yarn</td>
                <td className="py-3 px-4">Maven / Gradle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
