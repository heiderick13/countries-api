import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

import data from "./data.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home data={data} />,
      },
      {
        path: "/details/:name",
        element: <Details data={data} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
