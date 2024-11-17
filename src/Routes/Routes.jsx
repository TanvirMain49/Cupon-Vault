import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
    {
        path:'/',
        element:<h1>Hello</h1>
    },
    {
        path:'/about',
        element:<h1>about</h1>
    }
])

export default route;