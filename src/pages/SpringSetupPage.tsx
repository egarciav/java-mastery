import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringSetupPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Setup del Proyecto</h1>
      <p className="text-text-muted text-lg mb-8">Crear y configurar un proyecto Spring Boot desde cero</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Spring Initializr</h2>
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
    </div>
  );
}
