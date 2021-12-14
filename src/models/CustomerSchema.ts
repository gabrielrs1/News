import { Schema } from "mongoose";

interface Custumer {
    name: string;
    email: string;
    picture: string;
}

const CustomerSchema = new Schema<Custumer>({
    name: String,
    email: String,
    picture: String
});

export { CustomerSchema }