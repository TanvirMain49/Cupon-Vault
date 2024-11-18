import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";

const route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<HomeLayout></HomeLayout>
            }
        ]
    },
    {
        path:'/about',
        element:<h1>about</h1>
    }
])

export default route;