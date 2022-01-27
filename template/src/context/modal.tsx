import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type ModalContextData = {
    openModal: () => void;
    closeModal: () => void;
    modalIsOpen: boolean;
    setScroll: any;
    scroll: boolean;
    setStage: Dispatch<SetStateAction<number>>,
    stage: number
}

export const ModalContext = createContext({} as ModalContextData);

type AuthProvider = {
    children: ReactNode;
}

export function ModalProvider(props: AuthProvider) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const [stage, setStage] = useState(1);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setStage(1)
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalIsOpen, setScroll, scroll, setStage, stage }}>
            {props.children}
        </ModalContext.Provider>
    );
}