import styled from "styled-components";

export const BoxContent = styled.div`
    width: 100%;
    position: fixed;
    background: #00000054;
    padding: 0 1rem;

    div {
        max-width: 1200px;
        height: 100%;
        margin: auto;

        padding: 10px 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
    
        img {
            width: 54px;
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
                    filter: drop-shadow(0px 0px 2px #fff);
                    font-size: 1.1rem;
                }
            }
        }
    }
`;