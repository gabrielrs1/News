import styled from "styled-components";

type ScrollProps = {
    scroll: boolean;
}

export const BoxContent = styled.div<ScrollProps>`
    max-width: 900px;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 0px 20px;

    button {
        display: ${(props) => props.scroll ? "none"  : "" };
        position: fixed;
        top: 50%;
        z-index: 1;

        font-size: 20px;
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
`;

export const Content = styled.div<ScrollProps>`
    margin-top: 150px;
    text-align: justify;

    filter: ${(props) => props.scroll ? "blur(0px)"  : "blur(5px)"};

    h3 {
        margin-top: 20px;
    }

    p {
        margin-top: 5px;
    }

    
`;