import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import SignUp from "./pages/HomeTeamplate/components/SignUp/SignUp";
import SignIn from "./pages/HomeTeamplate/components/SignIn/SignIn";

import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext, Suspense } from "react";

import HomePage from "./pages/HomeTeamplate/HomePage";
import Detail from "./pages/HomeTeamplate/components/Detail/Detail";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import ManagerUser from "./pages/AdminTemplate/ManageUser/ManageUser";
import DetailRoom from "./pages/HomeTeamplate/components/DetailRoom/DetailRoom";
import ManageLocation from "./pages/AdminTemplate/ManageLocation/ManageLocation";
import ManageRoom from "./pages/AdminTemplate/ManageRoom/ManageRoom";
import ManageBooking from "./pages/AdminTemplate/MangeBooking/ManageBooking";

export const NotificationContext = createContext();

const HomeTemplate = React.lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: (
      <Suspense fallback={<div>Loading ...</div>}>
        <HomeTemplate />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "detail-room/:id",
        element: <DetailRoom />,
      },
    ],
  },
  {
    path: pathDefault.signUp,
    element: <SignUp />,
  },
  {
    path: pathDefault.signIn,
    element: <SignIn />,
  },
  {
    path: pathDefault.admin,
    element: <AdminTemplate />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-user",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-location",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManageLocation />
          </Suspense>
        ),
      },
      {
        path: "manager-room",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManageRoom />
          </Suspense>
        ),
      },
      {
        path: "manager-booking",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManageBooking />
          </Suspense>
        ),
      },
    ],
  },
];

function App() {
  const routes = useRoutes(arrRoutes);

  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    // toast.error || toast.success || toast.warning || toast.info
  };

  return (
    <>
      <NotificationContext.Provider value={handleNotification}>
        {routes}
        <ToastContainer />
      </NotificationContext.Provider>
    </>
  );
}

export default App;
