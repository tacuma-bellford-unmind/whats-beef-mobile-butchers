import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { Butcher } from "./Butcher";
import { loader as butcherLoader } from "./Butcher";
import { loader as butchersListLoader } from "./ButchersList";

const router = createBrowserRouter([
  {
    path: "/",
    loader: butchersListLoader,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/butchers/:id",
    loader: butcherLoader,
    element: <Butcher />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
