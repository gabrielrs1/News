import { Request, Response } from "express";
import { SubscriptionService } from "../services/Pagarme/SubscriptionService";

class SubscriptionApiController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const subscriptionApiService = new SubscriptionService();

        try {
            const result = await subscriptionApiService.execute(data);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { SubscriptionApiController }