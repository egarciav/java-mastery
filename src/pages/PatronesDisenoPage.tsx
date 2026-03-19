import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function PatronesDisenoPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-java mb-2">Patrones de Diseño</h1>
      <p className="text-text-muted text-lg mb-8">Los patrones más usados en Java y Spring Boot</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Singleton</h2>
        <p className="text-text-muted leading-relaxed mb-4">Una sola instancia en toda la aplicación.</p>
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
    </div>
  );
}
