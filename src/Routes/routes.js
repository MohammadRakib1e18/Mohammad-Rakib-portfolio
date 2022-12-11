import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Home from "../components/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
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
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    }
])