import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo y título */}
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">QuizApp</span>
          </div>

          {/* Enlaces de navegación para desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-blue-200 transition duration-300">
              Inicio
            </a>
            <a href="/quizzes" className="text-white hover:text-blue-200 transition duration-300">
              Quizzes
            </a>
            <a href="/crear" className="text-white hover:text-blue-200 transition duration-300">
              Crear Quiz
            </a>
            <a href="/perfil" className="text-white hover:text-blue-200 transition duration-300">
              Mi Perfil
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-blue-200 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
              >
                Inicio
              </a>
              <a
                href="/quizzes"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
              >
                Quizzes
              </a>
              <a
                href="/crear"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
              >
                Crear Quiz
              </a>
              <a
                href="/perfil"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
              >
                Mi Perfil
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;