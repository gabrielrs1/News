import { createContext, ReactNode } from "react";
import { api } from "../services/api";

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
    async function subscription(customer: PaymentCustomer) {
        const result = await api.post("api/customer", {
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

        const result1 = await api.post("api/card", {
            card_number: customer.cardNumber,
            card_holder_name: customer.cardName,
            card_expiration_date: customer.cardValidity,
            card_cvv: customer.cardCVV,
            customer_id: String(result.data.id)
        });

        const result2 = await api.post("api/subscription", {
            plan_id: "701470",
            card_number: customer.cardNumber,
            card_holder_name: customer.cardName,
            card_expiration_date: customer.cardValidity,
            card_cvv: customer.cardCVV,
            card_id: result1.data.id,
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

        console.log(result2);
    }

    return (
        <PaymentContext.Provider value={{ subscription }}>
            {props.children}
        </PaymentContext.Provider>
    );
}