# ☕ Java Mastery

Mi guía personal de Java y Spring Boot — desde lo básico hasta APIs REST production-ready.

## 🎯 ¿Qué es esto?

Un sitio web interactivo donde documenté todo lo que aprendí de Java mientras venía del mundo de TypeScript/Angular. No es un tutorial formal, es más como mis notas organizadas con ejemplos de código que realmente funcionan.

**Ver el sitio:** [java-mastery.netlify.app](https://java-mastery.netlify.app) _(próximamente)_

## 📚 Lo que cubro

### Java Core
- **Fundamentos** — Sintaxis, tipos, variables, operadores, strings
- **Control de flujo** — Condicionales, bucles, arrays
- **POO** — Clases, herencia, polimorfismo, interfaces, encapsulamiento
- **Intermedio** — Colecciones, excepciones, generics, enums, comparadores
- **Avanzado** — Lambdas, streams, Optional, concurrencia, I/O, fechas
- **Java Moderno** — Records, sealed classes, pattern matching, text blocks, virtual threads (Java 21)

### Spring Boot
- Setup y estructura de proyectos
- Anotaciones esenciales
- Controllers REST (CRUD completo)
- Services y transacciones
- Repositories con JPA
- Manejo de excepciones global
- Validación con Bean Validation
- DTOs y mapeo
- Spring Security (básico + JWT)
- Perfiles y configuración
- Testing (unit + integration)

## 🛠️ Stack técnico

- **React** + **TypeScript** — porque me siento cómodo con ellos
- **Tailwind CSS** — para no pelear con CSS
- **Vite** — dev server rápido
- **Prism** — syntax highlighting de los ejemplos
- **React Router** — navegación entre temas

## 🚀 Correr localmente

```bash
# Clonar
git clone https://github.com/egarciav/java-mastery.git
cd java-mastery

# Instalar
npm install

# Dev server
npm run dev
```

Abre `http://localhost:5173` y listo.

## 💡 Por qué lo hice

Vengo de Angular/TypeScript y estaba aprendiendo Java para backend. Necesitaba un lugar donde:

- Comparar conceptos de Java con lo que ya sabía de TS
- Tener ejemplos de código listos para copiar
- Entender el "por qué" detrás de cada concepto, no solo el "cómo"
- Documentar Spring Boot de forma práctica (sin tanto XML viejo)

Si también vienes de JavaScript/TypeScript, te va a servir — hay comparaciones en casi todas las páginas.

## 📝 Estructura del proyecto

```
src/
├── components/       # CodeBlock, InfoBox, Sidebar, Layout
├── pages/           # 46 páginas de contenido
│   ├── HomePage.tsx
│   ├── IntroduccionPage.tsx
│   ├── ...
│   └── SpringTestingPage.tsx
├── App.tsx          # Rutas
└── index.css        # Tema Java/Spring
```

## 🎨 Features

- ✅ Syntax highlighting para Java
- ✅ Botón de copiar en todos los bloques de código
- ✅ InfoBoxes para tips, warnings y comparaciones con Angular/TS
- ✅ Navegación por categorías
- ✅ Responsive (mobile-friendly)
- ✅ Scroll to top automático al cambiar de página

## 🤝 Contribuciones

No es un proyecto colaborativo formal, pero si ves algo mal o quieres sugerir mejoras, abre un issue. Acepto PRs si agregan valor.

## 📄 Licencia

MIT — úsalo como quieras, aprende, copia, modifica.

---

**Hecho con ☕ y muchas horas leyendo la documentación de Java**
