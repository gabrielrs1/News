import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { api } from "../services/api";
import { ModalContext } from "./modal";

import { toast } from 'react-toastify';

type SubscribeContextData = {
    paid: boolean;
    setPaid: Dispatch<SetStateAction<boolean>>;
    setSignatureID: Dispatch<SetStateAction<string>>;
    unsubscribe: () => void;
}

export const SubscribeContext = createContext({} as SubscribeContextData);

type SubscribeProvider = {
    children: ReactNode;
}

export function SubscribeProvider(props: SubscribeProvider) {
    const { setScroll } = useContext(ModalContext);

    const [paid, setPaid] = useState(false);
    const [signatureID, setSignatureID] = useState("");

    const notify = (msg: string) => toast.warn(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    async function unsubscribe() {
        const response = await api.post("api/subscription/delete", {
            id: signatureID
        });

        if(response) {
            setPaid(false);
            setScroll(false);

            notify("Inscrição cancelada!")
        }
    }

    return (
        <SubscribeContext.Provider value={{ paid, setPaid, setSignatureID, unsubscribe }}>
            {props.children}
        </SubscribeContext.Provider>
    );
}