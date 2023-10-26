import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import Notifications from "~/pages/notifications";
import Explore from "~/pages/explore";
import NotFound from "~/pages/not-found";
import MainLayout from "~/layouts/main";
import Profile from "~/pages/profile";
import Bookmarks from "~/pages/bookmarks";
import Lists from "~/pages/lists";
import Messages from "~/pages/messages";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "Lists",
        element: <Lists />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: ":slug",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
