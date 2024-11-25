import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRout";
import UpdateProfile from "./UpdateProfile";
import ForgotPassword from "../pages/ForgetPassword";
import MyProfile from "./MyProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
          {
            path: "",
            element: <Navigate to={"/category/01"}></Navigate>,
          },
          {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
    {
      path: "/news/:id",
      element: (
        <PrivateRoute>
          <NewsDetails></NewsDetails>
        </PrivateRoute>
      ),
      loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path: "/update-profile",
      element: (
        <PrivateRoute>
          <UpdateProfile />
        </PrivateRoute>
      ),
    },
    {
      path: "/my-profile",
      element: (
        <PrivateRoute>
          <MyProfile />
        </PrivateRoute>
      ),
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children:[
        {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
          {
            path: "/auth/forgot-password",
            element: <ForgotPassword></ForgotPassword>,
          },
      ],
    },
    {
      path: "*",
      element: <h2>Page Not Found</h2>,
    },
  ]);
export default router;