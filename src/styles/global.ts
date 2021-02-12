import { createGlobalStyle } from 'styled-components';
import GithubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f0f0f5 url(${GithubBackground} ) no-repeat 70% 0%;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;
