import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    background-color: #282c34;
  
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: pink;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  header {
    background-color: #282c34;
    height: 10vh;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    border-bottom: 2px solid white;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding-bottom: 0.5rem;
  }
  
  main {
    display: grid;
    grid-template-columns: repeat(2, 50%);
   padding: 4rem;
   
    position: absolute;
    top: 10vh;
    min-height: 90vh;
   grid-gap: 3rem;
    
  }

  @media only screen and (max-width: 950px){
      main{
        display: flex;
        padding: 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
      }

  }
  
 

 
`;

export default GlobalStyle;
