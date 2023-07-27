import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./header.scss";
import NavDropdownItem from "../navDropdownItem/NavDropdownItem";
import Logo from "../../common/logo/Logo";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar variant="dark" expand="lg" className={`fixed-top header ${isNavOpen ? "navbar-open" : ""}`}
    >
      <Container className="px-3 py-3">
        <NavLink to="/"><Logo /></NavLink>
        <Navbar.Toggle onClick={handleNavToggle} className={isNavOpen ? "navbar-toggler-open" : ""}>
          {isNavOpen ? ( <i className="bi bi-x-lg fs-2 text-white"></i> ) : ( <i className="bi bi-list fs-2 text-white"></i> )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-5 my-md-0 me-auto">
            <NavLink to="/" className="nav-link">Casos de éxito</NavLink>
            <NavDropdownItem title="Mercados" id="market-dropdown">
              <NavLink to="/mercadouno" className="dropdown-item">Mercado Uno</NavLink>
              <NavLink to="/mercadodos" className="dropdown-item">Mercado Dos</NavLink>
              <NavLink to="/mercadotres" className="dropdown-item">Mercado Tres</NavLink>
            </NavDropdownItem>

            <NavDropdownItem title="Países" id="country-dropdown">
              <NavDropdown.Item href="/chile">Chile</NavDropdown.Item>
              <NavDropdown.Item href="/colombia">Colombia</NavDropdown.Item>
              <NavDropdown.Item href="/mexico">México</NavDropdown.Item>
              <NavDropdown.Item href="/peru">Perú</NavDropdown.Item>
              <NavDropdown.Item href="/uk">Reino Unido</NavDropdown.Item>
              <NavDropdown.Item href="/benelux">Benelux</NavDropdown.Item>
            </NavDropdownItem>

            <NavDropdownItem title="Somos VASS" id="vass-dropdown">
              <NavDropdown.Item href="/vassuno">Somos VASS Uno</NavDropdown.Item>
              <NavDropdown.Item href="/vassdos">Somos VASS Dos</NavDropdown.Item>
              <NavDropdown.Item href="/vasstres">Somos VASS Tres</NavDropdown.Item>
            </NavDropdownItem>

            <NavDropdownItem title="Cómo lo hacemos" id="how-dropdown">
              <NavDropdown.Item href="/comouno">Cómo lo hacemos Uno</NavDropdown.Item>
              <NavDropdown.Item href="/comodos">Cómo lo hacemos Dos</NavDropdown.Item>
              <NavDropdown.Item href="/comotres">Cómo lo hacemos Tres</NavDropdown.Item>
            </NavDropdownItem>

            <Nav.Link href="/insights">Insights</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <Nav.Link href="/research">VASS Research</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
          <Nav.Link href="#en" className="mr-3 mb-5 mb-md-0 ">EN</Nav.Link>
          <Nav.Link href="#">
          <i className="bi bi-search navbar-search-desktop"></i>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

