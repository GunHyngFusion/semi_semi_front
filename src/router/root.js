import { createBrowserRouter } from "react-router-dom";

// default roots
import MainPage from "../pages/Main/MainPage";
import AdminPage from "../pages/Admin/AdminPage";
import SeatPage from "../pages/Seat/SeatPage";
import LoginPage from "../pages/User/LoginPage";

// Routers
import bookRouter from "./bookRouter";
import communityRouter from "./communityRouter";
import libraryInfoRouter from "./libraryInfoRouter";
import myPageRouter from "./mypageRouter";

const root = createBrowserRouter([
  // main
  {
    path: "/",
    element: <MainPage />,
  },

  // admin
  {
    path: "/admin",
    element: <AdminPage />,
  },
  // seat
  {
    path: "/seat",
    element: <SeatPage />,
  },

  // user
  {
    path: "/user",
    element: <LoginPage />,
  },

  // book router
  {
    path: "book",
    children: bookRouter(),
  },

  // Community router
  {
    path: "community",
    children: communityRouter(),
  },

  // LibraryInfo router
  {
    path: "libaryinfo",
    children: libraryInfoRouter(),
  },

  // mypage router
  {
    path: "mypage",
    children: myPageRouter(),
  },
]);

export default root;
