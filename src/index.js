import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Basic from "./pages/Basic";
import Framework from "./pages/Framework";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>,
  },
  {
    path: "/Basic",
    element: <Basic />,
  },
  {
    path: "/Framework",
    element: <Framework />,
  },
  {
    path: "/Tips",
    element: <Tips />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
serviceWorkerRegistration.register();