import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../Components/CoffeeCard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children :[
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=> fetch('../categories.json'),
            children :[
              {
                path : '/',
                element : <CoffeeCard></CoffeeCard>,
                loader : ()=> fetch('../coffees.json'),
              },
              {
                path : '/category/:category',
                element : <CoffeeCard></CoffeeCard>,
                loader : ()=> fetch('../coffees.json'),
              }
            ]
        },
        {
            path : '/coffees',
            element : <Coffees></Coffees>
        },
        {
            path : '/dashboard',
            element : <Dashboard></Dashboard> 
        },
      ]
    }
  ]);
  export default router;
  