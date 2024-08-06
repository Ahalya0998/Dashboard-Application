import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'; // Adjust the path if needed
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const SidebarContainer = styled.div`
  flex: 1;
  background-color: #2c2c2c;

  @media (max-width: 768px) {
    display: none; /* Hide sidebar on small screens */
  }
`;

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  color: white;

  @media (max-width: 768px) {
    flex: 1; /* Adjust content area on small screens */
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <AppContainer> */}
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <Header />
          <Dashboard />
        </Content>
      {/* </AppContainer>/ */}
    </>
  );
}
export default App;
