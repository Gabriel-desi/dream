import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Pages/Header.jsx";
import About from "./Pages/About.jsx";
import Properties from "./Pages/Properties.jsx";
import Blog from "./Pages/Blog.jsx";
// import Login from "./Pages/Login.jsx";
// import Signup from "./Pages/Signup.jsx";
import App from "./layout/App.jsx";
// import Auth from "./layout/Auth.jsx";
const router = createBrowserRouter([
  // {
  //   path: "/auth",
  //   element: <Auth />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Login />,
  //     },
  //     {
  //       path: "signup",
  //       element: <Signup />,
  //     },
  //   ],
  // },
  // authorised users
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
