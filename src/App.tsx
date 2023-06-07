import React, { useContext } from 'react';
import './App.css';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import { Home } from './pages/Home'
import { Private } from './pages/Private'
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
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Pagina privada</Link>
          {auth.user && <button  onClick={handleLougout} >Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
