import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);

    // Si no esta logeado, deja ingresar, si es que SI esta, lo redirige a la "/marvel" page
    return !logged ? children : <Navigate to="/marvel" />;
};
