import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringSetupPage() {
  return (
    <div>
      <DayHeader
        day={35}
        title="Setup del Proyecto"
        duration="50 min"
        commitMsg="dia-35: spring initializr, pom.xml, application.properties"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy crearás tu primer proyecto Spring Boot desde cero. Usarás Spring Initializr para generar
        la estructura, entenderás qué es <code className="text-primary">pom.xml</code> (tu package.json de Java),
        y configurarás <code className="text-primary">application.properties</code> (tu environment.ts).
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Spring Initializr — El generador de proyectos</h2>

        <ThinkSection title="start.spring.io = ng new para Java">
          <p>
            Así como <code className="text-primary">ng new mi-app</code> genera un proyecto Angular completo con
            estructura de carpetas, dependencias y configuración, <strong className="text-text">Spring Initializr</strong>
            (start.spring.io) genera un proyecto Spring Boot con Maven/Gradle, dependencias configuradas,
            clase principal y archivos de configuración. Solo eliges qué necesitas y descargas un ZIP.
          </p>
          <p>
            <strong className="text-text">Maven</strong> es el gestor de dependencias más usado en Java (como npm).
            El archivo <code className="text-primary">pom.xml</code> es tu <code className="text-primary">package.json</code>:
            lista las dependencias (starters), versiones, y plugins de build. Los "starters" son paquetes
            preconfigurados: <code className="text-primary">spring-boot-starter-web</code> incluye Tomcat + Spring MVC + Jackson,
            <code className="text-primary"> spring-boot-starter-data-jpa</code> incluye Hibernate + DataSource.
          </p>
        </ThinkSection>

        <p className="text-text-muted leading-relaxed mb-4">
          Ve a <strong className="text-text">start.spring.io</strong> y configura tu proyecto:
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-2 mb-4">
          <li><strong className="text-text">Project:</strong> Maven o Gradle</li>
          <li><strong className="text-text">Language:</strong> Java</li>
          <li><strong className="text-text">Spring Boot:</strong> última versión estable (3.x)</li>
          <li><strong className="text-text">Java:</strong> 21 (LTS recomendado)</li>
          <li><strong className="text-text">Dependencies:</strong> Spring Web, Spring Data JPA, H2 Database, Lombok</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Clase principal</h2>
        <CodeBlock filename="MiAppApplication.java" code={`
package com.miapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // Combina @Configuration + @EnableAutoConfiguration + @ComponentScan
public class MiAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(MiAppApplication.class, args);
    }
}
// Ejecutar: ./mvnw spring-boot:run
// O desde IDE: Run MiAppApplication.main()
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">application.properties</h2>
        <CodeBlock language="bash" filename="src/main/resources/application.properties" code={`
# Puerto del servidor
server.port=8080

# Base de datos H2 (en memoria, para desarrollo)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Consola H2 (acceder en http://localhost:8080/h2-console)
spring.h2.console.enabled=true
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">pom.xml (dependencias Maven)</h2>
        <CodeBlock language="markup" filename="pom.xml (fragmento)" code={`
<dependencies>
    <!-- Spring Web: REST APIs -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Data JPA: acceso a BD -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- H2: BD en memoria para desarrollo -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Lombok: reduce boilerplate -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <!-- Test -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
`} />
        <InfoBox type="angular">
          El <code className="text-primary">pom.xml</code> de Maven es como el <code className="text-primary">package.json</code> de npm. 
          Las dependencias se descargan del repositorio central de Maven (como npmjs.com).
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 35</h2>
        <Exercise
          number={1}
          title="Tu primer Hello World en Spring Boot"
          description={`1. Ve a start.spring.io y genera un proyecto con Spring Web
2. Importa en IntelliJ
3. Crea HolaController.java en el paquete controller
4. Agrega @RestController y un @GetMapping("/hola") que retorne "Hola Spring Boot!"
5. Ejecuta y visita http://localhost:8080/hola`}
          hint='@GetMapping("/hola") public String hola() { return "Hola Spring Boot!"; }'
          solution={`package com.miapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {

    @GetMapping("/hola")
    public String hola() {
        return "Hola Spring Boot!";
    }

    @GetMapping("/fecha")
    public String fecha() {
        return "Hoy es: " + java.time.LocalDate.now();
    }
}`}
          solutionFilename="HolaController.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-35: setup Spring Boot, primer endpoint /hola"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 36</strong> — Anotaciones de Spring: el lenguaje del framework.
          </p>
        </div>
      </section>
    </div>
  );
}
