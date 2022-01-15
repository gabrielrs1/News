import { Request, Response } from "express";
import { PlanService } from "../services/Pagarme/PlanService";

class PlanApiController {
    async handle(request: Request, response: Response) {
        const { amount, days, name } = request.body;

        const planApiService = new PlanService();

        try {
            const result = await planApiService.create(amount, days, name);
            
            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { PlanApiController }