import React from 'react';
import { BookOpen, TrendingUp, GraduationCap } from 'lucide-react';

const QuizCard = ({ title, description, icon: Icon, difficulty, questionsCount, href }) => (
  <a 
    href={href}
    className="block mb-6 transition-all hover:scale-102"
  >
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-blue-600" />
        <span className={`
          px-3 py-1 rounded-full text-sm font-semibold
          ${difficulty === 'Básico' ? 'bg-green-100 text-green-800' : 
            difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}
        `}>
          {difficulty}
        </span>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">{questionsCount} preguntas</span>
        <span className="text-blue-600 text-sm font-medium">Comenzar Quiz →</span>
      </div>
    </div>
  </a>
);

const QuizzesEconomia = () => {
  const quizzes = [
    {
      id: 1,
      title: "Economía Básica",
      description: "Aprende los conceptos fundamentales de economía como oferta, demanda, inflación y más.",
      icon: BookOpen,
      difficulty: "Básico",
      questionsCount: 20,
      href: "/quizzes/economia-basica"
    },
    {
      id: 2,
      title: "Economía Intermedia",
      description: "Profundiza en conceptos como política monetaria, mercados financieros y comercio internacional.",
      icon: TrendingUp,
      difficulty: "Intermedio",
      questionsCount: 20,
      href: "/quizzes/economia-intermedia"
    },
    {
      id: 3,
      title: "Economía Avanzada",
      description: "Domina temas complejos como teoría de juegos, econometría y modelos económicos avanzados.",
      icon: GraduationCap,
      difficulty: "Avanzado",
      questionsCount: 20,
      href: "/quizzes/economia-avanzada"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Quizzes de Economía
      </h1>
      <div className="space-y-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            {...quiz}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizzesEconomia;