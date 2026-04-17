import { createBrowserRouter } from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Coverages from "../pages/Coverages/Coverages";




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
]);

export default router;