import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Layout/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
