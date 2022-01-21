import styled from "styled-components";

export const GoogleOauth = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background: none;
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;

    svg {
        font-size: 1.6rem;
        margin-right: 10px;
    }

    @media(max-width: 720px) {
        p {
            display: none;
        }

        svg {
            margin: 0;
        }
    }
`;

export const GoogleSignout = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background: none;
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;

    svg {
        font-size: 1.6rem;
        margin-right: 10px;
    }

    .avatar {
        border-radius: 20px;
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 10px;
    }

    @media(max-width: 720px) {
        p {
            display: none;
        }

        .avatar {
            margin: 0;
        }
    }
`