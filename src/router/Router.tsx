import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { HomeLayout } from "../layout";
import ServicesLayout from "../layout/ServicesLayout";
import ContactLayout from "../layout/ContactLayout";
import AboutLayout from "../layout/AboutLayout";
import BlogLayout from "../layout/BlogLayout";
import OneBlog from "../pages/oneBlog/OneBlog";
// import AllBlogs from "../pages/blog/AllBlog";

const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))
const Services = lazy(() => import("../pages/services/Services"))
const Contact = lazy(() => import("../pages/contact/Contact"))
const AllBlogs = lazy(() => import("../pages/blog/AllBlog"))
const About = lazy(() => import("../pages/about/About"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/services",
        element: <ServicesLayout />,
        children: [
            {
                index: true,
                element: <Services />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
    {
        path: "/about",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <About />
            }
        ]
    },
    {
        path: "/blogs",
        element: <BlogLayout />,
        children: [
            {
                index: true,
                element: <AllBlogs />
            },
            {
                path: "oneblog",
                element: <OneBlog />
            }
        ]
    },
    // {
    //     path: "/oneblog",
    //     element: <OneBlogLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <OneBlog />
    //         }
    //     ]
    // },
])
