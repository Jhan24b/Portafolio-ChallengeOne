import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../Context/LanguageContext';

interface Project {
  title: string;
  subtitle: string;
  role: string;
  tech: string[];
  img: string;
  urlRepository: string;
  urlProduction: string;
  projectType: 'Desktop' | 'Web';
  architecture?: 'Microservices' | 'Monolithic' | 'Event-Driven';
  stack?: 'Frontend' | 'Backend' | 'Full Stack';
}

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'Desktop' | 'Web'>('all');
  const [architectureFilter, setArchitectureFilter] = useState<'all' | 'Microservices' | 'Monolithic' | 'Event-Driven'>('all');
  const [stackFilter, setStackFilter] = useState<'all' | 'Frontend' | 'Backend' | 'Full Stack'>('all');

  const projects: Project[] = [
    {
      title: language === 'es' ? 'Crossing' : 'Crossing',
      subtitle: language === 'es' ? 'Una app bancaria para gestionar tus diferentes cuentas' : 'A bank app to manage your different accounts',
      role: language === 'es' ? 'Microservicios' : 'Microservices',
      tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      img: '/public/CrossingLogin.png',
      urlRepository: 'https://github.com',
      urlProduction: 'url',
      projectType: 'Web',
      architecture: 'Microservices',
    },
    {
      title: language === 'es' ? 'ChatMe' : 'ChatMe',
      subtitle: language === 'es' ? 'Conversaciones con todas las personas' : 'Take a look and meet new people',
      role: language === 'es' ? 'Arquitectura Microservicios' : 'Microservices Architecture',
      tech: ['Next.js', 'GraphQL', 'Docker'],
      img: '/public/chatMe.png',
      urlRepository: 'https://github.com',
      urlProduction: 'url',
      projectType: 'Web',
      stack: 'Full Stack',
    },
    {
      title: language === 'es' ? 'Pyyes - Bakery' : 'Pyyes - Bakery',
      subtitle: language === 'es' ? 'Ordering App' : 'Ordering App',
      role: language === 'es' ? 'Arquitectura Microservicios' : 'Arquitectura Microservicios',
      tech: ['Next.js', 'GraphQL', 'Docker'],
      img: '/public/pyyesProject.png',
      urlRepository: 'https://github.com',
      urlProduction: 'https://pyyes.vercel.app',
      projectType: 'Web',
      stack: 'Full Stack',
    },
    {
      title: language === 'es' ? 'AluraFlix' : 'AluraFlix',
      subtitle: language === 'es' ? 'Challenge One - AluraFlix' : 'Challenge One - AluraFlix',
      role: language === 'es' ? 'Arquitectura por Componentes' : 'Components Architecture',
      tech: ['React', 'CSS'],
      img: '/public/aluraFlix.png',
      urlRepository: 'https://github.com',
      urlProduction: 'https://aluraflix-9qc13sxtf-jhan24b.vercel.app/',
      projectType: 'Web',
      stack: 'Frontend',
    },
    {
      title: language === 'es' ? 'Plataforma ECommerce - AluraGeek' : 'Plataforma ECommerce - AluraGeek',
      subtitle: language === 'es' ? 'Challenge Oracle - AluraGeek' : 'Challenge Oracle - AluraGeek',
      role: language === 'es' ? 'Arquitectura por Componentes' : 'Components Architecture',
      tech: ['HTML', 'CSS', 'JavaScript'],
      img: '/public/ECommerce-Geek.png',
      urlRepository: 'https://github.com',
      urlProduction: 'https://jhan24b.github.io/ChallengeFrontEnd/',
      projectType: 'Web',
      stack: 'Frontend',
    },
    {
      title: language === 'es' ? 'Sistema para Gestion de Minimarket' : 'Minimarket Management System',
      subtitle: language === 'es' ? 'Este sistema permite la gestión de inventarios, control de ventas, y seguimiento de pedidos de manera efectiva. Con una interfaz amigable y accesible, el sistema facilita la administración de productos, automatiza la generación de reportes de ventas y compras, y proporciona un análisis detallado de los datos para tomar decisiones informadas.' : 'Challenge Oracle - AluraGeek',
      role: language === 'es' ? 'MVC' : 'MVC',
      tech: ['Java', 'MySQL'],
      img: '/public/minimarketSystem.png',
      urlRepository: 'https://github.com',
      urlProduction: 'https://jhan24b.github.io/ChallengeFrontEnd/',
      projectType: 'Desktop',
      stack: 'Full Stack',
    },
    {
      title: language === 'es' ? 'Sistema para Gestion de Colegio' : 'School Management System',
      subtitle: language === 'es' ? 'Un sistema de gestión escolar que abarca todos los aspectos clave de la administración de una institución educativa. Este sistema facilita la gestión de pagos, la administración de información del personal, y la supervisión de notas y asistencia de los estudiantes.' : 'Challenge Oracle - AluraGeek',
      role: language === 'es' ? 'MVC' : 'MVC',
      tech: ['Java', 'MySQL'],
      img: '/public/escuelaSystem.png',
      urlRepository: 'https://github.com',
      urlProduction: 'https://jhan24b.github.io/ChallengeFrontEnd/',
      projectType: 'Desktop',
      stack: 'Full Stack',
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesType = filter === 'all' || project.projectType === filter;
    const matchesArchitecture =
      filter !== 'Desktop' || architectureFilter === 'all' || project.architecture === architectureFilter;
    const matchesStack =
      filter !== 'Web' || stackFilter === 'all' || project.stack === stackFilter;
    return matchesType && matchesArchitecture && matchesStack;
  });

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProject = filteredProjects[currentProjectIndex];
  const prevProject = filteredProjects[(currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length];
  const nextProject = filteredProjects[(currentProjectIndex + 1) % filteredProjects.length];

  return (
    <section id="projects" className="p-8 bg-white dark:bg-gray-800">
      <div className="container w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          {language === 'es' ? 'Proyectos' : 'Projects'}
        </h2>

        {/* Filtros principales */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => {
              setFilter('all');
              setArchitectureFilter('all');
              setStackFilter('all');
            }}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-navy text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {language === 'es' ? 'Todos' : 'All'}
          </button>
          <button
            onClick={() => {
              setFilter('Desktop');
              setArchitectureFilter('all');
            }}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'Desktop'
                ? 'bg-navy text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => {
              setFilter('Web');
              setStackFilter('all');
            }}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'Web'
                ? 'bg-navy text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Web
          </button>
        </div>

        {/* Filtros secundarios */}
        {filter === 'Desktop' && (
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setArchitectureFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                architectureFilter === 'all'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {language === 'es' ? 'Todas las arquitecturas' : 'All Architectures'}
            </button>
            <button
              onClick={() => setArchitectureFilter('Microservices')}
              className={`px-4 py-2 rounded-lg transition-all ${
                architectureFilter === 'Microservices'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Microservices
            </button>
            <button
              onClick={() => setArchitectureFilter('Monolithic')}
              className={`px-4 py-2 rounded-lg transition-all ${
                architectureFilter === 'Monolithic'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Monolithic
            </button>
            <button
              onClick={() => setArchitectureFilter('Event-Driven')}
              className={`px-4 py-2 rounded-lg transition-all ${
                architectureFilter === 'Event-Driven'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Event-Driven
            </button>
          </div>
        )}

        {filter === 'Web' && (
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setStackFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                stackFilter === 'all'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {language === 'es' ? 'Todos los stacks' : 'All Stacks'}
            </button>
            <button
              onClick={() => setStackFilter('Frontend')}
              className={`px-4 py-2 rounded-lg transition-all ${
                stackFilter === 'Frontend'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setStackFilter('Backend')}
              className={`px-4 py-2 rounded-lg transition-all ${
                stackFilter === 'Backend'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setStackFilter('Full Stack')}
              className={`px-4 py-2 rounded-lg transition-all ${
                stackFilter === 'Full Stack'
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Full Stack
            </button>
          </div>
        )}

        {/* Carrusel */}
        <div className="relative h-[490px] flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            {/* Proyecto previo */}
            {prevProject && (
              <motion.div
                key={`prev-${prevProject.title}`}
                initial={{ opacity: 0, x: -200, scale: 0.8 }}
                animate={{ opacity: 0.3, x: -100, scale: 0.9 }}
                exit={{ opacity: 0, x: -200, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0"
              >
                <img
                  src={prevProject.img}
                  alt={prevProject.title}
                  className="rounded-lg shadow-lg w-56 h-40 object-cover"
                />
              </motion.div>
            )}

            {/* Proyecto actual */}
            {currentProject && (
              <motion.div
                key={`current-${currentProject.title}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute z-10"
              >
                <div className="flex flex-col items-center gap-6">
                  <img
                    src={currentProject.img}
                    alt={currentProject.title}
                    className="rounded-lg shadow-lg w-88 h-64 object-cover hover:scale-105 transition-transform"
                  />
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{currentProject.subtitle}</p>
                    {currentProject.projectType === 'Desktop' && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>{language === 'es' ? 'Arquitectura:' : 'Architecture:'}</strong>{' '}
                        {currentProject.architecture}
                      </p>
                    )}
                    {currentProject.projectType === 'Web' && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>{language === 'es' ? 'Stack:' : 'Stack:'}</strong> {currentProject.stack}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {currentProject.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 justify-center">
                      <a
                        href={currentProject.urlRepository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-blue-900 transition-colors"
                      >
                        {language === 'es' ? 'Repositorio' : 'Repository'}
                      </a>
                      <a
                        href={currentProject.urlProduction}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        {language === 'es' ? 'Ver en vivo' : 'View Live'}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Proyecto siguiente */}
            {nextProject && (
              <motion.div
                key={`next-${nextProject.title}`}
                initial={{ opacity: 0, x: 200, scale: 0.8 }}
                animate={{ opacity: 0.3, x: 100, scale: 0.9 }}
                exit={{ opacity: 0, x: 200, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute right-0"
              >
                <img
                  src={nextProject.img}
                  alt={nextProject.title}
                  className="rounded-lg shadow-lg w-56 h-40 object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controles del carrusel */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;