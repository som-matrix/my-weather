import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  html{
      font-size:62.5%;
      font-family:'Lato', sans-serif;
  }
  h1{
    font-weight:700;
      color:#fff;
  }
  h2{
    font-weight:700;
          color:#fff;
  }
  h3{
    font-size:1.5rem;
    font-weight:700;
    color:#fff;  
  }

`
export default GlobalStyle;