import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import UsersPage from "./components/pages/UsersPage";
import BlogPostsPage from "./components/pages/BlogPostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/blog-post",
    element: <BlogPostsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
