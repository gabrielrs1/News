import { Schema } from "mongoose";

type Newsletter = {
    text: string;
    created_at: number;
}

const NewsletterSchema = new Schema<Newsletter>({
    text: String,
    created_at: Number
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

export { NewsletterSchema }