import styled from "styled-components";

export const BoxContent = styled.div`
    input {
        width: 100%;
        height: 45px;
        border-radius: 10px;
        border: 1px solid #b3b3b3;
        margin-bottom: 20px;
        padding: 0 10px 0 10px;
        font-size: 18px;

    }
    
    button {
        font-size: 15px;
        font-weight: 600;
        border: 0;
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
        color: #fff;
        background: #06005c;

        &:hover {
            filter: drop-shadow(0px 0px 2px #000);
        }
    }  
`