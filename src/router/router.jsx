import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/JobDetails/jobDetails";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

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
        path: '/jobs/:id',
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
      },{
        path: '/myApplications',
        element: <PrivateRoute>
          <MyApplications />
        </PrivateRoute>
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