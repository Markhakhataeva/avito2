import React from "react";
import {Navigation} from "./Navigation";
import {Menu} from "./Menu";
import styled from "styled-components";


const HeaderStyle = styled.div`
  background-color: #292929;
    padding: 5px 0 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = (props) => {
  return (
    <HeaderStyle>
      <Menu />
      <Navigation />
    </HeaderStyle>
  );
};
