import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function EnumsPage() {
  return (
    <div>
      <DayHeader
        day={20}
        title="Enums"
        duration="45 min"
        commitMsg="dia-20: enums basicos, con campos y metodos, en switch"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy descubrirás que los enums de Java son mucho más que simples constantes. A diferencia de
        TypeScript donde un enum es solo un mapeo nombre→valor, en Java cada valor de un enum es una
        <strong className="text-text"> instancia completa de una clase</strong> con campos, métodos y comportamiento propio.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Qué es un Enum y cuándo usarlo?</h2>

        <ThinkSection title="Enums Java: clases completas con objetos singleton predefinidos">
          <p>
            En TypeScript, <code className="text-primary">enum Color {'{'} Red, Green, Blue {'}'}</code> es solo
            azúcar para constantes numéricas (0, 1, 2) o strings. No puedes agregar métodos ni lógica.
          </p>
          <p>
            En Java, <strong className="text-text">un enum es una clase real</strong> donde cada constante es
            un <em>objeto singleton</em> creado al cargar la clase. Esto significa que puedes:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li>Tener <strong className="text-text">campos</strong> en cada constante: <code className="text-primary">EURO("€", 1.0)</code></li>
            <li>Agregar <strong className="text-text">métodos</strong> con lógica de negocio</li>
            <li>Implementar <strong className="text-text">interfaces</strong> para comportamiento polimórfico</li>
            <li>Sobrescribir métodos por constante individual (abstract methods en el enum)</li>
          </ul>
          <p>
            <strong className="text-text">Ventaja crítica con switch:</strong> el compilador Java puede verificar
            que tu switch cubre todos los valores del enum. Si añades un nuevo estado pero olvidas el case,
            el compilador te avisa. Con el switch moderno (Java 14+), esta verificación es obligatoria.
          </p>
          <p>
            <strong className="text-text">Métodos útiles heredados por todos los enums:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">name()</code>: retorna el nombre como String (<code className="text-primary">"PENDIENTE"</code>)</li>
            <li><code className="text-primary">ordinal()</code>: retorna la posición (0, 1, 2...) — evita depender de esto</li>
            <li><code className="text-primary">valueOf(String)</code>: convierte un String al enum correspondiente</li>
            <li><code className="text-primary">values()</code>: retorna un array con todos los valores</li>
          </ul>
          <p>
            <strong className="text-text">En Spring Boot</strong>: los enums se usan en entidades JPA para
            estados y tipos. Con <code className="text-primary">@Enumerated(EnumType.STRING)</code>, JPA guarda el
            nombre del enum como texto en la BD (más seguro que <code className="text-primary">ORDINAL</code>,
            que usa números y se rompe si reordenas las constantes).
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Un enum reemplaza las constantes mágicas (<code className="text-primary">int ESTADO_ACTIVO = 1</code>) con
          tipos seguros. Si un método recibe un <code className="text-primary">EstadoPedido</code>, el compilador
          garantiza que solo puedes pasar valores válidos — no un número aleatorio por error.
        </p>

        <CodeBlock filename="DiaSemana.java" code={`
public enum DiaSemana {
    LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO
}

public class Main {
    public static void main(String[] args) {
        DiaSemana hoy = DiaSemana.MIERCOLES;

        // Comparar enums con == (no con equals)
        if (hoy == DiaSemana.MIERCOLES) {
            System.out.println("Mitad de semana");
        }

        // switch con enums
        switch (hoy) {
            case LUNES, MARTES, MIERCOLES, JUEVES, VIERNES ->
                System.out.println("Día laborable");
            case SABADO, DOMINGO ->
                System.out.println("Fin de semana");
        }

        // Métodos útiles
        System.out.println(hoy.name());     // "MIERCOLES"
        System.out.println(hoy.ordinal());  // 2 (posición)
        DiaSemana d = DiaSemana.valueOf("LUNES"); // String -> Enum
        DiaSemana[] todos = DiaSemana.values();   // todos los valores
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Enum con campos y métodos</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Aquí es donde los enums de Java brillan. Puedes darle a cada valor del enum sus propios datos
          y comportamiento. El constructor es <strong className="text-text">siempre privado</strong> — solo se usa
          internamente cuando Java crea las instancias predefinidas al cargar la clase.
        </p>
        <CodeBlock filename="Planeta.java" code={`
public enum Planeta {
    MERCURIO(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    TIERRA(5.976e+24, 6.37814e6),
    MARTE(6.421e+23, 3.3972e6);

    private final double masa;      // en kg
    private final double radio;     // en metros

    // Constructor PRIVADO (siempre es privado en enums)
    Planeta(double masa, double radio) {
        this.masa = masa;
        this.radio = radio;
    }

    // Métodos
    public double getMasa() { return masa; }
    public double getRadio() { return radio; }

    public double gravedadSuperficial() {
        final double G = 6.67300E-11;
        return G * masa / (radio * radio);
    }
}

// Uso
// double g = Planeta.TIERRA.gravedadSuperficial(); // ~9.8
`} />
        <InfoBox type="tip" title="Métodos útiles que TODO enum tiene gratis">
          <code className="text-primary">.name()</code> — nombre como String ("TIERRA").
          <code className="text-primary"> .ordinal()</code> — posición (0-based).
          <code className="text-primary"> values()</code> — array con todos los valores.
          <code className="text-primary"> valueOf("NOMBRE")</code> — convierte String a enum (lanza excepción si no existe).
          Puedes comparar con <code className="text-primary">==</code> porque cada valor es singleton (una sola instancia en memoria).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Caso real: Enum como estrategia (Strategy Pattern)</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Los enums pueden implementar interfaces. Esto te permite tener comportamiento diferente por cada valor
          sin necesidad de crear múltiples clases. Es el patrón Strategy en su forma más compacta.
        </p>

        <CodeBlock filename="EstadoPedido.java" code={`
public enum EstadoPedido {
    PENDIENTE {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return nuevo == CONFIRMADO || nuevo == CANCELADO;
        }
    },
    CONFIRMADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return nuevo == ENVIADO || nuevo == CANCELADO;
        }
    },
    ENVIADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return nuevo == ENTREGADO;
        }
    },
    ENTREGADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return false; // Estado final
        }
    },
    CANCELADO {
        @Override
        public boolean puedeTransicionarA(EstadoPedido nuevo) {
            return false; // Estado final
        }
    };

    // Método abstracto que cada valor DEBE implementar
    public abstract boolean puedeTransicionarA(EstadoPedido nuevo);

    // Método concreto compartido por todos
    public void transicionar(EstadoPedido nuevo) {
        if (!puedeTransicionarA(nuevo)) {
            throw new IllegalStateException(
                "No se puede ir de " + this + " a " + nuevo
            );
        }
    }
}

// Uso:
// EstadoPedido.PENDIENTE.puedeTransicionarA(EstadoPedido.ENVIADO); // false
// EstadoPedido.PENDIENTE.puedeTransicionarA(EstadoPedido.CONFIRMADO); // true
`} />

        <InfoBox type="angular">
          En Angular/TypeScript lograrías esto con un Map o switch. En Java, el enum encapsula la lógica
          de transición de estados directamente, haciendo imposible crear un estado inválido. Esto se usa
          mucho en e-commerce (estados de pedido), workflows (estados de aprobación) y máquinas de estado.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 20</h2>
        <Exercise
          number={1}
          title="Enum Moneda con conversión"
          description={`Crea un enum Moneda con valores: USD, EUR, MXN, GBP.
Cada uno tiene un campo tasaCambioAUSD (double):
- USD: 1.0, EUR: 1.08, MXN: 0.058, GBP: 1.27

Métodos:
- convertir(double monto, Moneda destino) — convierte monto de esta moneda a la destino
- toString con formato "USD (1 USD = 1.00 USD)"

Prueba convirtiendo 100 EUR a MXN.`}
          hint="Convierte primero a USD multiplicando por tasaCambioAUSD, luego divide entre la tasa destino."
          solution={`public enum Moneda {
    USD(1.0), EUR(1.08), MXN(0.058), GBP(1.27);

    private final double tasaAUSD;

    Moneda(double tasaAUSD) { this.tasaAUSD = tasaAUSD; }

    public double convertir(double monto, Moneda destino) {
        double enUSD = monto * this.tasaAUSD;
        return enUSD / destino.tasaAUSD;
    }

    public static void main(String[] args) {
        double resultado = EUR.convertir(100, MXN);
        System.out.printf("100 EUR = %.2f MXN%n", resultado);

        double r2 = GBP.convertir(50, USD);
        System.out.printf("50 GBP = %.2f USD%n", r2);
    }
}`}
          solutionFilename="Moneda.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-20: enums con campos, metodos, switch"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 21</strong> — Comparable y Comparator: ordenar objetos.
          </p>
        </div>
      </section>
    </div>
  );
}
