import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import CreateQuiz from "./pages/CreateQuiz.jsx";
import Profile from "./pages/Profile.jsx";

import Navbar from "./components/Navbar.jsx";

import { useAuth } from "./context/AuthContext.jsx";
import { QuizzesProvider } from "./context/QuizzesContext.jsx";
import ProtectedRoute from "./components/utils/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";

function App() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100">
            <QuizzesProvider>
                <Navbar />
                <Routes>
                    {/* Rutas públicas */}
                    <Route path="/" element={<Home />} />
                    <Route path="/quizzes" element={<Quizzes />} />
                    <Route path="/quizzes/:id" element={<Quiz />} />
                    <Route path="/login" element={<Login />} />

                    {/* Rutas protegidas: Solo accesibles si el usuario está autenticado */}
                    <Route element={<ProtectedRoute canActivate={!!user} />}>
                        <Route path="/perfil" element={<Profile />} />
                        <Route path="/crear-quiz" element={<CreateQuiz />} />
                    </Route>
                </Routes>
            </QuizzesProvider>
        </div>
    );
}

export default App;
