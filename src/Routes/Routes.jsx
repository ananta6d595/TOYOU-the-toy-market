import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blogs";
import AddToys from "../pages/AddToys";
import MyToys from "../pages/MyToys";

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
                element: (
                    <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/toys/${params.id}`),
            },
            {
                path: "/addToys",
                element: <AddToys></AddToys>,
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
        ],
    },
]);

export default router;
