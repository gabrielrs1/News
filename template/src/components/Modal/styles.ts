import styled from "styled-components";

export const BoxContent = styled.div`
    form {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: auto;
        padding: 10px 20px;
        background: #0f0f0fc5;
        text-align: center;
        color: #fff;
        border-radius: 10px;

        width: 300px;
        /* font-size: 20px; */
    }

    button {
        margin-top: 50px;
        font-size: 15px;
        font-weight: 600;
        border: 0;
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
        color: #fff;
        background: #0f0f0fc5;

        &:hover {
            filter: drop-shadow(0px 0px 2px #000);
        }
    }
`