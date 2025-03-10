import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import User from "../types/user.type";

// Definir la estructura del contexto
interface AuthContextType {
    user: User | null;
    login: (userData: User, accessToken: string) => void;
    logout: () => void;
}

// Crear el contexto con valores por defecto
const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Aquí podrías verificar si hay un token almacenado en localStorage o cookies
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData: User, accessToken: string) => {
        // Guardo el usuario en el contexto global
        setUser(userData);

        // Simulación de sesión persistente
        localStorage.setItem("user", JSON.stringify(userData));

        // Guardo el token en el almacenamiento local o global
        localStorage.setItem("authToken", accessToken);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
