import "./App.css";
import Header from "./components/Layout/Header";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/allRoutes";

function App() {
  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
}

export default App;
