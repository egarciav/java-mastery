import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function FechasAPIPage() {
  return (
    <div>
      <DayHeader
        day={28}
        title="API de Fechas"
        duration="45 min"
        commitMsg="dia-28: LocalDate, LocalDateTime, Duration, DateTimeFormatter"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy dominarás <code className="text-primary">java.time</code> — la API moderna de fechas introducida en Java 8.
        Es inmutable, thread-safe y clara. Si alguna vez usaste <code className="text-primary">new Date()</code> en
        JavaScript y sufriste con zonas horarias, aquí encontrarás la solución profesional.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">¿Por qué java.time y no Date?</h2>

        <ThinkSection title="java.time es inmutable — como los strings">
          <p>
            Cada operación retorna un <strong className="text-text">nuevo objeto</strong>. 
            <code className="text-primary">hoy.plusDays(1)</code> no modifica <code className="text-primary">hoy</code>,
            retorna un nuevo LocalDate. Esto evita bugs sutiles de mutabilidad que plagan a
            <code className="text-primary"> new Date()</code> en JavaScript.
          </p>
          <p>
            En TypeScript usas <code className="text-primary">new Date()</code> que es mutable, tiene meses 0-indexed (enero=0),
            y mezcla fecha con hora sin forma de separarlas. Java tuvo el mismo problema con <code className="text-primary">java.util.Date</code>,
            pero lo resolvió creando java.time — una API completamente nueva basada en la biblioteca Joda-Time.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          La API java.time separa claramente los conceptos: <strong className="text-text">LocalDate</strong> (solo fecha),
          <strong className="text-text"> LocalTime</strong> (solo hora), <strong className="text-text">LocalDateTime</strong> (fecha+hora sin zona),
          <strong className="text-text"> ZonedDateTime</strong> (fecha+hora+zona), e <strong className="text-text">Instant</strong> (momento exacto en UTC).
          Cada clase existe para un propósito específico.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {[
            { a: 'LocalDate', d: 'Solo fecha (cumpleaños, fecha de factura). Sin hora ni zona.' },
            { a: 'LocalTime', d: 'Solo hora (hora de alarma, horario). Sin fecha ni zona.' },
            { a: 'LocalDateTime', d: 'Fecha + hora (evento local, cita). Sin zona horaria.' },
            { a: 'ZonedDateTime', d: 'Fecha + hora + zona (vuelos, reuniones internacionales).' },
            { a: 'Instant', d: 'Momento en UTC (timestamps, logs, auditoría).' },
            { a: 'Duration / Period', d: 'Diferencia entre tiempos (Duration) o fechas (Period).' },
          ].map(({ a, d }) => (
            <div key={a} className="p-3 bg-bg-secondary rounded-lg border border-border">
              <code className="text-primary text-sm">{a}</code>
              <p className="text-text-muted text-xs mt-1">{d}</p>
            </div>
          ))}
        </div>

        <CodeBlock filename="FechasModernas.java" code={`
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class FechasModernas {
    public static void main(String[] args) {
        // LocalDate: solo fecha (sin hora)
        LocalDate hoy = LocalDate.now();
        LocalDate navidad = LocalDate.of(2025, 12, 25);
        LocalDate parsed = LocalDate.parse("2025-06-15");

        System.out.println(hoy);        // 2025-03-11
        System.out.println(hoy.getYear());     // 2025
        System.out.println(hoy.getMonth());    // MARCH
        System.out.println(hoy.getDayOfWeek()); // TUESDAY

        // LocalTime: solo hora (sin fecha)
        LocalTime ahora = LocalTime.now();
        LocalTime almuerzo = LocalTime.of(13, 30, 0);

        // LocalDateTime: fecha + hora
        LocalDateTime fechaHora = LocalDateTime.now();
        LocalDateTime especifico = LocalDateTime.of(2025, 6, 15, 14, 30);

        // ZonedDateTime: con zona horaria
        ZonedDateTime conZona = ZonedDateTime.now(ZoneId.of("America/Mexico_City"));

        // Operaciones (INMUTABLES — siempre retornan nuevo objeto)
        LocalDate manana = hoy.plusDays(1);
        LocalDate mesAntes = hoy.minusMonths(1);
        LocalDate proxAnio = hoy.plusYears(1);

        // Comparar
        System.out.println(hoy.isBefore(navidad)); // true
        System.out.println(hoy.isAfter(navidad));  // false

        // Diferencia entre fechas
        long dias = ChronoUnit.DAYS.between(hoy, navidad);
        Period periodo = Period.between(hoy, navidad);
        System.out.println(dias + " días hasta Navidad");
        System.out.println(periodo.getMonths() + " meses y " + periodo.getDays() + " días");

        // Formatear
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formateada = hoy.format(formato); // "11/03/2025"

        DateTimeFormatter conHora = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String completa = fechaHora.format(conHora);

        // Parsear con formato personalizado
        LocalDate desde = LocalDate.parse("15/06/2025", formato);

        // Instant: momento exacto en UTC (para timestamps)
        Instant timestamp = Instant.now();
        long epoch = timestamp.toEpochMilli();
    }
}
`} />
        <InfoBox type="warning">
          Nunca uses <code className="text-primary">java.util.Date</code> ni <code className="text-primary">java.util.Calendar</code>.
          Son APIs antiguas, mutables y confusas. Siempre usa <code className="text-primary">java.time.*</code> (Java 8+).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 28</h2>
        <Exercise
          number={1}
          title="Calculadora de edad y eventos"
          description={`Crea CalculadoraFechas.java que:
1. Calcule tu edad exacta en años, meses y días (usa Period)
2. Calcule cuántos días faltan para tu próximo cumpleaños
3. Calcule qué día de la semana naciste
4. Muestre la fecha formateada en español: "martes 15 de junio de 2025"`}
          hint="Period.between(nacimiento, hoy), ChronoUnit.DAYS.between(), getDayOfWeek(), DateTimeFormatter.ofPattern()"
          solution={`import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Locale;

public class CalculadoraFechas {
    public static void main(String[] args) {
        LocalDate nacimiento = LocalDate.of(1995, 6, 15);
        LocalDate hoy = LocalDate.now();

        Period edad = Period.between(nacimiento, hoy);
        System.out.printf("Edad: %d años, %d meses, %d días%n",
            edad.getYears(), edad.getMonths(), edad.getDays());

        System.out.println("Naciste un: " + nacimiento.getDayOfWeek());

        LocalDate proxCumple = nacimiento.withYear(hoy.getYear());
        if (proxCumple.isBefore(hoy) || proxCumple.isEqual(hoy))
            proxCumple = proxCumple.plusYears(1);
        long diasFaltan = ChronoUnit.DAYS.between(hoy, proxCumple);
        System.out.println("Faltan " + diasFaltan + " días para tu cumple");

        DateTimeFormatter fmt = DateTimeFormatter
            .ofPattern("EEEE dd 'de' MMMM 'de' yyyy", new Locale("es"));
        System.out.println(hoy.format(fmt));
    }
}`}
          solutionFilename="CalculadoraFechas.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-28: LocalDate, LocalDateTime, Duration, formatter"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 29</strong> — Records: clases de datos inmutables con una línea.
          </p>
        </div>
      </section>
    </div>
  );
}
