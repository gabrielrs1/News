import Header from "../Header";
import { BoxContent } from "./styles";
import img from "../../image/N.png";
import ModalComponent from "../Modal";
import { useContext } from "react";
import { ModalContext } from "../../context/modal";

function Home() {
  const { openModal } = useContext(ModalContext);

  return (
    <>
        <Header />

        <BoxContent>
            <div className="limit">
                <div>
                    <p>Newsletter muito legal aproveite!</p>
                    <p>Preço imperdível!</p>
                    <span>R$ 10,00/mês</span>

                    <button onClick={openModal}>Assine!</button>

                    <ModalComponent />
                </div>

                <img src={img} alt="" />
            </div>
        </BoxContent>
    </>
  );
}

export default Home;