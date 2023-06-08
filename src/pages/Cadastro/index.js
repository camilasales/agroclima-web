import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContextType";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import './Cadastro.css';

export const Cadastro = () => {
    const auth = useContext(AuthContext);
    const navegate = useNavigate();
    const [formValues, setformValues] = useState({
        nome: '',
        email: '', 
        telefone:'',
        senha:'',
        confirmacaoSenha:'',
    });
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setformValues({...formValues, [name]: value});
    } 

    const cadastrar = (e) => {
        e.preventDefault();        
        if(formValues){
            auth.cadastrar(formValues).then((data) => {
                alert('Conta criada com sucesso!')
                navegate('/');
            });
        }
    };

    return (
        <div className="Cadastro">
            <img src={logo }/>
            <h2>Cadastro</h2>
            <form onSubmit={cadastrar}>
                <input 
                    type="text" 
                    name="nome" 
                    value={formValues.nome || ''} 
                    onChange={handleInputChange}
                    placeholder="Digite seu nome"
                />
                <input 
                    type="text" 
                    name="email" 
                    value={formValues.email || ''} 
                    onChange={handleInputChange}
                    placeholder="Digite seu e-mail"
                />
                <input 
                    type="text" 
                    name="telefone" 
                    value={formValues.telefone || ''} 
                    onChange={handleInputChange}
                    placeholder="Digite seu telefone"
                />
                <input 
                    type="text"
                    name="senha" 
                    value={formValues.senha  || ''} 
                    onChange={handleInputChange}
                    placeholder="Digite sua senha" 
                />
                <input 
                    type="text"
                    name="confirmacaoSenha" 
                    value={formValues.confirmacaoSenha  || ''} 
                    onChange={handleInputChange}
                    placeholder="Digite a confirmação da senha" 
                />
                <button type="submit">Cadastrar</button>
            </form>
            <p>Já tem conta? <Link to="/">Logar</Link></p>
        </div>
    );
}