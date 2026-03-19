import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function EnumsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Enums</h1>
      <p className="text-text-muted text-lg mb-8">Tipos enumerados con valores fijos y seguros</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Enum básico</h2>
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
    </div>
  );
}
