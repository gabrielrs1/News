import { Request, Response } from "express";
import { NewsletterService } from "../services/NewsletterService";

class NewsletterControler {
    async handle(request: Request, response: Response) {
        const { id } = request;
        const { text } = request.body;

        const newsletterService = new NewsletterService();
        
        try {
            const newsletter = await newsletterService.execute(text, id);

            return response.status(200).json(newsletter);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { NewsletterControler }