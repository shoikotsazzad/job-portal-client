import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <div>Route Not Found</div>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: 'register',
            element: <Register></Register>,
        },
        {
          path: 'signin',
          element: <SignIn></SignIn>,
        }
      ]
    },
  ]);  

  export default router;