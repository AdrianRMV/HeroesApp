import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    // Filtra en el arreglo de objetos de HEROES y regresa otro arreglo de objetos con aquellos heroes que son del mismo publisher del que se esta pidiendo en la funcion por parametro
    return heroes.filter((heroe) => heroe.publisher === publisher);
};
