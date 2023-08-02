import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_variables.scss";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import MainLayout from './layouts/MainLayout'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contacto", element: <Contact /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
