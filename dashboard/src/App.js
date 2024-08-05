// import React from 'react';
// import styled from 'styled-components';
// import Dashboard from './components/Dashboard';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';

// const AppContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   background-color: #181818;
// `;

// const Content = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   background-color: #181818;
//   color: white;
// `;

// function App() {
//   return (
//     <AppContainer>
//       <Sidebar />
//       <Content>
//         <Header />
//         <Dashboard />
//       </Content>
//     </AppContainer>
//   );
// }

// export default App;


import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'; // Adjust the path if needed
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const AppContainer = styled.div`
  // display: flex;
  // height: 100vh;
  // background-color: #181818;

  // @media (max-width: 768px) {
  //   flex-direction: column;
  // }
`;

const SidebarContainer = styled.div`
  // flex: 1;
  // background-color: #2c2c2c;

  // @media (max-width: 768px) {
  //   display: none; /* Hide sidebar on small screens */
  // }
`;

const Content = styled.div`
  // flex: 3;
  // display: flex;
  // flex-direction: column;
  // background-color: #181818;
  // color: white;
  

  @media (max-width: 768px) {
    flex: 1; /* Adjust content area on small screens */
  }
`;



// function App() {
//   return (
//     // <AppContainer>
//       /* <SidebarContainer> */
//         /* <Sidebar /> */
//       /* </SidebarContainer> */
//       <Content>
//         <Header />
//         <Sidebar />
//         <Dashboard />
//        </Content> 
//     // </AppContainer>
//   );
// }

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <Header />
          <Dashboard />
        </Content>
      </AppContainer>
    </>
  );
}


export default App;
