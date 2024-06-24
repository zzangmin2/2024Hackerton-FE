import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import UserRegister from "./pages/UserRegister/index.tsx";
import HomeGreetingContainer from "./components/HomeGreetingContainer/index.tsx";
import HomeChatContainer from "./components/HomeChatContainer/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/intro",
            element: <HomeGreetingContainer />,
          },
          {
            path: "/chat/:roomIndex",
            element: <HomeChatContainer />,
          },
        ],
      },
      {
        path: "/user-register",
        element: <UserRegister />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
