import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.google.com/specimen/Source+Sans+Pro');
  * {    
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
    font-family: Roboto;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
  }

  input[type=checkbox]{
    cursor: pointer;
    color:white;
    background-color: #FFFFFF;
    outline: 0;
    z-index: 3;
    width: 17px;
    height: 17px;
    
  }
  a{
    text-decoration: none !important;
    color: inherit !important;
  }

  html{
    scroll-behavior: smooth;
  }
  body,
  p {
    font-family: "Lato", sans-serif;
  }
  h2 {
    font-family: SuvinilNormal
  }
`;
