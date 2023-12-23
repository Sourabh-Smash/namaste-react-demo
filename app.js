import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestrauntMenu from "./src/components/RestrauntMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element:<Body/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/restraunt/:resId",
        element:<RestrauntMenu/>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);
