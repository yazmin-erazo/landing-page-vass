import { NavDropdown } from "react-bootstrap";

const NavDropdownItem = ({ title, id, children }) => {
  return (
    <NavDropdown title={title} id={id} expand="lg" className="nav-dropdown">
      {children}
    </NavDropdown>
  );
};

export default NavDropdownItem;
