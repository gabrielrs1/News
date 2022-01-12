import { model } from "mongoose";

import { CustomerSchema } from "../models/CustomerSchema";

class ProfileService {
    async execute(email: string) {
        const customerModel = model("customer", CustomerSchema);

        const profile = await customerModel.findOne({ email });

        return profile;
    }
}

export { ProfileService }