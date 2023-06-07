import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContextType";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateUserLogado = async () => {
            const storageData = localStorage.getItem('userLogado');
            if(storageData){
                console.log(JSON.parse(storageData), storageData);
                const data = await JSON.parse(storageData);
                
                if(data){
                    setUser(data);
                }
            }
        }
        validateUserLogado();
    })
    const singin = async (email: string, senha: string) => {
        const data = await api.singin(email, senha);
        if(data.token){
            setUser(data);
            setUsuarioLogado(data);
            return true;
        }
        return false;
    }
    
    const singout = async () => {
        setUser(null);
        clearUsuarioLogado();
    }

    const setUsuarioLogado = (user: string)  => {
        localStorage.setItem('userLogado', JSON.stringify(user));
    }
    const clearUsuarioLogado = ()  => {
        localStorage.removeItem('userLogado');
    }
    return (
        <AuthContext.Provider value={{user, singin, singout}}>
            {children}
        </AuthContext.Provider>
    );
}