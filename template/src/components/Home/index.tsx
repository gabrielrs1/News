import Header from "../Header";

import { BoxContent } from "./styles";

import img from "../../image/N.png";

function Home() {
    return (
        <>
            <Header />

            <BoxContent>
                <div className="limit">
                    <div>
                        <p>Newsletter muito legal aproveite!</p>
                        <p>Preço imperdível!</p>
                        <span>R$ 10,00/mês</span>

                        <a href="#">Assine!</a>
                    </div>

                    <img src={img} alt="" />
                </div>
            </BoxContent>
        </>
    );
}

export default Home;