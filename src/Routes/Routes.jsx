import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Brand from "../Pages/Brand";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BrandCoupon from "../Components/Brand/BrandCoupon";
import PrivetRoute from "./PrivetRoute";
import About from "../Pages/About";
import UserPfp from "../Pages/UserPfp";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";
import UpdateUser from "../Pages/UpdateUser";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("/CouponsData.json"),
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
        loader: () => fetch("/CouponsData.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/:id",
        element: (
          <PrivetRoute>
            <BrandCoupon></BrandCoupon>
          </PrivetRoute>
        ),
        loader: () => fetch("/CouponsData.json"),
      },
      {
        path: "/aboutDev",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <UserPfp></UserPfp>
          </PrivetRoute>
        ),
      },
      {
        path: "/profile/updateUser",
        element: (
          <PrivetRoute>
            <UpdateUser></UpdateUser>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/login/forgetPassword",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default route;
