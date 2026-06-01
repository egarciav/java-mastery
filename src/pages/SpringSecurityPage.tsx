import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringSecurityPage() {
  return (
    <div>
      <DayHeader
        day={40}
        title="Spring Security"
        duration="55 min"
        commitMsg="dia-40: SecurityFilterChain, BCrypt, JWT, roles"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás Spring Security — el módulo que protege tu API controlando quién puede acceder
        (autenticación) y qué puede hacer (autorización). Es el equivalente de los Route Guards e
        HTTP Interceptors de Angular, pero aplicado a nivel de servidor.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Autenticación vs Autorización</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          <strong className="text-text">Autenticación</strong> = verificar QUIÉN eres (login con email/contraseña, token JWT).
          <strong className="text-text"> Autorización</strong> = verificar QUÉ puedes hacer (¿tienes rol ADMIN para borrar usuarios?).
          Spring Security maneja ambas cosas a través de una cadena de filtros que interceptan cada petición HTTP
          antes de que llegue a tu Controller.
        </p>

        <ThinkSection title="Spring Security: autenticación + autorización en el servidor">
          <p>
            En Angular proteges rutas con <code className="text-primary">CanActivate</code> guards y adjuntas tokens
            JWT con HTTP interceptors. Spring Security hace lo análogo en el servidor:
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><code className="text-primary">SecurityFilterChain</code>: define qué rutas son públicas y cuáles requieren autenticación/roles específicos. Equivalente al array de rutas con <code className="text-primary">CanActivate</code> en Angular.</li>
            <li><code className="text-primary">OncePerRequestFilter</code>: intercepta cada petición HTTP para validar el token JWT antes de que llegue al Controller. Equivalente al HTTP interceptor de Angular.</li>
          </ul>
          <p>
            <strong className="text-text">Diferencia fundamental:</strong> la seguridad de Angular es
            <em> cosmética</em> — protege la UI pero un usuario puede saltarse los guards inspeccionando el
            bundle JS. Spring Security es <strong className="text-text">real</strong>: si el token no es válido,
            el servidor retorna 401 y el Controller nunca se ejecuta. La seguridad del frontend y backend
            son complementarias, no sustitutivas.
          </p>
          <p>
            <strong className="text-text">Autenticación vs Autorización:</strong>
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
            <li><strong className="text-text">Autenticación</strong>: verificar quién eres. Login con usuario/contraseña, validar JWT.</li>
            <li><strong className="text-text">Autorización</strong>: verificar qué puedes hacer. <code className="text-primary">hasRole('ADMIN')</code>, <code className="text-primary">hasAuthority('WRITE')</code>.</li>
          </ul>
          <p>
            <strong className="text-text">BCryptPasswordEncoder</strong>: nunca guardes contraseñas en texto plano.
            BCrypt aplica un hash con salt aleatorio. Cada hash de la misma contraseña es diferente,
            por lo que ni un dump de la BD revela las contraseñas. Spring Security lo incluye y se usa
            con <code className="text-primary">passwordEncoder.matches(raw, encoded)</code>.
          </p>
        </ThinkSection>

        <CodeBlock filename="SecurityConfig.java" code={`
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Deshabilitar CSRF para APIs REST
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()    // público
                .requestMatchers("/api/admin/**").hasRole("ADMIN") // solo admin
                .requestMatchers("/api/**").authenticated()        // autenticado
                .anyRequest().permitAll()
            )
            .httpBasic(Customizer.withDefaults())  // Basic Auth
            // .oauth2Login(Customizer.withDefaults()) // OAuth2
            ;
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // NUNCA guardes contraseñas en texto plano
    }

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder) {
        // Usuarios en memoria (solo para desarrollo)
        var admin = User.builder()
            .username("admin")
            .password(encoder.encode("admin123"))
            .roles("ADMIN", "USER")
            .build();

        var user = User.builder()
            .username("usuario")
            .password(encoder.encode("user123"))
            .roles("USER")
            .build();

        return new InMemoryUserDetailsManager(admin, user);
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">JWT Authentication (producción)</h2>
        <CodeBlock filename="JwtUtil.java" code={`
// Flujo JWT típico:
// 1. POST /api/auth/login  -> {username, password}
// 2. Servidor valida credenciales
// 3. Servidor genera JWT y lo retorna
// 4. Cliente envía JWT en header: Authorization: Bearer <token>
// 5. Servidor valida JWT en cada petición

// Dependencia: io.jsonwebtoken:jjwt-api
@Component
public class JwtUtil {
    @Value("\${jwt.secret}")
    private String secret;

    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 24h
            .signWith(Keys.hmacShaKeyFor(secret.getBytes()))
            .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(Keys.hmacShaKeyFor(secret.getBytes()))
            .build()
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
}
`} />
        <InfoBox type="angular">
          En Angular usas interceptors HTTP para adjuntar el JWT token. En Spring usas filtros
          (<code className="text-primary">OncePerRequestFilter</code>) para validar el token en cada petición.
          El concepto de guards en Angular equivale a <code className="text-primary">@PreAuthorize</code> en Spring.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 40</h2>
        <Exercise
          number={1}
          title="SecurityConfig con roles"
          description={`Configura SecurityFilterChain con:
- /api/public/** → permitAll
- /api/admin/** → hasRole("ADMIN")
- /api/usuarios/** → authenticated
- POST /api/auth/login → permitAll
- BCryptPasswordEncoder como @Bean
- Dos usuarios en memoria: admin (ADMIN) y user (USER)`}
          hint="authorizeHttpRequests(auth -> auth.requestMatchers(...).permitAll()...)"
          solution={`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(c -> c.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**", "/api/auth/login").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/usuarios/**").authenticated()
                .anyRequest().permitAll()
            )
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }

    @Bean
    public UserDetailsService users(PasswordEncoder enc) {
        var admin = User.builder().username("admin").password(enc.encode("admin123")).roles("ADMIN","USER").build();
        var user = User.builder().username("user").password(enc.encode("user123")).roles("USER").build();
        return new InMemoryUserDetailsManager(admin, user);
    }
}`}
          solutionFilename="SecurityConfig.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-40: Spring Security, BCrypt, JWT, roles"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 41</strong> — Testing: JUnit 5, Mockito, MockMvc.
          </p>
        </div>
      </section>
    </div>
  );
}
