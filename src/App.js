import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Basic from "./pages/Basic";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Framework from "./pages/Framework";
import {useContext } from "react";
import Data from "./context/Data";


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
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  }, 
]);

function App() {
    const {theme} = useContext(Data);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
