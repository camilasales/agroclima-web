import React, { useContext } from 'react';
import './App.css';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContextType';

function App() {
  const auth = useContext(AuthContext);
  const navegate = useNavigate();

  const handleLougout = async () =>{
    await auth.singout();
    navegate('/');
  }

  return (
    <div className="App">
      { auth.user &&
        <header>
        </header>
      }
      <Routes>
        <Route path="/cadastrar" element={<Cadastro/>}/>
        <Route path="/" element={<RequireAuth><Login/></RequireAuth>}/>
        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
