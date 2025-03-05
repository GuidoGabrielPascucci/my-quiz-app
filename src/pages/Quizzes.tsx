import Quiz from "../types/quizz.type";
import CategorySection from "../components/CategorySection";
import { useContext } from "react";
import { QuizzesContext } from "../context/QuizzesContext";

/*
function Quizzes() {

    const quizzesContext = useContext(QuizzesContext);
    let quizzesByCategory: Record<string, Quiz[]> = {};

    if (quizzesContext) {
        quizzesByCategory = quizzesContext.quizzesByCategory;
        const { loading, error } = quizzesContext;
        if (loading) return <p>Cargando...</p>;
        if (error) return <p>{error}</p>;
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">🧠 Quizzes Disponibles</h1>
            <div className="grid grid-cols-1 gap-6">

                {
                    Object.entries(quizzesByCategory).map(([category, quizzes]) => (
                        <CategorySection
                            key={category}
                            title={category}
                            quizzes={quizzes}
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default Quizzes;
*/

function Quizzes() {
    const quizzesContext = useContext(QuizzesContext);
    let quizzesByCategory: Record<string, Quiz[]> = {};

    if (quizzesContext) {
        quizzesByCategory = quizzesContext.quizzesByCategory;
        const { loading, error } = quizzesContext;
        if (loading) return <p>Cargando...</p>;
        if (error) return <p>{error}</p>;
    }

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-5xl font-bold my-10 text-center">🧠 Quizzes Disponibles</h1>
            <div className="flex flex-col items-center gap-6">
                {Object.entries(quizzesByCategory).map(([category, quizzes]) => (
                    <CategorySection key={category} title={category} quizzes={quizzes} />
                ))}
            </div>
        </div>
    );
}

export default Quizzes;
