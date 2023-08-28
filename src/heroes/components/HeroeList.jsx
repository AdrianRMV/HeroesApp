/* eslint-disable react/prop-types */
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

export const HeroeList = ({ publisher }) => {
    const heroesByPublisher = useMemo(
        () => getHeroesByPublisher(publisher),
        [publisher]
    );

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {heroesByPublisher.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
                // {...hero} esta mandando al componente todos los atributos del "hero" en este c aso, para no tener que mandar uno por uno o el objeto completo
            ))}
        </div>
    );
};
