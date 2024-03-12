import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "../components/Root";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import TvDetail from "../pages/TvDetails"
import Search from "../pages/Search"
import TvShows from "../pages/TvShows";
import Error from "../components/Error";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/tvshow/:id",
          element: <TvDetail />,
        },
        {
          path: "search",
          element: <Search/>,
        },
        {
          path: "/tvshows",
          element: <TvShows />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
