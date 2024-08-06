import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { CiMail, CiSettings } from "react-icons/ci";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #242424;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  padding: 10px;
  margin-left: 40px;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Input = styled.input`
  border: none;
  background: none;
  color: white;
  margin-left: 10px;
  outline: none;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 5px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 20px;
    font-size: 24px; /* Adjust the size as needed */
    color: white; /* Set the color to white */
  }
  
  @media (max-width: 768px) {
    & > * {
      margin-left: 15px;
      font-size: 20px;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Search>
        <FaSearch />
        <Input type="text" placeholder="Search" />
      </Search>
    </div>
    <Icons>
      <CiMail />
      <CiSettings />
      <FaBell />
      <FaUser />
    </Icons>
  </HeaderContainer>
);

export default Header;

