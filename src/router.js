import { createBrowserRouter } from "react-router-dom";
import  Login from './pages/login/login.js';
import  Home from './pages/home/home.js';
const router=createBrowserRouter([
{path:"/",element:<Home/>},
{path:"/login",element:<Login/>},
]) 
export default router