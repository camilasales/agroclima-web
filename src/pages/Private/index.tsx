import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContextType';

export const Private = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <h2>Privada</h2>
            Olá {auth.user?.nome}
        </div>
    )
}