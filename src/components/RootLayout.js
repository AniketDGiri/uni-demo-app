import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
