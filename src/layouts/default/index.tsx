import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

import { Background, LayoutContainer } from "./styles";

function DefaultLayout() {
  return (
    <Background>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </Background>
  );
}

export default DefaultLayout;
