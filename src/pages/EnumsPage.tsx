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
        Hoy descubrirás que los enums de Java son clases completas con superpoderes.
        Pueden tener campos, constructores, métodos e implementar interfaces.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Enum básico</h2>

        <ThinkSection title="Enums Java vs TypeScript — son clases completas">
          <p>
            En TypeScript, los enums son básicamente constantes numéricas o strings. En Java,
            cada valor de un enum es una <strong className="text-text">instancia de una clase</strong>.
            Esto significa que pueden tener campos, métodos y constructores.
          </p>
          <p>
            Compara con <code className="text-primary">==</code> (no <code className="text-primary">.equals()</code>)
            porque cada valor es una instancia singleton.
          </p>
        </ThinkSection>

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
        <InfoBox type="tip">
          Los enums en Java son mucho más poderosos que en TypeScript. Son clases completas que pueden
          tener campos, constructores, métodos e implementar interfaces. Úsalos siempre que tengas un
          conjunto fijo de valores conocidos.
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
