import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
    const navigate = useNavigate();

    const location = useLocation();

    // Retorna "q" que es la query que se esta mandando por URL
    // Si no retorna nada el valor es una cadena vacia por defecto
    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: '',
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if (searchText.trim() <= 1) return;

        navigate(`?q=${searchText.toLowerCase().trim()}`);
        onResetForm();
    };

    return (
        <>
            <h1>Search Page</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline btn-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/* Pregunta si el arreglo de heroe no contiene nada, si es que NO contiene pregunta si ya tiene algun valor la variable q, en este caso la query para poder evaluar si el usuario hizo o no una peticion, la cual dependera para el mensaje que se mostrara */}

                    {heroes.length < 1 ? (
                        q ? (
                            <div className="alert alert-danger animate__animated animate__fadeIn">
                                There not exist <b>{q}</b>
                            </div>
                        ) : (
                            <div className="alert alert-primary animate__animated animate__fadeIn">
                                Search a Hero
                            </div>
                        )
                    ) : (
                        heroes.map((hero) => (
                            <HeroCard {...hero} key={hero.id} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};
