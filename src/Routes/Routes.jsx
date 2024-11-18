import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Brand from "../Pages/Brand";

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
            },
        ]
    },
    {
        path:'/about',
        element:<h1>about</h1>
    }
])

export default route;