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
        Hoy aprenderás Spring Security — autenticación y autorización. Es como los guards
        de Angular pero para el backend.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Configuración básica</h2>

        <ThinkSection title="Spring Security = Route Guards + Interceptors del backend">
          <p>
            En Angular proteges rutas con guards y adjuntas tokens con interceptors.
            En Spring Security, <code className="text-primary">SecurityFilterChain</code> define qué rutas requieren
            autenticación y <code className="text-primary">OncePerRequestFilter</code> valida tokens en cada petición.
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
