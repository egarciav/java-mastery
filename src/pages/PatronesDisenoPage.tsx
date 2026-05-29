import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function PatronesDisenoPage() {
  return (
    <div>
      <DayHeader
        day={32}
        title="Patrones de Diseño"
        duration="55 min"
        commitMsg="dia-32: singleton, builder, strategy, observer"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás los patrones de diseño más usados en Java empresarial. Los patrones de diseño
        son soluciones probadas a problemas recurrentes en el diseño de software. No son código que copias,
        sino <strong className="text-text">recetas mentales</strong> para resolver problemas de forma elegante y mantenible.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Singleton — Una sola instancia global</h2>

        <ThinkSection title="Spring Boot YA usa todos estos patrones por ti">
          <p>
            No necesitas implementar Singleton manualmente — Spring lo hace con <code className="text-primary">@Service</code> (scope singleton por defecto).
            No necesitas implementar Strategy manualmente — Spring lo hace con múltiples <code className="text-primary">@Service</code> que implementan
            la misma interfaz + <code className="text-primary">@Qualifier</code>. No necesitas Observer — Spring tiene
            <code className="text-primary"> ApplicationEventPublisher</code>.
          </p>
          <p>
            Entonces, ¿por qué aprenderlos? Porque <strong className="text-text">entender los patrones te permite entender cómo
            funciona Spring internamente</strong>. Cuando ves <code className="text-primary">@Bean</code> sabes que es una Factory.
            Cuando ves filtros de seguridad encadenados, sabes que es Chain of Responsibility.
            Cuando ves <code className="text-primary">ResponseEntity.ok().body()</code>, sabes que es un Builder.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          El patrón <strong className="text-text">Singleton</strong> garantiza que solo exista UNA instancia de una clase
          en toda la aplicación y provee un punto de acceso global. Útil para conexiones de BD, caches, y configuración.
        </p>
        <CodeBlock filename="Singleton.java" code={`
public class DatabaseConnection {
    private static volatile DatabaseConnection instance;
    private String url;

    private DatabaseConnection() { // constructor privado
        this.url = "jdbc:mysql://localhost:3306/mydb";
    }

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnection.class) {
                if (instance == null) {
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
}
// En Spring Boot: @Service, @Component ya son singletons por defecto
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Builder</h2>
        <p className="text-text-muted leading-relaxed mb-4">Construir objetos complejos paso a paso.</p>
        <CodeBlock filename="Builder.java" code={`
public class Usuario {
    private final String nombre;
    private final String email;
    private final int edad;
    private final String telefono;

    private Usuario(Builder builder) {
        this.nombre = builder.nombre;
        this.email = builder.email;
        this.edad = builder.edad;
        this.telefono = builder.telefono;
    }

    public static class Builder {
        private final String nombre; // obligatorio
        private String email = "";
        private int edad = 0;
        private String telefono = "";

        public Builder(String nombre) { this.nombre = nombre; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder edad(int edad) { this.edad = edad; return this; }
        public Builder telefono(String tel) { this.telefono = tel; return this; }
        public Usuario build() { return new Usuario(this); }
    }
}

// Uso fluido
Usuario u = new Usuario.Builder("Carlos")
    .email("carlos@mail.com")
    .edad(25)
    .build();
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Strategy</h2>
        <p className="text-text-muted leading-relaxed mb-4">Cambiar algoritmo en tiempo de ejecución.</p>
        <CodeBlock filename="Strategy.java" code={`
// Interfaz de estrategia
public interface OrdenStrategy {
    double calcularPrecio(double precioBase);
}

// Implementaciones
public class PrecioNormal implements OrdenStrategy {
    public double calcularPrecio(double precioBase) { return precioBase; }
}

public class DescuentoVIP implements OrdenStrategy {
    public double calcularPrecio(double precioBase) { return precioBase * 0.8; }
}

// Contexto
public class CarritoCompras {
    private OrdenStrategy strategy;

    public void setStrategy(OrdenStrategy strategy) { this.strategy = strategy; }

    public double calcularTotal(double precioBase) {
        return strategy.calcularPrecio(precioBase);
    }
}

// Con lambdas (más moderno)
OrdenStrategy blackFriday = precio -> precio * 0.5;
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Observer</h2>
        <p className="text-text-muted leading-relaxed mb-4">Notificar cambios a múltiples objetos.</p>
        <CodeBlock filename="Observer.java" code={`
import java.util.ArrayList;
import java.util.List;

public interface EventListener {
    void onEvent(String evento);
}

public class EventManager {
    private List<EventListener> listeners = new ArrayList<>();

    public void subscribe(EventListener listener) { listeners.add(listener); }
    public void unsubscribe(EventListener listener) { listeners.remove(listener); }

    public void notify(String evento) {
        for (EventListener listener : listeners) {
            listener.onEvent(evento);
        }
    }
}

// Uso
EventManager manager = new EventManager();
manager.subscribe(e -> System.out.println("Logger: " + e));
manager.subscribe(e -> System.out.println("Email: " + e));
manager.notify("Usuario creado"); // ambos listeners reciben el evento
`} />
        <InfoBox type="spring">
          Spring Boot usa estos patrones internamente: <strong>Singleton</strong> (beans), 
          <strong> Strategy</strong> (múltiples implementaciones de interfaz + @Qualifier),
          <strong> Observer</strong> (ApplicationEventPublisher), <strong>Dependency Injection</strong> en todo.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 32</h2>
        <Exercise
          number={1}
          title="Sistema de descuentos con Strategy"
          description={`Crea un sistema de descuentos usando el patrón Strategy:
1. Interface DescuentoStrategy con método double aplicar(double precio)
2. SinDescuento, Descuento10, DescuentoBlackFriday (50%), DescuentoPorMonto (>100 = 15%)
3. Clase Carrito que reciba una strategy y calcule el total
4. En main: prueba cambiando la strategy dinámicamente`}
          hint="Puedes usar lambdas en lugar de clases: DescuentoStrategy bf = precio -> precio * 0.5;"
          solution={`import java.util.*;

public class SistemaDescuentos {
    interface DescuentoStrategy {
        double aplicar(double precio);
    }

    static class Carrito {
        private List<Double> precios = new ArrayList<>();
        private DescuentoStrategy strategy = p -> p; // sin descuento

        void agregar(double precio) { precios.add(precio); }
        void setStrategy(DescuentoStrategy s) { this.strategy = s; }

        double total() {
            return precios.stream()
                .mapToDouble(strategy::aplicar).sum();
        }
    }

    public static void main(String[] args) {
        Carrito c = new Carrito();
        c.agregar(100); c.agregar(200); c.agregar(50);

        System.out.printf("Normal: $%.2f%n", c.total());

        c.setStrategy(p -> p * 0.9);
        System.out.printf("10%% off: $%.2f%n", c.total());

        c.setStrategy(p -> p > 100 ? p * 0.85 : p);
        System.out.printf("15%% >100: $%.2f%n", c.total());
    }
}`}
          solutionFilename="SistemaDescuentos.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-32: patrones singleton, builder, strategy, observer"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 33</strong> — Text Blocks, var y novedades del lenguaje.
          </p>
        </div>
      </section>
    </div>
  );
}
