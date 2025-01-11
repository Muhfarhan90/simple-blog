import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
// Pages
import Home from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blogs/Index";
import Post from "../pages/blogs/_id";
import ErrorPage from "../components/ErrorPage";
import { posts, postById } from "../apis/loaders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: posts
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: postById
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
