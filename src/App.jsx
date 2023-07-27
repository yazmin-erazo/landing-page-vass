import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_variables.scss";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Header from "./components/common/header/Header";
import FooterMenu from "./components/common/footer/FooterMenu";
import FooterCopyright from "./components/common/footer/FooterCopyright";

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
      <Header />
      <AppRoutes />
      <FooterMenu />
      <FooterCopyright />
    </BrowserRouter>
  );
};

export default App;
