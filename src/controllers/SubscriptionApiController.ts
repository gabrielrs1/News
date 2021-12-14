import { Request, Response } from "express";
import { SubscriptionApiService } from "../services/SubscriptionApiService";

class SubscriptionApiController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const subscriptionApiService = new SubscriptionApiService();

        try {
            const subscription = await subscriptionApiService.execute(data);

            return response.json(subscription);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { SubscriptionApiController }