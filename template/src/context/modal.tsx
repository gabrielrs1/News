import { createContext, ReactNode, useState } from "react";

type ModalContextData = {
    openModal: () => void;
    closeModal: () => void;
    modalIsOpen: boolean;
    setScroll: any;
    scroll: boolean;
}

export const ModalContext = createContext({} as ModalContextData);

type AuthProvider = {
    children: ReactNode;
}

export function ModalProvider(props: AuthProvider) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalIsOpen, setScroll, scroll }}>
            {props.children}
        </ModalContext.Provider>
    );
}