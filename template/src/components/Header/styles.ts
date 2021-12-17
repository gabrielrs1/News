import styled from "styled-components";

export const BoxContent = styled.div`
    width: 100%;
    height: 8vh;
    background: #4a4a4a;
    padding: 0 1rem;

    div {
        max-width: 1200px;
        height: 100%;
        margin: auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    
        img {
            border-radius: 50px;
            width: 75px;
            height: 54px;
        }

        .navegation {
            a {
                border: 0;
                margin: 0 1rem;
                font-size: 1rem;
                background: none;
                color: #ffffff;
                text-decoration: none;

                cursor: pointer;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }
`;