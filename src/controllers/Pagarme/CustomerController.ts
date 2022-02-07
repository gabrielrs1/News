import { Request, Response } from "express";
import { CustomerService } from "../../services/Pagarme/CustomerService";

class CustomerController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const customerService = new CustomerService();

        try {
            const result = await customerService.create(data);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { CustomerController }