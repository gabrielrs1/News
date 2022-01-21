import { Request, Response } from "express";
import { NewsletterService } from "../services/NewsletterService";

class NewsletterControler {
    async handle(request: Request, response: Response) {
        const { email } = request;
        const { text } = request.body;

        const newsletterService = new NewsletterService();
        
        try {
            const newsletter = await newsletterService.execute(text, email);

            return response.status(200).json(newsletter);
        } catch (error) {
            return response.json(error);
        }
    }

    async handleRead(request: Request, response: Response) {
        const { id } = request.body;
        
        const newsletterService = new NewsletterService();
        
        try {
            const newsletter = await newsletterService.read(id);

            return response.status(200).json(newsletter);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { NewsletterControler }