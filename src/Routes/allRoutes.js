import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import HomePage from "../components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
