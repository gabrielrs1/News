import styled from "styled-components";

export const BoxContent = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .limit {
        max-width: 1200px;
        padding: 50px 20px 0 20px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 30px;
        
        p {
            font-size: 2.3rem;
            font-family: "Poppins";
        }

        span {
            font-size: 1.6rem;
            font-weight: 700;
            display: block;

            margin: 10px 0 20px 0;
        }

        button {
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
    }

    img {
        width: 450px;
        border-radius: 20px;
    }

    @media(max-width: 1078px) {
        img {
            width: 350px;
        }
    }

    @media(max-width: 730px) {
        .limit {
            div {
                display: flex;

                flex-direction: column;
                justify-content: center;
                align-items: center;

                text-align: center;
            }
        }

        img {
            display: none;
        }
    }
`;