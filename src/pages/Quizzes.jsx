import QuizCard from "../components/QuizCard";
import { BookOpen, Brain, Calculator, Coins, Globe, HeartPulse, Laptop, Earth } from 'lucide-react';

// Datos de ejemplo para los quizzes
const quizzes = [
    {
      id: 1,
      title: "Economía Básica",
      description: "Conceptos fundamentales de economía: oferta, demanda, inflación y más",
      icon: Coins,
      difficulty: "Fácil",
      questionsCount: 5,
      category: "Economía",
      href: "/quizzes/economia"
    },
    {
      id: 2,
      title: "Programación",
      description: "Fundamentos de programación y lógica computacional",
      icon: Laptop,
      difficulty: "Intermedio",
      questionsCount: 10,
      category: "Tecnología",
      href: "/quizzes/programacion"
    },
    {
      id: 3,
      title: "Ciencias",
      description: "Conceptos básicos de física, química y biología",
      icon: Brain,
      difficulty: "Intermedio",
      questionsCount: 8,
      category: "Ciencias",
      href: "/quizzes/ciencias"
    },
    {
      id: 4,
      title: "Historia Mundial",
      description: "Eventos históricos importantes y sus impactos",
      icon: Globe,
      difficulty: "Difícil",
      questionsCount: 12,
      category: "Historia",
      href: "/quizzes/historia"
    },
    {
      id: 5,
      title: "Literatura",
      description: "Obras literarias famosas y sus autores",
      icon: BookOpen,
      difficulty: "Intermedio",
      questionsCount: 6,
      category: "Literatura",
      href: "/quizzes/literatura"
    },
    {
      id: 6,
      title: "Salud",
      description: "Conceptos básicos de salud y bienestar",
      icon: HeartPulse,
      difficulty: "Fácil",
      questionsCount: 7,
      category: "Salud",
      href: "/quiz/salud"
    },
    {
        id: 7,
        title: "Capitales",
        description: "Capitales del mundo",
        icon: Earth,
        difficulty: "Fácil",
        questionsCount: 7,
        category: "Geografía",
        href: "/quizzes/capitales-del-mundo"
    }
];

// Componente principal Quizzes
const Quizzes = () => {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Quizzes Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Quizzes;