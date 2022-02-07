import styled from "styled-components";

type ScreenLockProps = {
    screenLock: boolean;
}

export const BoxContent = styled.div<ScreenLockProps>`
    max-width: 900px;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 0px 20px;

    div {
        margin: 60px 0 40px 0;
    }

    button {
        display: ${(props) => props.screenLock ? "none"  : "" };
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
        background: #0f0f0fc5;

        &:hover {
            filter: drop-shadow(0px 0px 2px #000);
        }
    }
`;

export const Content = styled.div<ScreenLockProps>`
    text-align: justify;

    filter: ${(props) => props.screenLock ? "blur(0px)"  : "blur(5px)"};

    h3 {
        margin-top: 20px;
    }

    p {
        margin-top: 15px;
        font-size: 1.1rem;
    }
    
    .info {
        margin: 0;
        display: flex;
        justify-content: space-between;
    
        span {
            display: block;
            margin-top: 8px;
            font-size: 0.85rem;
            color: #0009;
        }

        a { 
            margin-top: 4px;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;