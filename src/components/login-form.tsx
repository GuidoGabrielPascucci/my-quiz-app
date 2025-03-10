import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

import User from "../types/user.type";

type LoginResponse = {
    success: boolean;
    message: string;
    accessToken: string;
    user: User;
};

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login, user } = useAuth();

    const inicioRapido = () => {
        setEmail("g.g.pascucci@gmail.com");
        setPassword("p4sk1234");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        if (!email || !password) {
            setError("Por favor ingrese todos los campos.");
            return;
        }

        setLoading(true);

        const url = "http://localhost:1234/users/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data: LoginResponse = await response.json();

            if (response.ok) {
                login(data.user, data.accessToken);
                navigate("/");
            } else {
                setError(data.message || "Hubo un error al iniciar sesión.");
            }
        } catch (err) {
            setError("Hubo un problema con la solicitud.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            {/* Mensaje de error */}
                            {error && <p className="text-red-500">{error}</p>}

                            <Button
                                type="submit"
                                className="w-full"
                                onClick={handleSubmit}
                            >
                                Login
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => alert("Te logueas con Google")}
                            >
                                Login with Google
                            </Button>
                            <Button
                                type="button"
                                className="w-full"
                                onClick={inicioRapido}
                            >
                                Inicio Rápido
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a
                                href="#"
                                className="underline underline-offset-4"
                            >
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
