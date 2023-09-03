import { useParams } from 'react-router';
import { getHeroById } from '../helpers';
import { Navigate, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export const HeroPage = () => {
    const { id } = useParams();

    const hero = useMemo(() => getHeroById(id), [id]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    // Si el hero no existe, o es "undefined" lo retornara a la pantalla de inicio la cual se encuentra en la ruta "/"
    if (!hero) {
        return <Navigate to="/" />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: {hero.alter_ego}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: {hero.publisher}</b>
                    </li>
                    <li className="list-group-item">
                        <b>First Apperance: {hero.first_appearance}</b>
                    </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Back
                </button>
            </div>
        </div>
    );
};
