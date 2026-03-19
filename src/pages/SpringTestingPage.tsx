import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';

export default function SpringTestingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-spring mb-2">Testing en Spring Boot</h1>
      <p className="text-text-muted text-lg mb-8">Unit tests, integration tests y MockMvc</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-4">Unit Test con JUnit 5 + Mockito</h2>
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
    </div>
  );
}
