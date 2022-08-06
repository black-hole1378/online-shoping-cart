import  {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  
     
  body {
     background-color: hsl(30, 38%, 92%);
     width: 100%;  
     height: 100vh;
     position: relative; 
  }
`


export default GlobalStyle;