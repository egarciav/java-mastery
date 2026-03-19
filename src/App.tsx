import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import IntroduccionPage from './pages/IntroduccionPage';
import SintaxisBasicaPage from './pages/SintaxisBasicaPage';
import TiposDatosPage from './pages/TiposDatosPage';
import VariablesConstantesPage from './pages/VariablesConstantesPage';
import OperadoresPage from './pages/OperadoresPage';
import StringsPage from './pages/StringsPage';
import CondicionalesPage from './pages/CondicionalesPage';
import BuclesPage from './pages/BuclesPage';
import ArraysPage from './pages/ArraysPage';
import MetodosPage from './pages/MetodosPage';
import ClasesObjetosPage from './pages/ClasesObjetosPage';
import EncapsulamientoPage from './pages/EncapsulamientoPage';
import HerenciaPage from './pages/HerenciaPage';
import PolimorfismoPage from './pages/PolimorfismoPage';
import InterfacesPage from './pages/InterfacesPage';
import ClasesAbstractasPage from './pages/ClasesAbstractasPage';
import ColeccionesPage from './pages/ColeccionesPage';
import ExcepcionesPage from './pages/ExcepcionesPage';
import GenericsPage from './pages/GenericsPage';
import EnumsPage from './pages/EnumsPage';
import LambdasPage from './pages/LambdasPage';
import StreamsPage from './pages/StreamsPage';
import OptionalPage from './pages/OptionalPage';
import ConcurrenciaPage from './pages/ConcurrenciaPage';
import IOArchivosPage from './pages/IOArchivosPage';
import FechasAPIPage from './pages/FechasAPIPage';
import RecordsPage from './pages/RecordsPage';
import SealedClassesPage from './pages/SealedClassesPage';
import PatternMatchingPage from './pages/PatternMatchingPage';
import PatronesDisenoPage from './pages/PatronesDisenoPage';
import SpringIntroPage from './pages/SpringIntroPage';
import SpringSetupPage from './pages/SpringSetupPage';
import SpringAnotacionesPage from './pages/SpringAnotacionesPage';
import SpringControllersPage from './pages/SpringControllersPage';
import SpringServicesPage from './pages/SpringServicesPage';
import SpringRepositoriesPage from './pages/SpringRepositoriesPage';
import SpringSecurityPage from './pages/SpringSecurityPage';
import SpringTestingPage from './pages/SpringTestingPage';
import ComparadorPage from './pages/ComparadorPage';
import TextBlocksPage from './pages/TextBlocksPage';
import VirtualThreadsPage from './pages/VirtualThreadsPage';
import SpringExceptionHandlerPage from './pages/SpringExceptionHandlerPage';
import SpringValidacionPage from './pages/SpringValidacionPage';
import SpringDTOsPage from './pages/SpringDTOsPage';
import SpringPerfilesPage from './pages/SpringPerfilesPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* Fundamentos */}
          <Route path="/introduccion" element={<IntroduccionPage />} />
          <Route path="/sintaxis" element={<SintaxisBasicaPage />} />
          <Route path="/tipos-datos" element={<TiposDatosPage />} />
          <Route path="/variables" element={<VariablesConstantesPage />} />
          <Route path="/operadores" element={<OperadoresPage />} />
          <Route path="/strings" element={<StringsPage />} />
          {/* Control de Flujo */}
          <Route path="/condicionales" element={<CondicionalesPage />} />
          <Route path="/bucles" element={<BuclesPage />} />
          <Route path="/arrays" element={<ArraysPage />} />
          {/* OOP */}
          <Route path="/metodos" element={<MetodosPage />} />
          <Route path="/clases-objetos" element={<ClasesObjetosPage />} />
          <Route path="/encapsulamiento" element={<EncapsulamientoPage />} />
          <Route path="/herencia" element={<HerenciaPage />} />
          <Route path="/polimorfismo" element={<PolimorfismoPage />} />
          <Route path="/interfaces" element={<InterfacesPage />} />
          <Route path="/clases-abstractas" element={<ClasesAbstractasPage />} />
          {/* Intermedio */}
          <Route path="/colecciones" element={<ColeccionesPage />} />
          <Route path="/excepciones" element={<ExcepcionesPage />} />
          <Route path="/generics" element={<GenericsPage />} />
          <Route path="/enums" element={<EnumsPage />} />
          <Route path="/comparador" element={<ComparadorPage />} />
          {/* Avanzado */}
          <Route path="/lambdas" element={<LambdasPage />} />
          <Route path="/streams" element={<StreamsPage />} />
          <Route path="/optional" element={<OptionalPage />} />
          <Route path="/concurrencia" element={<ConcurrenciaPage />} />
          <Route path="/virtual-threads" element={<VirtualThreadsPage />} />
          <Route path="/io-archivos" element={<IOArchivosPage />} />
          <Route path="/fechas-api" element={<FechasAPIPage />} />
          {/* Java Moderno */}
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/sealed-classes" element={<SealedClassesPage />} />
          <Route path="/pattern-matching" element={<PatternMatchingPage />} />
          <Route path="/patrones-diseno" element={<PatronesDisenoPage />} />
          <Route path="/text-blocks" element={<TextBlocksPage />} />
          {/* Spring Boot */}
          <Route path="/spring-intro" element={<SpringIntroPage />} />
          <Route path="/spring-setup" element={<SpringSetupPage />} />
          <Route path="/spring-anotaciones" element={<SpringAnotacionesPage />} />
          <Route path="/spring-controllers" element={<SpringControllersPage />} />
          <Route path="/spring-services" element={<SpringServicesPage />} />
          <Route path="/spring-repositories" element={<SpringRepositoriesPage />} />
          <Route path="/spring-security" element={<SpringSecurityPage />} />
          <Route path="/spring-testing" element={<SpringTestingPage />} />
          <Route path="/spring-excepciones" element={<SpringExceptionHandlerPage />} />
          <Route path="/spring-validacion" element={<SpringValidacionPage />} />
          <Route path="/spring-dtos" element={<SpringDTOsPage />} />
          <Route path="/spring-perfiles" element={<SpringPerfilesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
