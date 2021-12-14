import pagarme from "pagarme";

type SubscriptionData = {
    plan_id: number;
    card_id: string;
    payment_method: string;
    customer: {
        email: string;
        name: string;
        document_number: string;
        address: {
            zipcode: string;
            neighborhood: string;
            street: string;
            street_number: string;
        }
        phone: {
            number: string;
            ddd: string;
        }
    }
}

class SubscriptionApiService {
    async execute(data: SubscriptionData) {
        const connectApi = await pagarme.client.connect({ api_key: process.env.PAGARME_CLIENT_SECRET });
        
        const subscription = await connectApi.subscriptions.create({
            plan_id: data.plan_id,
            card_id: data.card_id,
            payment_method: data.payment_method,
            customer: {
                email: data.customer.email,
                name: data.customer.name,
                document_number: data.customer.document_number,
                address: {
                    zipcode: data.customer.address.zipcode,
                    neighborhood: data.customer.address.neighborhood,
                    street: data.customer.address.street,
                    street_number: data.customer.address.street_number
                },
                phone: {
                    number: data.customer.phone.number,
                    ddd: data.customer.phone.ddd
                }
            }
        });

        return subscription;
    }
}

export { SubscriptionApiService }