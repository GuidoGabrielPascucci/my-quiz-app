import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    text: "¿Cuál es la capital de Francia?",
    correctAnswer: "París"
  },
  {
    id: 2,
    text: "¿Cuál es la capital de Japón?",
    correctAnswer: "Tokio"
  },
  {
    id: 3,
    text: "¿Cuál es la capital de Italia?",
    correctAnswer: "Roma"
  },
  {
    id: 4,
    text: "¿Cuál es la capital de España?",
    correctAnswer: "Madrid"
  },
  {
    id: 5,
    text: "¿Cuál es la capital de Reino Unido?",
    correctAnswer: "Londres"
  },
  {
    id: 6,
    text: "¿Cuál es la capital de Alemania?",
    correctAnswer: "Berlín"
  },
  {
    id: 7,
    text: "¿Cuál es la capital de China?",
    correctAnswer: "Pekín"
  },
  {
    id: 8,
    text: "¿Cuál es la capital de Brasil?",
    correctAnswer: "Brasilia"
  },
  {
    id: 9,
    text: "¿Cuál es la capital de Australia?",
    correctAnswer: "Canberra"
  },
  {
    id: 10,
    text: "¿Cuál es la capital de Canadá?",
    correctAnswer: "Ottawa"
  }
];

const QuizCapitales = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const evaluateAnswer = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const isAnswerCorrect = userAnswer.toLowerCase().includes(currentQuestion.correctAnswer.toLowerCase());
      
      setIsCorrect(isAnswerCorrect);
      if (isAnswerCorrect) {
        setScore(score + 1);
      }
      
      setFeedback(
        isAnswerCorrect 
          ? "¡Correcto! 🎉"
          : `Incorrecto. La respuesta correcta es ${currentQuestion.correctAnswer}.`
      );

      // Esperar un momento antes de pasar a la siguiente pregunta
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setUserAnswer('');
          setFeedback('');
          setIsCorrect(null);
        } else {
          setGameCompleted(true);
        }
      }, 2000);

    } catch (error) {
      setFeedback("Hubo un error al evaluar tu respuesta. Por favor intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setFeedback('');
    setIsCorrect(null);
    setScore(0);
    setGameCompleted(false);
  };

  if (gameCompleted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">¡Quiz Completado! 🎉</h2>
        <p className="text-xl mb-4">Tu puntuación final es: {score} de {questions.length}</p>
        <p className="mb-4">
          {score === questions.length 
            ? "¡Perfecto! Conoces todas las capitales. 🌟" 
            : score >= questions.length * 0.7 
              ? "¡Muy bien! Tienes un buen conocimiento de las capitales. 👏"
              : "Sigue practicando para mejorar tu conocimiento de las capitales. 💪"}
        </p>
        <button
          onClick={restartGame}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Jugar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Quiz de Capitales</h2>
          <div className="text-gray-600">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="text-right mb-4">
          Puntuación: {score}
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Pregunta:</h3>
          <p className="text-gray-700">{currentQuestion.text}</p>
        </div>
        
        <div className="mb-4">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
            Tu respuesta:
          </label>
          <textarea
            id="answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full min-h-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe tu respuesta aquí..."
          />
        </div>

        {feedback && (
          <div className={`p-4 mb-4 rounded-md ${
            isCorrect 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {feedback}
          </div>
        )}

        <button
          onClick={evaluateAnswer}
          disabled={isLoading || !userAnswer.trim()}
          className={`w-full py-2 px-4 rounded-md text-white font-medium
            ${isLoading || !userAnswer.trim() 
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
            }
          `}
        >
          {isLoading ? 'Evaluando...' : 'Enviar Respuesta'}
        </button>
      </div>
    </div>
  );
};

export default QuizCapitales;