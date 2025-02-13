import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DoctorsProfile from "../Layout/DoctorsProfile";
import DoctorProfile from "../Pages/DoctorsProfile/DoctorProfile/DoctorProfile";
import AllServices from "../Pages/Home/AllServices/AllServices";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allServices',
                element: <PrivateRoutes><AllServices></AllServices></PrivateRoutes>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes> <Appointment></Appointment></PrivateRoutes>
            }
        ]
    },
    {
        path: '/',
        element: <DoctorsProfile></DoctorsProfile>,
        children: [
            {
                path: '/doctorProfile/doctorInfo',
                element: <DoctorProfile></DoctorProfile>
            }
        ]
    }
]);