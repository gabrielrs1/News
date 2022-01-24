import { Request, Response } from "express";
import { NewsletterService } from "../services/NewsletterService";

class NewsletterControler {
    async handle(request: Request, response: Response) {
        const newsletterService = new NewsletterService();

        try {
            const result = await newsletterService.execute();

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { NewsletterControler }