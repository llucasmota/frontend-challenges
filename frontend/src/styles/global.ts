import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
background: #e9ecef;
color: #ff6b6b;
  -webkit-font-smooting: antialiased;
  max-width: 800px;
  margin: auto;
}
body, input, button{
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
}
p{
  font-size: 15px;
}
h1, h2, h3, h4, h5, h6, strong{
  font-weight: 500;
}
span{
  font-size: 13px;
}
button{
  cursor: pointer
}
`;
