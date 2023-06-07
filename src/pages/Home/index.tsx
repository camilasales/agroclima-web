import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContextType";

export const Home = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <h2>HOME</h2>
            Olá {auth.user?.nome}
        </div>
    )
}