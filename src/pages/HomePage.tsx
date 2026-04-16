import { Coffee, Code2, Brain, Leaf, GitCommit, Target, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const roadmap = [
  {
    phase: 'Fase 1 — Fundamentos',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/25',
    days: [
      { day: 1, title: 'Introducción a Java', link: '/introduccion', desc: 'Qué es Java, JDK, JVM, tu primer programa' },
      { day: 2, title: 'Sintaxis Básica', link: '/sintaxis', desc: 'Estructura de un programa, main, paquetes, convenciones' },
      { day: 3, title: 'Tipos de Datos', link: '/tipos-datos', desc: 'Primitivos vs objetos, casting, wrappers' },
      { day: 4, title: 'Variables y Constantes', link: '/variables', desc: 'Declaración, scope, final, valores por defecto' },
      { day: 5, title: 'Operadores', link: '/operadores', desc: 'Aritméticos, lógicos, comparación, ternario' },
      { day: 6, title: 'Strings', link: '/strings', desc: 'Inmutabilidad, métodos, StringBuilder, formato' },
    ],
  },
  {
    phase: 'Fase 2 — Control de Flujo',
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/25',
    days: [
      { day: 7, title: 'Condicionales', link: '/condicionales', desc: 'if/else, switch, pattern matching' },
      { day: 8, title: 'Bucles', link: '/bucles', desc: 'for, while, do-while, for-each, break/continue' },
      { day: 9, title: 'Arrays', link: '/arrays', desc: 'Declaración, iteración, arrays multidimensionales' },
    ],
  },
  {
    phase: 'Fase 3 — POO',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/25',
    days: [
      { day: 10, title: 'Métodos', link: '/metodos', desc: 'Definir, sobrecargar, varargs, paso por valor' },
      { day: 11, title: 'Clases y Objetos', link: '/clases-objetos', desc: 'Constructores, this, static, equals' },
      { day: 12, title: 'Encapsulamiento', link: '/encapsulamiento', desc: 'Getters/setters, modificadores de acceso' },
      { day: 13, title: 'Herencia', link: '/herencia', desc: 'extends, super, sobreescritura de métodos' },
      { day: 14, title: 'Polimorfismo', link: '/polimorfismo', desc: 'Upcasting, downcasting, instanceof' },
      { day: 15, title: 'Interfaces', link: '/interfaces', desc: 'Contratos, default methods, implementación múltiple' },
      { day: 16, title: 'Clases Abstractas', link: '/clases-abstractas', desc: 'Abstract vs interface, cuándo usar cada uno' },
    ],
  },
  {
    phase: 'Fase 4 — Intermedio',
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/25',
    days: [
      { day: 17, title: 'Colecciones', link: '/colecciones', desc: 'List, Set, Map, Queue, iteradores' },
      { day: 18, title: 'Excepciones', link: '/excepciones', desc: 'try/catch, checked vs unchecked, custom exceptions' },
      { day: 19, title: 'Generics', link: '/generics', desc: 'Tipos parametrizados, wildcards, bounded types' },
      { day: 20, title: 'Enums', link: '/enums', desc: 'Constantes tipadas, métodos en enums' },
      { day: 21, title: 'Comparable y Comparator', link: '/comparador', desc: 'Ordenamiento personalizado, cadenas de comparación' },
    ],
  },
  {
    phase: 'Fase 5 — Avanzado',
    color: 'text-[#c084fc]',
    bg: 'bg-[#c084fc]/10',
    border: 'border-[#c084fc]/25',
    days: [
      { day: 22, title: 'Lambdas', link: '/lambdas', desc: 'Funciones anónimas, interfaces funcionales' },
      { day: 23, title: 'Streams API', link: '/streams', desc: 'map, filter, reduce, collect, operaciones en cadena' },
      { day: 24, title: 'Optional', link: '/optional', desc: 'Manejo seguro de null, encadenamiento' },
      { day: 25, title: 'Concurrencia', link: '/concurrencia', desc: 'Threads, ExecutorService, CompletableFuture' },
      { day: 26, title: 'Virtual Threads', link: '/virtual-threads', desc: 'Java 21: hilos ligeros de alto rendimiento' },
      { day: 27, title: 'I/O y Archivos', link: '/io-archivos', desc: 'Files, Path, streams de archivos, serialización' },
      { day: 28, title: 'API de Fechas', link: '/fechas-api', desc: 'LocalDate, LocalDateTime, Duration, formateo' },
    ],
  },
  {
    phase: 'Fase 6 — Java Moderno',
    color: 'text-[#f472b6]',
    bg: 'bg-[#f472b6]/10',
    border: 'border-[#f472b6]/25',
    days: [
      { day: 29, title: 'Records', link: '/records', desc: 'DTOs inmutables en una línea' },
      { day: 30, title: 'Sealed Classes', link: '/sealed-classes', desc: 'Jerarquías controladas de herencia' },
      { day: 31, title: 'Pattern Matching', link: '/pattern-matching', desc: 'instanceof mejorado, switch expressions' },
      { day: 32, title: 'Patrones de Diseño', link: '/patrones-diseno', desc: 'Builder, Factory, Strategy, Observer' },
      { day: 33, title: 'Text Blocks y var', link: '/text-blocks', desc: 'Strings multilínea, inferencia de tipos' },
    ],
  },
  {
    phase: 'Fase 7 — Spring Boot',
    color: 'text-spring',
    bg: 'bg-spring/10',
    border: 'border-spring/25',
    days: [
      { day: 34, title: 'Intro a Spring', link: '/spring-intro', desc: 'IoC, DI, por qué Spring' },
      { day: 35, title: 'Setup y Estructura', link: '/spring-setup', desc: 'Spring Initializr, pom.xml, estructura de proyecto' },
      { day: 36, title: 'Anotaciones', link: '/spring-anotaciones', desc: '@Component, @Service, @Repository, @Autowired' },
      { day: 37, title: 'Controllers REST', link: '/spring-controllers', desc: '@RestController, endpoints, ResponseEntity' },
      { day: 38, title: 'Servicios', link: '/spring-services', desc: 'Capa de negocio, @Transactional' },
      { day: 39, title: 'Repositories y JPA', link: '/spring-repositories', desc: 'Spring Data JPA, queries, relaciones' },
      { day: 40, title: 'Spring Security', link: '/spring-security', desc: 'Autenticación, JWT, autorización' },
      { day: 41, title: 'Manejo de Excepciones', link: '/spring-excepciones', desc: '@ControllerAdvice, errores globales' },
      { day: 42, title: 'Validación', link: '/spring-validacion', desc: '@Valid, Jakarta Validation, custom validators' },
      { day: 43, title: 'DTOs y MapStruct', link: '/spring-dtos', desc: 'Mapeo de entidades, separación de capas' },
      { day: 44, title: 'Perfiles y Config', link: '/spring-perfiles', desc: 'application.yml, @Profile, @Value' },
      { day: 45, title: 'Testing', link: '/spring-testing', desc: 'JUnit 5, Mockito, @WebMvcTest, MockMvc' },
    ],
  },
];

export default function HomePage() {
  const totalDays = roadmap.reduce((acc, phase) => acc + phase.days.length, 0);

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">☕</span>
          <div>
            <h1 className="text-4xl font-bold text-java">Java Mastery</h1>
            <p className="text-text-muted text-lg mt-1">{totalDays} días de Java — De cero a Spring Boot</p>
          </div>
        </div>
        <p className="text-text-muted leading-relaxed mt-4">
          Este no es un curso que solo te dice <strong className="text-text">qué</strong> aprender.
          Aquí vas a <strong className="text-text">pensar como desarrollador Java</strong>: cada día tiene ejercicios
          que escribes tú mismo, explicaciones de <em>por qué</em> las cosas funcionan así, y un commit
          que puedes subir a tu GitHub para documentar tu progreso.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-10">
        <div className="bg-surface-light border border-border rounded-xl p-5 text-center">
          <Code2 size={24} className="text-primary mx-auto mb-2" />
          <h3 className="font-semibold text-text text-sm">Ejercicios reales</h3>
          <p className="text-text-muted text-xs mt-1">Código que escribes, no que lees</p>
        </div>
        <div className="bg-surface-light border border-border rounded-xl p-5 text-center">
          <Brain size={24} className="text-accent mx-auto mb-2" />
          <h3 className="font-semibold text-text text-sm">Cómo pensarlo</h3>
          <p className="text-text-muted text-xs mt-1">El razonamiento detrás de cada decisión</p>
        </div>
        <div className="bg-surface-light border border-border rounded-xl p-5 text-center">
          <GitCommit size={24} className="text-success mx-auto mb-2" />
          <h3 className="font-semibold text-text text-sm">Un commit por día</h3>
          <p className="text-text-muted text-xs mt-1">Progreso real en tu GitHub</p>
        </div>
        <div className="bg-surface-light border border-border rounded-xl p-5 text-center">
          <Trophy size={24} className="text-warning mx-auto mb-2" />
          <h3 className="font-semibold text-text text-sm">De cero a Spring</h3>
          <p className="text-text-muted text-xs mt-1">{totalDays} días, 7 fases, dominio completo</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-text mb-2 flex items-center gap-2">
          <Target size={20} className="text-primary" />
          Tu ruta día a día
        </h2>
        <p className="text-text-muted text-sm mb-6">Cada día tiene explicación, ejercicios y un commit para tu repo.</p>

        <div className="space-y-6">
          {roadmap.map((phase) => (
            <div key={phase.phase} className={`rounded-xl border ${phase.border} overflow-hidden`}>
              <div className={`${phase.bg} px-5 py-3 flex items-center gap-2`}>
                <Coffee size={16} className={phase.color} />
                <span className={`font-bold text-sm ${phase.color}`}>{phase.phase}</span>
                <span className="text-text-muted text-xs ml-auto">{phase.days.length} días</span>
              </div>
              <div className="divide-y divide-border/30">
                {phase.days.map((d) => (
                  <Link
                    key={d.day}
                    to={d.link}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-surface-lighter/20 transition-colors group"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface-lighter/50 text-text-muted font-bold text-xs flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      {d.day}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-medium text-sm text-text group-hover:text-primary transition-colors truncate">
                        {d.title}
                      </h4>
                      <p className="text-text-muted text-xs truncate">{d.desc}</p>
                    </div>
                    <Zap size={14} className="text-text-muted/30 ml-auto flex-shrink-0 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
        <h3 className="text-success font-semibold mb-3 flex items-center gap-2">
          <GitCommit size={18} /> Cómo usar esta guía
        </h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><strong className="text-text">1.</strong> Crea un repo en GitHub: <code className="text-success font-mono text-xs">java-mastery-45-dias</code></p>
          <p><strong className="text-text">2.</strong> Cada día, lee la lección, resuelve los ejercicios y escribe el código tú mismo</p>
          <p><strong className="text-text">3.</strong> Haz commit con el mensaje sugerido al final de cada lección</p>
          <p><strong className="text-text">4.</strong> Al terminar tendrás {totalDays} commits que demuestran tu dominio de Java</p>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
        <h3 className="text-primary font-semibold mb-2">💡 Para desarrolladores Angular/TypeScript</h3>
        <p className="text-text-muted text-sm leading-relaxed">
          Cada lección incluye comparaciones con <strong className="text-angular">Angular/TypeScript</strong> para
          que conectes lo que ya sabes con Java. TypeScript y Java comparten tipado estático, clases,
          interfaces y generics — tu transición será más natural de lo que piensas.
        </p>
      </div>
    </div>
  );
}
