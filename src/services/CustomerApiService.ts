import pagarme from "pagarme";

type CustomerApi = {
   name: string;
   email: string;
   external_id: string;
   type: string;
   country: string;
   phone_numbers: string[];
   documents: [
       {
           type: string;
           number: string;
       }
   ];
}

class CustomerApiService {
    async execute(data: CustomerApi) {
        const connectApi = await pagarme.client.connect({ api_key: process.env.PAGARME_CLIENT_SECRET });

        const createCustomer = await connectApi.customers.create({
            external_id: data.external_id,
            name: data.name,
            type: data.type,
            email: data.email,
            country: data.country,
            phone_numbers: data.phone_numbers,
            documents: [
                {
                    type: data.documents[0].type,
                    number: data.documents[0].number
                }
            ],
        });

        return createCustomer;
    }
}

export { CustomerApiService }