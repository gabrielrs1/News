import { createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";
import { ModalContext } from "./modal";
import { UnsubscribeContext } from "./unsubscribe";

type PaymentContextData = {
    subscription: (props: Object) => void;
}

type PaymentCustomer = {
    cardCVV: string;
    cardName: string;
    cardNumber: string;
    cardValidity: string;
    cep: string;
    city: string;
    cpf: string;
    email: string;
    id: string;
    name: string;
    neighborhood: string;
    number: string;
    phone: string;
    street: string;
    uf: string;
}

export const PaymentContext = createContext({} as PaymentContextData);

type PaymentProvider = {
    children: ReactNode;
}

export function PaymentProvider(props: PaymentProvider) {
    const { setScroll } = useContext(ModalContext);
    const { setPaid, setSignatureID } = useContext(UnsubscribeContext);

    async function subscription(customer: PaymentCustomer) {
        const pgCustomer = await api.post("api/customer", {
            name: customer.name,
            email: customer.email,
            external_id: customer.id,
            type: "individual",
            country: "br",
            phone_numbers: [
                customer.phone
            ],
            documents: [
                {
                    type: "cpf",
                    number: customer.cpf
                }
            ]
        });

        const pgCard = await api.post("api/card", {
            card_number: customer.cardNumber,
            card_holder_name: customer.cardName,
            card_expiration_date: customer.cardValidity,
            card_cvv: customer.cardCVV,
            customer_id: String(pgCustomer.data.id)
        });

        const pgSubscription = await api.post("api/subscription", {
            plan_id: "701470",
            card_number: customer.cardNumber,
            card_holder_name: customer.cardName,
            card_expiration_date: customer.cardValidity,
            card_cvv: customer.cardCVV,
            card_id: pgCard.data.id,
            customer: {
                name: customer.name,
                email: customer.email,
                document_number: customer.cpf,
                address: {
                        neighborhood: customer.neighborhood, 
                        street: customer.street, 
                        street_number: customer.number, 
                        zipcode: customer.cep
                },
                phone: {
                    ddd: "47",
                    number: "999743358"
                }
            }
        });

        if(pgSubscription.data.status == "paid") {
            setScroll(true);
            setPaid(true);
            setSignatureID(pgSubscription.data.id);
        }

    }

    return (
        <PaymentContext.Provider value={{ subscription }}>
            {props.children}
        </PaymentContext.Provider>
    );
}