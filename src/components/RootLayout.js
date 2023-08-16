import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";


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
