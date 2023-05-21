import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys";

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
        ],
    },
]);


export default router;