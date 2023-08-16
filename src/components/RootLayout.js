import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import BackgroundAnimation from "./animation/BackgroundAnimation";

const RootLayout = () => {
  return (
    <>
      <BackgroundAnimation></BackgroundAnimation>

      {/* <Header /> */}
      {/* <Outlet /> */}
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
