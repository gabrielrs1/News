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
        position: absolute;
        top: 50%;

        font-size: 20px;
        border: 1px solid #fff;
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
    }
`;

export const Content = styled.div<ScrollProps>`
    margin-top: 40px;
    text-align: justify;

    filter: ${(props) => props.scroll ? "blur(0px)"  : "blur(5px)"};

    h3 {
        margin-top: 20px;
    }

    p {
        margin-top: 5px;
    }

    
`;