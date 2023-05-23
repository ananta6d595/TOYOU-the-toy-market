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
import MyToys from "../pages/Mytoys/MyToys";
import UpdateToys from "../pages/UpdateToys";
import MyToysLayOut from "../Layouts/MyToysLayOut";

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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader: () =>
                    fetch(
                        "https://toy-market-place-server-two.vercel.app/toys"
                    ),
            },
            {
                path: "/toy/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://toy-market-place-server-two.vercel.app/toys/${params.id}`
                    ),
            },
            {
                path: "/myToys",
                element: <MyToysLayOut></MyToysLayOut>,
                // errorElement: <ErrorPage></ErrorPage>,
                children: [
                    {
                        // path  "/" die start hoile sheta root route hishabe dhore.
                        path: "/myToys",
                        element: (
                            <PrivateRoute>
                                <MyToys></MyToys>
                            </PrivateRoute>
                        ),
                        loader: () =>
                            fetch(
                                "https://toy-market-place-server-two.vercel.app/toys"
                            ),
                    },
                    {
                        // path  "/" die start hoile sheta root route hishabe dhore.
                        path: "update/:id",
                        element: (
                            <PrivateRoute>
                                <UpdateToys></UpdateToys>
                            </PrivateRoute>
                        ),
                        loader: ({ params }) =>
                            fetch(
                                `https://toy-market-place-server-two.vercel.app/toys/${params.id}`
                            ),
                    },
                ],
            },
            {
                path: "/addToys",
                element: (
                    <PrivateRoute>
                        <AddToys></AddToys>
                    </PrivateRoute>
                ),
            },

            {
                path: "/blog",
                element: <Blog></Blog>,
            },
        ],
    },
]);

export default router;
