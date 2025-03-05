import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Quiz from "../types/quizz.type"; "../types/quizz.type";

type QuizzesContextType = {
    quizzesByCategory: Record<string, Quiz[]>;
    loading: boolean;
    error: string;
};

export const QuizzesContext = createContext<QuizzesContextType | undefined>(undefined);

function getQuizzesByCategory(quizzes: Quiz[]): Record<string, Quiz[]> {
  return quizzes.reduce((acc, quiz) => {

    if (!acc[quiz.category]) {
      acc[quiz.category] = [];
    }

    acc[quiz.category].push(quiz);

    return acc;

  }, {} as Record<string, Quiz[]>);
}

// Tipar las props del componente QuizzesProvider
type QuizzesProviderProps = {
    children: ReactNode; // Define que el provider acepta children
};

export const QuizzesProvider: React.FC<QuizzesProviderProps> = ({ children }) => {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const url = 'http://localhost:1234/quizzes';
        fetch(url)
            .then(response => response.json())
            .then((data: Quiz[]) => {
                setQuizzes(data);   // Guardamos las preguntas en el estado
                setLoading(false);  // Desactivamos el estado de carga
            })
            .catch(error => {
                console.error("Error al obtener los quizzes:", error)
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Obtengo los quizzes, juntos por categoría
    const quizzesByCategory = getQuizzesByCategory(quizzes);

    return (
        <QuizzesContext.Provider value={{ quizzesByCategory, loading, error }}>
            {children}
        </QuizzesContext.Provider>
    );
};
