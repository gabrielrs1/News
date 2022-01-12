import { Request, Response } from "express";
import { ProfileService } from "../services/ProfileService";

class ProfileController {
    async handle(request: Request, response: Response) {
        const { email } = request;

        const profile = new ProfileService();

        try {
            const result = await profile.execute(email);

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }

    }
}

export { ProfileController }