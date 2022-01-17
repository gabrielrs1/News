import { Schema } from "mongoose";

interface Custumer {
    name: string;
    email: string;
    picture: string;
    signature: boolean;
    signatureID: string;
    admin: boolean;
    created_at: number;
}

const CustomerSchema = new Schema<Custumer>({
    name: String,
    email: String,
    picture: String,
    signature: Boolean,
    signatureID: String,
    admin: Boolean,
    created_at: Number
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

export { CustomerSchema }