import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
        <Card className="w-96 mx-auto mt-10 p-4 shadow-lg rounded-lg">
            <CardContent>
                {isAuthenticated ? (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">Bienvenido, {localStorage.getItem("user")}</h2>
                        <Button className="mt-4" onClick={handleLogout}>Cerrar sesión</Button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Iniciar Sesión</h2>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <Input
                            placeholder="Usuario"
                            value={username}
                            onChange={(e: any) => setUsername(e.target.value)}
                            className="mb-2"
                        />
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                            className="mb-4"
                        />
                        <Button onClick={handleLogin} className="w-full">Ingresar</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );

}
