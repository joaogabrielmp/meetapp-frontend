import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    /* height: 100%; */
    min-height: 100vh;
    background: linear-gradient(180deg, #22202C 0%, #402845 100%);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .react-datepicker-wrapper, .react-datepicker__input-container, .react-datepicker-ignore-onclickoutside {
    width: 100%;
  }
`;
