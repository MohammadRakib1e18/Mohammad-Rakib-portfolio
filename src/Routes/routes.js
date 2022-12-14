import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import PortfolioDetails from "../components/Portfolio/PortfolioDetails";
import Qualification from "../components/Qualification/Qualification";
import MainLayout from "../Layout/MainLayout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/qualification',
                element: <Qualification></Qualification>
            },
            {
                path: '/portfolioDetails/:id',
                element: <PortfolioDetails></PortfolioDetails>
            }
        ]
    }
])