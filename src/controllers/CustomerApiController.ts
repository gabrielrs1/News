import { Request, Response } from "express";
import { CustomerApiService } from "../services/CustomerApiService";

class CustomerApiController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const customerApiService = new CustomerApiService();

        try {
            const customer = await customerApiService.execute(data);

            return response.json(customer);
        } catch(error) {
            return response.json(error);
        }
    }
}

export { CustomerApiController }