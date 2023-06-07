import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContextType";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navegate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const  logar = async () => {
        if(email && senha){
            const isLogged = await auth.singin(email, senha);
            if(isLogged){
                navegate('./');
            }else{
                alert("Usuario nao encontrado");
            }
        }
    };
    return (
        <div>
            <h2>Pagina fechada</h2>
            <input 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
            />
            <input 
                type="text" 
                value={senha} 
                onChange={e => setSenha(e.target.value)}
                placeholder="Digite sua senha" 
            />
            <button onClick={logar}>Entrar</button>
        </div>
    );
}