import { model } from "mongoose"
import { NewsletterSchema } from "../models/NewsletterSchema"
import { CustomerService } from "./CustomerService";

class NewsletterService {
    async execute(text: string, id: string) {
        const customerService = new CustomerService();

        const customer = await customerService.read(id);

        if(!customer.admin) {
            return "Access denied!";
        }

        const newsletterModel = model("newsletter", NewsletterSchema);

        const createNewsletter = await newsletterModel.create({
            text
        });

        const newsletter = createNewsletter.save();

        return newsletter;
    }

    async read(id: string) {
        const newsletterModel = model("newsletter", NewsletterSchema);

        const newsletter = await newsletterModel.findById(id);
        
        return newsletter
    }
}

export { NewsletterService }