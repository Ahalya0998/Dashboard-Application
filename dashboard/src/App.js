import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #181818;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Content>
        <Header />
        <Dashboard />
      </Content>
    </AppContainer>
  );
}

export default App;
