import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/toys"),
            },
            {
                path: "/toy/:id",
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/toys/${params.id}`),
            },
        ],
    },
]);


export default router;