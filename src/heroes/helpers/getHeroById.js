import { heroes } from '../data/heroes';

export const getHeroById = (id) => {
    // Traera el arreglo de heroes, con la funcion "find()" de los arreglos regresa un solo valor, en este caso el que estamos especificando el cual buscara entre todos los heroes del arreglo el que tenga el "id" identico con el que se llamo a la funcion.
    return heroes.find((hero) => hero.id === id);
};
