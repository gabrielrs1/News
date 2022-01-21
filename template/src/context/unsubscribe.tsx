import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { api } from "../services/api";
import { ModalContext } from "./modal";

type UnsubscribeContextData = {
    paid: boolean;
    setPaid: Dispatch<SetStateAction<boolean>>;
    setSignatureID: Dispatch<SetStateAction<string>>;
    unsubscribe: () => void;
}

export const UnsubscribeContext = createContext({} as UnsubscribeContextData);

type UnsubscribeProvider = {
    children: ReactNode;
}

export function UnsubscribeProvider(props: UnsubscribeProvider) {
    const { setScroll } = useContext(ModalContext);

    const [paid, setPaid] = useState(false);
    const [signatureID, setSignatureID] = useState("");

    async function unsubscribe() {
            const response = await api.post("api/subscription/delete", {
                id: signatureID
            });

            if(response) {
                setPaid(false);
                setScroll(false);
            }
    }

    return (
        <UnsubscribeContext.Provider value={{ paid, setPaid, setSignatureID, unsubscribe }}>
            {props.children}
        </UnsubscribeContext.Provider>
    );
}