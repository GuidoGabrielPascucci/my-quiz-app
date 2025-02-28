import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Check, X } from 'lucide-react';

function Quiz() {

    const [quiz, setQuiz] = useState(null);             // Estado para almacenar el quizz
    const [isLoading, setIsLoading] = useState(true);   // Estado para manejar la carga
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
    const [mostrarRetroalimentacion, setMostrarRetroalimentacion] = useState(false);
    
    const { id } = useParams(); // Obtiene el ID del quizz desde la URL

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch(`http://localhost:1234/quizzes/${id}`);
                if (!response.ok) throw new Error("Error al obtener el quizz");
                const data = await response.json();
                setQuiz(data); // Guarda el quizz en el estado
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setIsLoading(false); // Finaliza la carga
            }
        };

        fetchQuiz();
    }, [id]);

    if (isLoading) return <p>Cargando...</p>;             // Muestra un mensaje de carga
    if (!quiz) return <p>No se encontró el quizz.</p>;    // Maneja el caso de que no haya datos

    const manejarRespuesta = (indiceOpcion) => {
        setRespuestaSeleccionada(indiceOpcion);
        setMostrarRetroalimentacion(true);

        if (indiceOpcion === quiz.questions[preguntaActual].correctAnswer) {
            setPuntuacion(puntuacion + 1);
        }

        setTimeout(() => {
            setMostrarRetroalimentacion(false);
            setRespuestaSeleccionada(null);

            if (preguntaActual < quiz.questions.length - 1) {
                setPreguntaActual(preguntaActual + 1);
            } else {
                setMostrarResultado(true);
            }
        }, 1500);
    };

    const reiniciarQuiz = () => {
        setPreguntaActual(0);
        setPuntuacion(0);
        setMostrarResultado(false);
        setRespuestaSeleccionada(null);
        setMostrarRetroalimentacion(false);
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    {quiz.title}
                </h1>

                {!mostrarResultado ? (
                    <div className="space-y-6">
                        <div className="text-lg font-medium text-gray-600">
                            Pregunta {preguntaActual + 1} de {quiz.questions.length}
                        </div>

                        <div className="text-xl text-gray-800 font-medium mb-6">
                            {quiz.questions[preguntaActual].question}
                        </div>

                        <div className="space-y-3">
                            {quiz.questions[preguntaActual].choices.map((opcion, index) => {
                                let buttonStyle = "w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex justify-between items-center ";

                                if (mostrarRetroalimentacion) {
                                    if (index === quiz.questions[preguntaActual].correctAnswer) {
                                        buttonStyle += "bg-green-100 border-green-500 text-green-700";
                                    } else if (index === respuestaSeleccionada) {
                                        buttonStyle += "bg-red-100 border-red-500 text-red-700";
                                    } else {
                                        buttonStyle += "bg-gray-50 border-gray-200 text-gray-500";
                                    }
                                } else {
                                    buttonStyle += "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
                                }

                                return (
                                    <button
                                        key={index}
                                        className={buttonStyle}
                                        onClick={() => manejarRespuesta(index)}
                                        disabled={mostrarRetroalimentacion}
                                    >
                                        <span>{opcion}</span>
                                        {mostrarRetroalimentacion && index === quiz.questions[preguntaActual].correctAnswer && (
                                            <Check className="w-5 h-5 text-green-600" />
                                        )}
                                        {mostrarRetroalimentacion && index === respuestaSeleccionada && index !== quiz.questions[preguntaActual].correctAnswer && (
                                            <X className="w-5 h-5 text-red-600" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            ¡Quiz completado!
                        </h2>
                        <p className="text-xl text-gray-600">
                            Tu puntuación: {puntuacion} de {quiz.questions.length}
                        </p>
                        <button
                            onClick={reiniciarQuiz}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Reiniciar Quiz
                        </button>
                    </div>
                )}

                <div className="mt-6 text-center text-sm text-gray-500">
                    Puntuación actual: {puntuacion}
                </div>
            </div>
        </div>
    );

}

export default Quiz;
