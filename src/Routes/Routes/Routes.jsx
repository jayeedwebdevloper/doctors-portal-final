import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Appointment from "../../Components/Appointment/Appointment";
import Login from "../../Components/Account/Login";
import SignUp from "../../Components/Account/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Dashboard from "../../Layout/Dashboard";
import DashboardPage from "../../Components/DashboardPage/DashboardPage";
import AllUser from "../../Components/DashboardPage/AllUser/AllUser";
import AddDoctor from "../../Components/DashboardPage/AddDoctor/AddDoctor";
import ManageDoctors from "../../Components/DashboardPage/ManageDoctors/ManageDoctors";
import AdminRouter from "../AdminRouter/AdminRouter";
import Contact from "../../Components/Contact/Contact";
import Bookings from "../../Components/DashboardPage/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <PrivateRouter><Appointment></Appointment></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage></DashboardPage>
            },
            {
                path: '/dashboard/all-user',
                element: <AdminRouter><AllUser></AllUser></AdminRouter>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRouter><AddDoctor></AddDoctor></AdminRouter>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRouter><ManageDoctors></ManageDoctors></AdminRouter>
            },
            {
                path: '/dashboard/bookings',
                element: <AdminRouter><Bookings></Bookings></AdminRouter>
            },
        ]
    }
]);

export default router;