import { Request, Response } from "express";
import { SubscriptionApiService } from "../services/SubscriptionApiService";

class SubscriptionApiController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const subscriptionApiService = new SubscriptionApiService();

        try {
            const result = await subscriptionApiService.execute(data);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { SubscriptionApiController }