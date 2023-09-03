import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PrivateRoutes = ({ children }) => {
    const { logged } = useContext(AuthContext);
    let location = useLocation();

    const lastPath = location.pathname + location.search;
    localStorage.setItem('lastPath', lastPath);

    // Si el usuario está autenticado, renderiza el componente hijo
    if (logged) {
        return children;
    }

    // Si no está autenticado, redirige al usuario al inicio de sesión
    return <Navigate to="/login" state={{ from: location }} />;
};
