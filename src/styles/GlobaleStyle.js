import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: calc(10px + 2vmin);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    cursor: grab;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 2px,transparent 2px, transparent 4px),linear-gradient(135deg, rgb(4, 9, 182),rgb(211, 86, 197));
    
   /* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */

-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */

  
  
  header {
   // border: 1px solid whitesmoke;
    margin-bottom: 1vh;
    height: 10vh;
    display: flex;
    top: 0;
  //  border-bottom: 2px solid white;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding:1rem 0 0 0;
   
  }
  
  main {
    //border: 1px solid whitesmoke;
   
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding: 4rem 0rem 2rem 5rem;
  
    grid-row-gap: 3rem;
    
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
}
`;

export default GlobalStyle;
