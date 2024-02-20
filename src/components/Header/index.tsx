import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

import { RoutesPaths } from "@/routes/routesPaths";

import logo from "../../assets/logo.svg";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <nav>
        <NavLink to={RoutesPaths.HOME} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={RoutesPaths.HISTORY} title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  );
}

export default Header;
