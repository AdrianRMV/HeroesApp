import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/login', {
            // replace evita que el usuario navege hacia atras en el navegador, esto para evitar por ejemplo en el logout que se meta de nuevo a la aplicacion SIN estar logueado
            replace: true,
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-2 px-5">
            <Link className="navbar-brand" to="/">
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? 'active' : ''}`
                        }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? 'active' : ''}`
                        }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? 'active' : ''}`
                        }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {user?.name}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
