import { Schema } from "mongoose";

interface Custumer {
    name: string;
    email: string;
    external_id: string;
    picture: string;
    type: string;
    country: string;
    phone_numbers: string;
    documents: string[];
}

const CustomerSchema = new Schema<Custumer>({
    name: String,
    email: String,
    external_id: String,
    picture: String,
    type: String,
    country: String,
    phone_numbers: String,
    documents: Array,
});

export { CustomerSchema }