import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import BackgroundAnimation from "./animation/BackgroundAnimation";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
