import { model } from "mongoose";
import { CustomerSchema } from "../models/CustomerSchema";

type CustumerData = {
    name: string;
    email: string;
    external_id: string;
    picture: string;
    type?: string;
    country: string;
    phone_numbers?: string;
    documents?: string[];
}

class CustomerService {
    create(data: CustumerData) {
        const customerModel = model("customer", CustomerSchema);

        const createCustomer = new customerModel({
            name: data.name,
            email: data.email,
            external_id: data.external_id,
            picture: data.picture,
            type: data.type,
            country: data.country,
            phone_numbers: data.phone_numbers,
            documents: data.documents,
        });

        const customer = createCustomer.save();

        return customer;
    }

    async read(email: string) {
        const customerModel = model("customer", CustomerSchema);

        const customer = await customerModel.findOne({ email });

        return customer;
    }
}

export { CustomerService }