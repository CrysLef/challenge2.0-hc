import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: 'Oswald', sans-serif;
        border: none;
    }

    body {
        overflow-x: hidden;
        overflow-y: auto;
    }

    li {
        list-style: none;
    }

`