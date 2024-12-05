import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import DonationCampain from "../components/DonationCampain";
import HelpToOthers from "../components/HelpToOthers";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";
import DetailsPage from "../components/DetailsPage";
import PrivareRoutes from "./PrivareRoutes";


const rouets=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/donation',
                element:<DonationCampain></DonationCampain>,
                loader:()=>fetch('/donation.json')
            },
            {
                path:'/help',
                element:<HelpToOthers></HelpToOthers>
            },
            {
                path:'/dashboard',
                element:<PrivareRoutes><Dashboard></Dashboard></PrivareRoutes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details',
                element:<PrivareRoutes><DetailsPage></DetailsPage></PrivareRoutes>
            },
            
        ]
    },
    {
        
            path:'*',
            element:<p className="text-center font-bold text-3xl mt-20">Error 404 <br /> Page not found </p>
        
    }
])

export default rouets;