import Quiz from "../types/quizz.type";
import QuizCard from "./QuizCard";
import { Brain } from "lucide-react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

type CategorySectionProps = {
    title: string;
    quizzes: Quiz[];
};

const CategorySection = ({ title, quizzes }: CategorySectionProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();
    const firstLetterCapitalized = title[0].toUpperCase();
    const capitalizedTitle = firstLetterCapitalized + title.slice(1);

    return (
        <div className="max-w-5xl w-full border-4 rounded-lg shadow-lg p-4">
            
            {/* Botón/Sección para expandir */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-left font-bold text-xl px-6 py-8 bg-yellow-200 rounded-lg shadow-lg hover:bg-green-300 transition duration-500"
            >
                <div className="flex justify-between">
                    <span>{capitalizedTitle}</span>
                    <span>{isExpanded ? "🔽" : "▶"}</span>
                </div>
            </button>

            {/* Cards visibles solo si está expandido */}
            {isExpanded && (
                <div className="mt-4 grid grid-cols-1 gap-4">
                    {quizzes.map((quiz: Quiz) => (
                        <div key={quiz.id} className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-700 ease-in-out cursor-pointer" onClick={() => navigate(`/quizzes/${quiz.id}`) }>
                            <h3 className="font-semibold">{quiz.title}</h3>
                            <p className="text-sm text-gray-600">{quiz.description}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default CategorySection;
