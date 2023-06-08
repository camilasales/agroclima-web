import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContextType";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import './Login.css';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navegate = useNavigate();
    const [formValues, setformValues] = useState({email: '', senha:''});
    
    const handleInputChange = (e: any) => {
        const {name, value} = e.target
        setformValues({...formValues, [name]: value});
    } 

    const  logar = async (e: any) => {
        e.preventDefault();        
        if(formValues.email && formValues.senha){
            const isLogged = await auth.singin(formValues.email, formValues.senha);
            if(isLogged){
                navegate('./home');
            }else{
                alert("Usuario nao encontrado");
            }
        }
    };

    return (
        <div className="Login">
            <img src={logo }/>
            <h2>Login</h2>
            <form onSubmit={logar}>
                <input 
                    type="text" 
                    name="email" 
                    value={formValues.email || ''} 
                    onChange={handleInputChange}
                    placeholder="Digite seu e-mail"
                />
                <input 
                    type="text"
                    name="senha" 
                    value={formValues.senha  || ''} 
                    onChange={handleInputChange}
                    placeholder="Digite sua senha" 
                />
                <button type="submit">Entrar</button>
            </form>
            <p>Não tem conta? <Link to="/cadastrar">Cadastre-se</Link></p>
        </div>
    );
}