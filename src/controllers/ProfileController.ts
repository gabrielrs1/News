import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";
import { ProfileService } from "../services/ProfileService";

class ProfileController {
    async handle(request: Request, response: Response) {
        const { email } = request;

        const profile = new CustomerService();

        try {
            const result = await profile.read(email);

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }

    }
}

export { ProfileController }