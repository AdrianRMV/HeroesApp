import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { HeroesApp } from '../HeroesApp';
import { LoginPage } from '../auth';
import { HeroRoutes } from '../heroes/routes/HeroRoutes';
import { childrenHeroesRoutes } from '../heroes/routes/ChildrenHeroesRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        ),
    },
    {
        path: '/*',
        element: (
            <PrivateRoutes>
                <HeroRoutes />
            </PrivateRoutes>
        ),
        children: childrenHeroesRoutes,
    },
]);
export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
