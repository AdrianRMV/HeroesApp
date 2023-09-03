import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
    const { login } = useContext(AuthContext);

    // Si existe un lastPath, entonces la variable tendra el valor del lastPath SI NO, tendra el valor de '/'
    const lastPath = localStorage.getItem('lastPath') || '/';

    const navigate = useNavigate();

    const onLogin = () => {
        login('Adrian Ramirez');
        navigate(lastPath, {
            replace: true,
        });
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary" onClick={onLogin}>
                Login
            </button>
        </div>
    );
};
