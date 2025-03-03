import { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
//import { BookOpen, Brain, Coins, Globe, HeartPulse, Laptop, Earth } from 'lucide-react';
import { Brain, Book, Code, Coins, Music, Gamepad, LucideIcon } from "lucide-react"; // Importamos los íconos que usaremos

// Mapeo de categorías a íconos
/*
const categoryIcons = {
    'science': Brain,
    'history': Book,
    'programming': Code,
    'music': Music,
    'videogames': Gamepad,
    'economy': Coins
};
*/

const categoryIcons: Record<string, LucideIcon> = {
    science: Brain,
    history: Book,
    programming: Code,
    music: Music,
    videogames: Gamepad,
    economy: Coins
};

type Quiz = {
    id: string
    category: string
    title: string
    description: string
    difficulty: string
    questionsCount: number
}

function Quizzes() {

    const [quizzes, setQuizzes] = useState([]);     // Estado para almacenar los quizzes
    const [loading, setLoading] = useState(true);   // Estado para manejar la carga
    const [error, setError] = useState(null);       // Estado para manejar errores

    useEffect(() => {
        const url = 'http://localhost:1234/quizzes';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setQuizzes(data);   // Guardamos las preguntas en el estado
                setLoading(false);  // Desactivamos el estado de carga
            })
            .catch(error => {
                console.error("Error al obtener los quizzes:", error)
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>⏳ Cargando quizzes...</p>;
    if (error) return <p>❌ Error: {error}</p>;

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">🧠 Quizzes Disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {quizzes.map((quiz: Quiz) => {
                    return (
                        <QuizCard
                            key={quiz.id}
                            title={quiz.title}
                            description={quiz.description}
                            icon={categoryIcons[quiz.category] || Brain}
                            difficulty={quiz.difficulty}
                            questionsCount={quiz.questionsCount}
                            category={quiz.category}
                            href={`/quizzes/${quiz.id}`}
                        />
                    )
                })}

            </div>
        </div>
    );

}

export default Quizzes;
