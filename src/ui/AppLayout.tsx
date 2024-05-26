import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const StyledAppLayout = styled.div``;

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
