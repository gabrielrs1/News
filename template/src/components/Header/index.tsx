import { Link } from "react-router-dom";

import Login from "../Login";

import { BoxContent } from "./styles"

import LogoImg from "../../image/N.png"

function Header() {
    return (
        <BoxContent>
            <div>
                <img src={LogoImg} alt="Logo" />

                <div className="navegation">
                    <Link to="/">Home</Link>
                    <Link to="/new">News</Link>
                </div>

                <Login />
            </div>
        </BoxContent>
    );
}

export default Header;