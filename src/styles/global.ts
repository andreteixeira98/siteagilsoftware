import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing:border-box;
        
    }
    body{
        background:#fff;
        color:red;
        font: 400 16px Roboto,  sans-serif;

        -ms-overflow-style: none;
        scrollbar-width: none;
        
    }
    body::-webkit-scrollbar{
        display:none;
    }
`;