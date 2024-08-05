import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #181818;
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on small screens */
  }
`;

export const SidebarContainer = styled.div`
  flex: 1;
  background-color: #2c2c2c;
  @media (max-width: 768px) {
    display: none; /* Hide sidebar on small screens */
  }
`;

export const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  color: white;

  @media (max-width: 768px) {
    flex: 1; /* Adjust content area on small screens */
  }
`;
