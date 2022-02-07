import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type ModalContextData = {
    openModal: () => void;
    closeModal: () => void;
    modalIsOpen: boolean;
    setScreenLock: any;
    screenLock: boolean;
    setScreenOfModal: Dispatch<SetStateAction<number>>,
    screenOfModal: number
}

export const ModalContext = createContext({} as ModalContextData);

type AuthProvider = {
    children: ReactNode;
}

export function ModalProvider(props: AuthProvider) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [screenLock, setScreenLock] = useState(false);

    const [screenOfModal, setScreenOfModal] = useState(1);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalIsOpen, setScreenLock, screenLock, setScreenOfModal, screenOfModal }}>
            {props.children}
        </ModalContext.Provider>
    );
}