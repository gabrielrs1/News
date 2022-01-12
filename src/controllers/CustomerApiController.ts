import { Request, Response } from "express";
import { CustomerApiService } from "../services/CustomerApiService";

class CustomerApiController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const customerApiService = new CustomerApiService();

        try {
            const result = await customerApiService.execute(data);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { CustomerApiController }