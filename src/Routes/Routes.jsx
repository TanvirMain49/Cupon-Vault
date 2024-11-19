import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Brand from "../Pages/Brand";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<HomeLayout></HomeLayout>,
                loader:()=> fetch('CouponsData.json')
            },
            {
                path:'/brand',
                element:<Brand></Brand>,
                loader:()=> fetch('CouponsData.json')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path:'/about',
        element:<h1>about</h1>
    }
])

export default route;