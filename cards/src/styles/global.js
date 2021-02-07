import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, input{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: none;
}
html{
  font-family: 'Roboto', sans-serif;
  color: var(--primary);
}

:root{
  --primary: #2699fb;
  --grey: #bce0fd;
  --fontcolor: #65b7fc;
  --inputbackground: #f1f9ff;
}
`;
