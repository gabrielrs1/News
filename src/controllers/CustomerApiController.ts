import { Request, Response } from "express";
import { CustomerService } from "../services/Pagarme/CustomerService";

class CustomerApiController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const customerApiService = new CustomerService();

        try {
            const result = await customerApiService.execute(data);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { CustomerApiController }