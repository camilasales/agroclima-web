import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    user: User | null;
    singin: (email: string, senha: string) => Promise<boolean>;
    singout: () => void;
    cadastrar: (params: object) => Promise<object>;
}

export const AuthContext = createContext<AuthContextType>(null!);