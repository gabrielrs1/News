import { Schema } from "mongoose";

interface Custumer {
    name: string;
    email: string;
    picture: string;
    signature: boolean;
    signatureID: string;
}

const CustomerSchema = new Schema<Custumer>({
    name: String,
    email: String,
    picture: String,
    signature: Boolean,
    signatureID: String
});

export { CustomerSchema }