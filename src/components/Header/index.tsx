import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  );
}

export default Header;
