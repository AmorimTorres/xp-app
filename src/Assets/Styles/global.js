import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body {
    background-color:#0d0e10;
    font-size: 16px;
}
button {
cursor: pointer;
}
`;
