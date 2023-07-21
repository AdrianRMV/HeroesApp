import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { HeroesApp } from '../HeroesApp';
import { LoginPage } from '../auth';
import { HeroRoutes } from '../heroes/routes/HeroRoutes';
import { childrenHeroesRoutes } from '../heroes/routes/ChildrenHeroesRoutes';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <HeroRoutes />,
        children: childrenHeroesRoutes,
    },
]);
export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
