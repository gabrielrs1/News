import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { ModalContext } from "../../context/modal";
import Header from "../Header";
import ModalComponent from "../Modal";

import { BoxContent, Content } from "./styles";

function News() {
    const { openModal, screenLock } = useContext(ModalContext);
    const { news } = useContext(AuthContext);

    return (
        <>
            <Header/>
            
            <BoxContent screenLock={screenLock}>
                <button onClick={openModal}>Assine!</button>

                <ModalComponent />

                <div>
                    {news.map((article, index) => (
                        <Content screenLock={screenLock} key={index}>
                            <h1>{article.title}</h1>

                            <p>{article.description}</p>

                            <p>{article.content}</p>

                            <div className="info">
                                <span>Autor: {article.author}</span>

                                <a href={article.url}>Artigo completo</a>
                            </div>
                        </Content>
                    ))}
                </div>
            </BoxContent>
        </>
    );
}

export default News;