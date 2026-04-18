import { createBrowserRouter } from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Coverages from "../pages/Coverages/Coverages";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";




const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayouts,
    errorElement:<Error/>,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'coverage',
          Component:Coverages,
          loader:()=>fetch('/serviceCenter.json').then(res=>res.json())
        },

    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:"login",
        Component:Login
      },
      {
        path:"register",
        Component:Register
      }
    ]
  }
]);

export default router;