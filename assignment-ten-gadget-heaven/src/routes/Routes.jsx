import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetsCards from "../components/GadgetsCards";
import CardDetails from "../components/CardDetails";
import WishList from "../components/WishList";
import Cart from "../components/Cart";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <GadgetsCards />,
                        loader: () => fetch('../gadgets.json'),
                    },
                    {
                        path: '/category/:categoryId',
                        element: <GadgetsCards />,
                        loader: () => fetch('../gadgets.json')
                    }
                ]
            },
            {
                path: '/cardDetails/:cardId',
                element: <CardDetails />,
                loader: () => fetch('../gadgets.json')
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: 'cart',
                        element: <Cart />
                    },
                    {
                        path: 'wishList',
                        element: <WishList />
                    }
                ]
            },
        ]
    }
])

export default routes;