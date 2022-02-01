import { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { RiCloseLine } from "react-icons/ri";

import { SubscribeContext } from "../../context/subscribe";
import Login from "../Login";

import { BoxContent } from "./styles"
import LogoImg from "../../image/new.png"

function Header() {
    const { paid, unsubscribe} = useContext(SubscribeContext);

    return (
        <BoxContent>
            <div>
                <img src={LogoImg} alt="Logo" />

                <div className="navegation">
                    <Link to="/">Home</Link>
                    <Link to="/new">News</Link>
                </div>

                <Login />

                {paid && (
                    <IconButton aria-label="delete" title="Cancelar inscrição" onClick={unsubscribe}>
                        <RiCloseLine />
                    </IconButton>
                )}
            </div>
        </BoxContent>
    );
}

export default Header;