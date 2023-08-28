import { MarvelPage } from '../pages';
import { DcPage } from '../pages';
import { SearchPage } from '../pages';
import { HeroPage } from '../pages';

export const childrenHeroesRoutes = [
    // Si la pagina se encuentra en "/" automaticamente se montara el componente MarvelPage
    {
        index: true,
        element: <MarvelPage />,
    },
    {
        path: 'marvel',
        index: true,
        element: <MarvelPage />,
    },
    {
        path: 'dc',
        element: <DcPage />,
    },
    {
        path: 'search',
        element: <SearchPage />,
    },
    {
        path: 'hero/:id',
        element: <HeroPage />,
    },
];
