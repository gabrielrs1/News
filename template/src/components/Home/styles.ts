import styled from "styled-components";

export const BoxContent = styled.main`
    width: 100%;
    height: 92vh;

    .limit {
        max-width: 1200px;
        height: 100%;
        margin: auto;
        padding: 0 20px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        p {
            font-size: 2.3rem;
        }

        span {
            font-size: 1.6rem;
            font-weight: 700;
            display: block;

            margin: 10px 0 20px 0;
        }

        a {
            background: #4a4a4a;
            color: #ffffff;

            text-decoration: none;

            border-radius: 10px;
            padding: 10px 20px;
            font-size: 1.5rem;
        }
    }

    img {
        width: 500px;
    }
`;