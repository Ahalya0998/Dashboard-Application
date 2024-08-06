// // styles/GlobalStyles.js
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   html, body {
//     height: 100%;
//     width: 100%;
//   }

//   #root {
//     height: 100%;
//     width: 100%;
//   }
// `;

// export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    min-height: 100vh; /* Ensures full viewport height */
    min-width: 100vh;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #181818;
    color: white;
    display: flex; /* Added to ensure full height coverage */
    flex-direction: column;
  }

  #root {
    flex: 1; /* Ensures the main content takes up full available space */
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
