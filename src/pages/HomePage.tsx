import { Coffee, BookOpen, Rocket, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">☕</span>
          <div>
            <h1 className="text-4xl font-bold text-java">Java Mastery</h1>
            <p className="text-text-muted text-lg">Guía Completa 2026 — De cero a experto</p>
          </div>
        </div>
        <p className="text-text-muted leading-relaxed mt-4 text-lg">
          Bienvenido a tu guía definitiva para aprender <strong className="text-text">Java</strong> desde cero.
          Este sitio fue diseñado para desarrolladores que vienen de <strong className="text-angular">Angular/TypeScript</strong> y
          quieren dominar Java y <strong className="text-spring">Spring Boot</strong> de manera práctica y progresiva.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        <div className="bg-surface-light border border-border rounded-xl p-6">
          <Coffee size={24} className="text-java mb-3" />
          <h3 className="font-semibold text-text mb-2">Java Core</h3>
          <p className="text-text-muted text-sm">
            Desde sintaxis básica, tipos de datos y variables hasta POO, colecciones, generics,
            lambdas, streams y concurrencia. Todo explicado paso a paso.
          </p>
        </div>
        <div className="bg-surface-light border border-border rounded-xl p-6">
          <Leaf size={24} className="text-spring mb-3" />
          <h3 className="font-semibold text-text mb-2">Spring Boot</h3>
          <p className="text-text-muted text-sm">
            IoC, inyección de dependencias, controllers REST, servicios, JPA/Hibernate,
            Spring Security y testing. Todo lo que necesitas para backend profesional.
          </p>
        </div>
        <div className="bg-surface-light border border-border rounded-xl p-6">
          <BookOpen size={24} className="text-accent mb-3" />
          <h3 className="font-semibold text-text mb-2">Enfoque Práctico</h3>
          <p className="text-text-muted text-sm">
            Cada concepto incluye código real que puedes copiar, ejecutar y modificar.
            Nada ambiguo: explicaciones claras del porqué de cada cosa.
          </p>
        </div>
        <div className="bg-surface-light border border-border rounded-xl p-6">
          <Rocket size={24} className="text-primary mb-3" />
          <h3 className="font-semibold text-text mb-2">Junior → Senior</h3>
          <p className="text-text-muted text-sm">
            Ruta de aprendizaje completa: fundamentos, intermedio, avanzado y Java moderno.
            Incluye patrones de diseño y mejores prácticas actuales.
          </p>
        </div>
      </div>

      <div className="bg-surface-light border border-border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-text mb-4">🗺️ Ruta de Aprendizaje Recomendada</h2>
        <div className="space-y-3">
          <RoadmapItem number={1} title="Fundamentos de Java" desc="Sintaxis, tipos, variables, operadores, strings" link="/introduccion" />
          <RoadmapItem number={2} title="Control de Flujo" desc="Condicionales, bucles, arrays" link="/condicionales" />
          <RoadmapItem number={3} title="POO" desc="Clases, objetos, herencia, polimorfismo, interfaces" link="/metodos" />
          <RoadmapItem number={4} title="Java Intermedio" desc="Colecciones, excepciones, generics, enums" link="/colecciones" />
          <RoadmapItem number={5} title="Java Avanzado" desc="Lambdas, streams, optional, concurrencia, I/O, fechas" link="/lambdas" />
          <RoadmapItem number={6} title="Java Moderno" desc="Records, sealed classes, pattern matching, patrones de diseño" link="/records" />
          <RoadmapItem number={7} title="Spring Boot" desc="Setup, anotaciones, controllers, servicios, JPA, security, testing" link="/spring-intro" />
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
        <h3 className="text-primary font-semibold mb-2">💡 Consejo para desarrolladores Angular</h3>
        <p className="text-text-muted text-sm leading-relaxed">
          A lo largo de esta guía encontrarás cajas de <strong className="text-angular">"Comparación con Angular/TypeScript"</strong> que
          te ayudarán a relacionar conceptos de Java con lo que ya conoces. TypeScript y Java comparten
          muchos conceptos (tipado estático, clases, interfaces, generics), así que tu transición será más
          natural de lo que piensas.
        </p>
      </div>
    </div>
  );
}

function RoadmapItem({ number, title, desc, link }: { number: number; title: string; desc: string; link: string }) {
  return (
    <Link to={link} className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-lighter/30 transition-colors group">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center">
        {number}
      </span>
      <div>
        <h4 className="font-medium text-text group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-text-muted text-sm">{desc}</p>
      </div>
    </Link>
  );
}
