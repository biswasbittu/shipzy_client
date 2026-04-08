import { createBrowserRouter } from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";




const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayouts,
    errorElement:<Error/>,
    children:[
        {
            index:true,
            Component:Home,
        }
    ]
  },
]);

export default router;