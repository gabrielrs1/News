import { model } from "mongoose";
import { CustomerSchema } from "../models/CustomerSchema";

class CustomerService {
    create(name: string, email: string, picture: string) {
        const customerModel = model("customer", CustomerSchema);

        const createCustomer = new customerModel({
            name,
            email,
            picture,
        });

        const customer = createCustomer.save();

        return customer;
    }

    async read(email: string) {
        const customerModel = model("customer", CustomerSchema);

        const customer = await customerModel.findOne({ email });

        return customer;
    }

    async signature(email?: string, signatureID?: string, signature?: boolean, ) {
        const customerModel = model("customer", CustomerSchema);

        const customer = await customerModel.findOneAndUpdate({ email }, {
            signature,
            signatureID
        }, {
            new: true
        });

        return customer;
    }
}

export { CustomerService }