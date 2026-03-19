import { NavLink } from 'react-router-dom';
import {
  Home, Code2, Box, Database, Zap, Hash, ToggleLeft,
  Repeat, List, Type, FileText, Brain, Shield, Layers,
  GitBranch, AlertCircle, Puzzle, Rocket, BookOpen,
  X, Menu, Coffee, Leaf, Server, Lock, TestTube,
  Settings, Binary, Clock, FolderOpen, Workflow,
  Boxes, ArrowRightLeft, Cpu, Globe, FileCode,
  Wrench, Cog, PackageCheck, MonitorCheck
} from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    title: 'Inicio',
    items: [
      { path: '/', label: 'Bienvenida', icon: Home },
    ],
  },
  {
    title: 'Fundamentos de Java',
    items: [
      { path: '/introduccion', label: 'Introducción a Java', icon: Coffee },
      { path: '/sintaxis', label: 'Sintaxis Básica', icon: Code2 },
      { path: '/tipos-datos', label: 'Tipos de Datos', icon: Binary },
      { path: '/variables', label: 'Variables y Constantes', icon: Box },
      { path: '/operadores', label: 'Operadores', icon: Hash },
      { path: '/strings', label: 'Strings', icon: Type },
    ],
  },
  {
    title: 'Control de Flujo',
    items: [
      { path: '/condicionales', label: 'Condicionales', icon: ToggleLeft },
      { path: '/bucles', label: 'Bucles', icon: Repeat },
      { path: '/arrays', label: 'Arrays', icon: List },
    ],
  },
  {
    title: 'POO - Programación Orientada a Objetos',
    items: [
      { path: '/metodos', label: 'Métodos', icon: Zap },
      { path: '/clases-objetos', label: 'Clases y Objetos', icon: Boxes },
      { path: '/encapsulamiento', label: 'Encapsulamiento', icon: Shield },
      { path: '/herencia', label: 'Herencia', icon: GitBranch },
      { path: '/polimorfismo', label: 'Polimorfismo', icon: ArrowRightLeft },
      { path: '/interfaces', label: 'Interfaces', icon: Layers },
      { path: '/clases-abstractas', label: 'Clases Abstractas', icon: FileText },
    ],
  },
  {
    title: 'Java Intermedio',
    items: [
      { path: '/colecciones', label: 'Colecciones', icon: Database },
      { path: '/excepciones', label: 'Excepciones', icon: AlertCircle },
      { path: '/generics', label: 'Generics', icon: Puzzle },
      { path: '/enums', label: 'Enums', icon: Settings },
      { path: '/comparador', label: 'Comparable y Comparator', icon: ArrowRightLeft },
    ],
  },
  {
    title: 'Java Avanzado',
    items: [
      { path: '/lambdas', label: 'Lambdas', icon: Workflow },
      { path: '/streams', label: 'Streams API', icon: Cpu },
      { path: '/optional', label: 'Optional', icon: Brain },
      { path: '/concurrencia', label: 'Concurrencia y Threads', icon: Rocket },
      { path: '/virtual-threads', label: 'Virtual Threads (Java 21)', icon: Cpu },
      { path: '/io-archivos', label: 'I/O y Archivos', icon: FolderOpen },
      { path: '/fechas-api', label: 'API de Fechas', icon: Clock },
    ],
  },
  {
    title: 'Java Moderno (17+)',
    items: [
      { path: '/records', label: 'Records', icon: FileCode },
      { path: '/sealed-classes', label: 'Sealed Classes', icon: Lock },
      { path: '/pattern-matching', label: 'Pattern Matching', icon: MonitorCheck },
      { path: '/patrones-diseno', label: 'Patrones de Diseño', icon: Wrench },
      { path: '/text-blocks', label: 'Text Blocks y var', icon: FileText },
    ],
  },
  {
    title: 'Spring Boot',
    items: [
      { path: '/spring-intro', label: 'Introducción a Spring', icon: Leaf },
      { path: '/spring-setup', label: 'Setup y Estructura', icon: PackageCheck },
      { path: '/spring-anotaciones', label: 'Anotaciones', icon: BookOpen },
      { path: '/spring-controllers', label: 'Controllers REST', icon: Globe },
      { path: '/spring-services', label: 'Servicios', icon: Cog },
      { path: '/spring-repositories', label: 'Repositories y JPA', icon: Server },
      { path: '/spring-security', label: 'Spring Security', icon: Shield },
      { path: '/spring-excepciones', label: 'Manejo de Excepciones', icon: AlertCircle },
      { path: '/spring-validacion', label: 'Validación (@Valid)', icon: Shield },
      { path: '/spring-dtos', label: 'DTOs y MapStruct', icon: Binary },
      { path: '/spring-perfiles', label: 'Perfiles y Config', icon: Settings },
      { path: '/spring-testing', label: 'Testing', icon: TestTube },
    ],
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-surface-light border border-border rounded-lg p-2 text-text hover:bg-surface-lighter transition-colors cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-surface-light border-r border-border z-40 overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-0`}
      >
        <div className="p-6 border-b border-border">
          <h1 className="text-lg font-bold text-java flex items-center gap-2">
            <span className="text-2xl">☕</span> Java Mastery
          </h1>
          <p className="text-xs text-text-muted mt-1">Guía Completa 2026</p>
        </div>

        <nav className="p-4">
          {sections.map((section) => (
            <div key={section.title} className="mb-4">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-3">
                {section.title}
              </h3>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 mb-0.5 ${
                        isActive
                          ? 'bg-primary/15 text-primary font-medium'
                          : 'text-text-muted hover:bg-surface-lighter/50 hover:text-text'
                      }`
                    }
                    end={item.path === '/'}
                  >
                    <Icon size={16} />
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
