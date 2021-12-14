import { Request, Response } from "express";
import { PlanApiService } from "../services/PlanApiService";

class PlanApiController {
    async handle(request: Request, response: Response) {
        const { amount, days, name } = request.body;

        const planApiService = new PlanApiService();

        try {
            const plan = await planApiService.create(amount, days, name);
            
            return response.json(plan);
        } catch(error) {
            return response.json(error);
        }
    }
}

export { PlanApiController }