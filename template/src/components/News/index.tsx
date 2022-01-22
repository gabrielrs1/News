import { useContext } from "react";
import { ModalContext } from "../../context/modal";
import Header from "../Header";
import ModalComponent from "../Modal";

import { BoxContent, Content } from "./styles";

function News() {
    const { openModal, scroll } = useContext(ModalContext);

    return (
        <>
            <Header/>
            
            <BoxContent scroll={scroll}>
                <button onClick={openModal}>Assine!</button>

                <ModalComponent />

                <Content scroll={scroll}>
                    <h1>O que acontece no mundo programável</h1>

                    <h3>Oque é isso?</h3>
                    <p>y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h3>Possivelmente?</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </Content>

                <Content scroll={scroll}>
                    <h1>Criação de um framework para html e css3</h1>

                    <h3>Veja só?</h3>
                    <p>y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h3>Gera o melhorias?</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </Content>
            </BoxContent>
        </>
    );
}

export default News;