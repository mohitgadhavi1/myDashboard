import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-size: calc(10px + 2vmin);
  }
  
  body {
    background-image: repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 2px,transparent 2px, transparent 4px),linear-gradient(135deg, rgb(4, 9, 182),rgb(211, 86, 197));
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
  
  
  
  header {
    
    height: 10vh;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
  //  border-bottom: 2px solid white;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding-bottom: 0.5rem;
   
  }
  
  main {
   
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding: 6rem 4rem 4rem 4rem;
   
    position: relative;
    top: 10vh;
    min-height: 90vh;
   grid-gap: 3rem;
    
  }

  @media only screen and (max-width: 950px){
      main{
        display: flex;
        padding: 6rem 2rem 2rem 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
      }

  }
  
 

 
`;

export default GlobalStyle;
