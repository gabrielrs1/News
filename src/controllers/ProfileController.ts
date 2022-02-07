import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

class ProfileController {
    async handle(request: Request, response: Response) {
        const { email } = request;

        const customerProfile = new CustomerService();

        try {
            const result = await customerProfile.query(email);

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }

    }
}

export { ProfileController }