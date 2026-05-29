import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import DayHeader from '../components/DayHeader';
import ThinkSection from '../components/ThinkSection';
import Exercise from '../components/Exercise';

export default function SpringTestingPage() {
  return (
    <div>
      <DayHeader
        day={41}
        title="Testing en Spring Boot"
        duration="55 min"
        commitMsg="dia-41: JUnit 5, Mockito, MockMvc, integration tests"
      />
      <p className="text-text-muted leading-relaxed mb-8">
        Hoy aprenderás testing profesional en Spring Boot: unit tests aislados con Mockito para
        probar tu lógica de negocio, e integration tests con MockMvc para verificar tus endpoints
        HTTP completos sin levantar un servidor real.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Unit Tests con JUnit 5 + Mockito</h2>

        <p className="text-text-muted leading-relaxed mb-4">
          Un <strong className="text-text">unit test</strong> prueba UNA clase aislada. Si tu Service depende de un
          Repository, no quieres que el test dependa de una BD real — sería lento y frágil. En su lugar,
          usas <strong className="text-text">Mockito</strong> para crear un "doble" (mock) del Repository que simula
          su comportamiento sin conectarse a ninguna BD.
        </p>

        <ThinkSection title="Arrange → Act → Assert (AAA pattern)">
          <p>
            Cada test sigue el patrón AAA: <strong className="text-text">Arrange</strong> (preparar datos y configurar
            qué van a retornar los mocks), <strong className="text-text">Act</strong> (ejecutar el método que estás
            probando), <strong className="text-text">Assert</strong> (verificar que el resultado es lo que esperabas).
          </p>
          <p>
            <code className="text-primary">@Mock</code> crea un mock del Repository (un objeto falso que puedes programar).
            <code className="text-primary"> @InjectMocks</code> crea el Service real pero le inyecta los mocks como dependencias.
            <code className="text-primary"> when(...).thenReturn(...)</code> programa lo que el mock va a retornar cuando se llame.
            <code className="text-primary"> verify(...)</code> confirma que el mock fue llamado como esperabas.
          </p>
        </ThinkSection>

        <CodeBlock filename="UsuarioServiceTest.java" code={`
@ExtendWith(MockitoExtension.class)
class UsuarioServiceTest {

    @Mock
    private UsuarioRepository repository;

    @InjectMocks
    private UsuarioService service;

    @Test
    void listarTodos_debeRetornarLista() {
        // Arrange (preparar)
        List<Usuario> esperados = List.of(
            new Usuario(1L, "Carlos", "carlos@mail.com", 25),
            new Usuario(2L, "Ana", "ana@mail.com", 30)
        );
        when(repository.findAll()).thenReturn(esperados);

        // Act (ejecutar)
        List<Usuario> resultado = service.listarTodos();

        // Assert (verificar)
        assertEquals(2, resultado.size());
        assertEquals("Carlos", resultado.get(0).getNombre());
        verify(repository, times(1)).findAll();
    }

    @Test
    void buscarPorId_noExiste_debeRetornarVacio() {
        when(repository.findById(99L)).thenReturn(Optional.empty());

        Optional<Usuario> resultado = service.buscarPorId(99L);

        assertTrue(resultado.isEmpty());
    }

    @Test
    void guardar_emailDuplicado_debeLanzarExcepcion() {
        when(repository.existsByEmail("dup@mail.com")).thenReturn(true);

        Usuario usuario = new Usuario(null, "Test", "dup@mail.com", 20);
        assertThrows(RuntimeException.class, () -> service.guardar(usuario));
    }
}
`} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Integration Test con MockMvc</h2>
        <CodeBlock filename="UsuarioControllerTest.java" code={`
@SpringBootTest
@AutoConfigureMockMvc
class UsuarioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void listar_debeRetornar200() throws Exception {
        mockMvc.perform(get("/api/usuarios"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$").isArray());
    }

    @Test
    void crear_debeRetornar201() throws Exception {
        Usuario nuevo = new Usuario(null, "Test", "test@mail.com", 25);
        String json = objectMapper.writeValueAsString(nuevo);

        mockMvc.perform(post("/api/usuarios")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.nombre").value("Test"));
    }

    @Test
    void obtener_noExiste_debeRetornar404() throws Exception {
        mockMvc.perform(get("/api/usuarios/99999"))
            .andExpect(status().isNotFound());
    }
}
`} />
        <InfoBox type="tip">
          <strong>Unit tests</strong>: rápidos, aislados con mocks. Testean una clase.
          <strong> Integration tests</strong>: levantan el contexto de Spring. Testean el flujo completo.
          Usa <code className="text-primary">@SpringBootTest</code> para integration y <code className="text-primary">@ExtendWith(MockitoExtension.class)</code> para unit.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Ejercicios del Día 41</h2>
        <Exercise
          number={1}
          title="Tests para ProductoService"
          description={`Escribe 3 unit tests para ProductoService:
1. guardar_precioNegativo_lanzaExcepcion()
2. guardar_productoValido_retornaGuardado()
3. buscarPorId_noExiste_retornaVacio()
Usa @Mock para el repository y @InjectMocks para el service.`}
          hint="when(repo.save(any())).thenReturn(producto); assertThrows(IllegalArgumentException.class, () -> ...);"
          solution={`@ExtendWith(MockitoExtension.class)
class ProductoServiceTest {
    @Mock ProductoRepository repo;
    @InjectMocks ProductoService service;

    @Test
    void guardar_precioNegativo_lanzaExcepcion() {
        var p = new Producto(null, "Test", -5.0);
        assertThrows(IllegalArgumentException.class, () -> service.guardar(p));
    }

    @Test
    void guardar_valido_retornaGuardado() {
        var p = new Producto(null, "Laptop", 1200.0);
        when(repo.existsByNombre("Laptop")).thenReturn(false);
        when(repo.save(any())).thenReturn(new Producto(1L, "Laptop", 1200.0));

        var result = service.guardar(p);
        assertEquals("Laptop", result.getNombre());
        verify(repo).save(any());
    }

    @Test
    void buscarPorId_noExiste_retornaVacio() {
        when(repo.findById(99L)).thenReturn(Optional.empty());
        assertTrue(service.buscarPorId(99L).isEmpty());
    }
}`}
          solutionFilename="ProductoServiceTest.java"
        />
      </section>

      <section className="mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
          <h3 className="text-success font-semibold mb-2 text-sm">Commit del día</h3>
          <CodeBlock language="bash" code={`git commit -m "dia-41: JUnit 5, Mockito, MockMvc tests"`} />
          <p className="text-text-muted text-xs mt-2">
            Mañana: <strong className="text-text">Día 42</strong> — Manejo de excepciones global con @ControllerAdvice.
          </p>
        </div>
      </section>
    </div>
  );
}
