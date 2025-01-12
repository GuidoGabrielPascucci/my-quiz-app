import React from 'react';
import { Link } from 'react-router-dom';

// Datos de ejemplo
const popularQuizzes = [
  { id: 1, title: 'Capitales del Mundo', category: 'Geografía', plays: 1500, difficulty: 'Media' },
  { id: 2, title: 'Historia Argentina', category: 'Historia', plays: 1200, difficulty: 'Difícil' },
  { id: 3, title: 'Cultura General', category: 'Varios', plays: 2000, difficulty: 'Fácil' }
];

const categories = [
  { id: 1, name: 'Geografía', icon: '🌎', quizCount: 25 },
  { id: 2, name: 'Historia', icon: '📚', quizCount: 30 },
  { id: 3, name: 'Ciencia', icon: '🔬', quizCount: 20 },
  { id: 4, name: 'Deportes', icon: '⚽', quizCount: 15 },
  { id: 5, name: 'Arte', icon: '🎨', quizCount: 18 },
  { id: 6, name: 'Música', icon: '🎵', quizCount: 22 }
];

const featuredQuiz = {
  title: "Quiz del Día",
  description: "¿Cuánto sabes sobre las Maravillas del Mundo?",
  difficulty: "Media",
  timeEstimate: "10 min",
  participants: 350
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Aprende y Diviértete con QuizApp
            </h1>
            <p className="text-xl mb-8">
              Pon a prueba tus conocimientos con miles de quizzes en diferentes categorías
            </p>
            <Link
              to="/quizzes"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Comenzar a Jugar
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Quiz Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {featuredQuiz.title}
              </h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                HOY
              </span>
            </div>
            <p className="text-gray-600 mb-4">{featuredQuiz.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-gray-500">
                ⏱️ {featuredQuiz.timeEstimate}
              </span>
              <span className="text-sm text-gray-500">
                🎯 {featuredQuiz.difficulty}
              </span>
              <span className="text-sm text-gray-500">
                👥 {featuredQuiz.participants} participantes hoy
              </span>
            </div>
            <Link
              to="/quiz/featured"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 inline-block"
            >
              Jugar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <span className="text-4xl mb-2 block">{category.icon}</span>
                <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.quizCount} quizzes</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Quizzes Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Quizzes Populares</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularQuizzes.map(quiz => (
              <Link
                key={quiz.id}
                to={`/quizzes/capitales-del-mundo`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {quiz.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      quiz.difficulty === 'Fácil' 
                        ? 'bg-green-100 text-green-800'
                        : quiz.difficulty === 'Media'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>{quiz.category}</span>
                    <span>👥 {quiz.plays} jugadores</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/quizzes"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Ver todos los quizzes →
            </Link>
          </div>
        </div>
      </section>

        {/* Call to Action Section */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Tienes conocimientos para compartir?
            </h2>
            <p className="text-gray-600 mb-8">
              Crea tus propios quizzes y compártelos con la comunidad
            </p>
            <Link
              to="/crear"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Crear Quiz
            </Link>
          </div>
        </section>
    </div>
  );
};

export default Home;