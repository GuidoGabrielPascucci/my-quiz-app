import { useState, useEffect } from "react";

export default function AuthComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = async () => {
        setError("");
        if (username && password) {
            try {
                const response = await fetch("/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                });

                if (!response.ok) {
                    throw new Error("Credenciales incorrectas");
                }

                const data = await response.json();
                localStorage.setItem("user", data.username);
                setIsAuthenticated(true);
            } catch (err: any) {
                setError(err.message);
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    };

    return (
        <div className="w-96 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <div className="p-4">
                {isAuthenticated ? (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">
                            Bienvenido, {localStorage.getItem("user")}
                        </h2>
                        <button 
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Iniciar Sesión</h2>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded mb-2"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded mb-4"
                        />
                        <button 
                            onClick={handleLogin} 
                            className="w-full bg-blue-500 text-white py-2 rounded"
                        >
                            Ingresar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
