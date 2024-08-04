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
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #3a3a3a;
  padding: 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  background: none;
  color: white;
  margin-left: 10px;
  outline: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 20px;
    font-size: 24px; /* Adjust the size as needed */
    color: white; /* Set the color to white */
  }
`;

const Header = () => (
  <HeaderContainer>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '80px' }}>
      {/* <FaHome style={{ color: 'white', marginRight: '80px' }} />  */}
      <Search>
        <FaSearch style={{marginLeft:'130px'}}/>
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
