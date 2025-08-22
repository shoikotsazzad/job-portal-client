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
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
import AllJob from "../pages/AllJob/AllJob";

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
        path: '/jobs',
        element: <AllJob></AllJob>,
      },
      {
        path: 'jobs/:id',
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://job-portal-server-nu-seven.vercel.app/jobs/${params.id}`)
      },
      {
        path: 'jobApply/:id',
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
      },{
        path: 'myApplications',
        element: <PrivateRoute>
          <MyApplications />
        </PrivateRoute>
      },
      {
        path: 'addJob',
        element: <PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>
      },
      {
        path: 'myPostedJobs',
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>
      },
      {
        path: 'viewApplications/:job_id',
        element: <PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://job-portal-server-nu-seven.vercel.app/job-applications/jobs/${params.job_id}`)
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