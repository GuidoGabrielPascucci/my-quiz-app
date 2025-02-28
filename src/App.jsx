import { Routes, Route } from 'react-router-dom'
import Quizzes from './pages/Quizzes'
import Navbar from './components/navbar'
import Home from './pages/Home'
import CreateQuiz from './pages/CreateQuiz'
import Profile from './pages/Profile'
import QuizCapitales from './components/QuizCapitales'
import QuizzesEconomia from './components/QuizzesEconomia'
import QuizEconomiaBasica from './pages/QuizEconomiaBasica'
import Quiz from './pages/Quiz'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/crear" element={<CreateQuiz />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/quizzes/capitales-del-mundo" element={<QuizCapitales />}/>
        <Route path="/quizzes/economia" element={<QuizzesEconomia />}/>
        <Route path="/quizzes/economia-basica" element={<QuizEconomiaBasica />}/>
        <Route path="/quizzes/:id" element={<Quiz />} />
      </Routes>
    </div>
  )
}

export default App
