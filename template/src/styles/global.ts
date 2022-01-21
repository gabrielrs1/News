import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    body, html {
        overflow-y: scroll;
        overflow-x: hidden;

        width: 100vw;
        
        background: linear-gradient(50deg, rgba(0,0,0,.3), rgba(241,241,241,.4) 40%),
                    linear-gradient(140deg, rgba(0,0,0,.3), rgba(241,241,241,.4) 40%),
                    linear-gradient(220deg, rgba(0,0,0,.3), rgba(241,241,241,.4) 40%),
                    linear-gradient(310deg, rgba(0,0,0,.3), rgba(241,241,241,.4) 40%);
        background-repeat: no-repeat;
    }

    .react-modal-overlay {
        z-index: 4;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        margin: 0 20px;
        width: 100%;
        max-width: 576px;
        background: #f1f1f1;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
`