import React from 'react';
import styled from 'styled-components';
import { FaHome, FaChartBar } from 'react-icons/fa';
import { RiWallet2Line } from "react-icons/ri";
import { RiAppsFill } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { BsClipboardCheck } from "react-icons/bs";

const SidebarContainer = styled.div`
  width: 60px;
  height: 100vh; /* Full viewport height */
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: fixed; /* Fix the sidebar to the left */
  top: 0;
  left: 0;
`;

const Icon = styled.div`
  margin: 20px 0;
  color: #a4a4a4;
  font-size: 20px;

  &:hover {
    color: white;
  }
`;

const LogoutIcon = styled(Icon)`
  margin-top: auto;
  margin-bottom: 50px; /* Add some space from the bottom */
`;

const HomeIcon = styled(Icon)`
  color: Blue;
`;

const FillIcon = styled(Icon)`
  color: Blue;
  font-size: 30px;
`;

const Sidebar = () => (
  <SidebarContainer>
    <FillIcon><RiAppsFill /></FillIcon>
    <HomeIcon><FaHome /></HomeIcon>
    <Icon><FaChartBar /></Icon>
    <Icon><BsClipboardCheck /></Icon>
    <Icon><RiWallet2Line /></Icon>
    <Icon><IoBagCheckOutline /></Icon>
    <LogoutIcon><IoMdLogOut /></LogoutIcon>
  </SidebarContainer>
);

export default Sidebar;
