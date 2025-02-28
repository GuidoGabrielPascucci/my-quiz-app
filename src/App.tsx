import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'
import Quizzes from './pages/Quizzes.jsx'
import CreateQuiz from './pages/CreateQuiz.jsx'
import Profile from './pages/Profile.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/crear" element={<CreateQuiz />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/quizzes/:id" element={<Quiz />} />
      </Routes>
    </div>
  )
}

export default App
