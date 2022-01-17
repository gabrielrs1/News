import { Request, Response } from "express";
import { SubscriptionService } from "../../services/Pagarme/SubscriptionService";

class SubscriptionController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const subscriptionService = new SubscriptionService();

        try {
            const result = await subscriptionService.execute(data);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }

    async handleDelete(request: Request, response: Response) {
        const { id } = request.body;

        const subscriptionService = new SubscriptionService();

        try {
            const result = await subscriptionService.delete(id);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { SubscriptionController }