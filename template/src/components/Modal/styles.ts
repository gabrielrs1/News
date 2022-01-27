import styled from "styled-components";

export const BoxContent = styled.div`
    form {
        display: flex;
        flex-direction: column;

        .special-label {
            left: 1px;
            background: 0;
            color: rgba(0, 0, 0, 0.38);
            font-weight: 400;
            font-size: 13px;
            padding: 0;
            position: absolute;
        }
    }

    p {
        margin: auto;
        padding: 10px 20px;
        background: #0f0f0fc5;
        text-align: center;
        color: #fff;
        border-radius: 10px;

        width: 300px;
    }

    .email {
        margin-bottom: 23px;
    }

    .phone {
        width: 100%;
        height: 1.4375em;
        background: none;
        outline: none;
        border: none;
        border-bottom: 1px solid #0006;
        border-radius: 0px;

        &:focus {
            border: none;
            border-bottom: 2px solid #1976d2;
            box-shadow: none;
        }

        &:hover {
            border-bottom: 2px solid #000;
        }
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