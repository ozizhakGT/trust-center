import { Navigate, Outlet } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from './screens/Dashboard';
import NotFound from "./screens/NotFound";

const DynamicGuard = (isLoggedIn, Screen = Outlet) => isLoggedIn ? <Screen /> : <Navigate to="/login" />;

const routes = isLoggedIn => [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/:company',
        element: DynamicGuard(isLoggedIn, Dashboard),
    },
    {
        path: '/404',
        element: <NotFound />
    },
    {
        path: '*',
        element: DynamicGuard(isLoggedIn, Dashboard)
    }
];

export default routes;