import { Request, Response } from "express";
import { RegisterCardService } from "../services/RegisterCardService";

class RegisterCardController {
    async handle(request: Request, response: Response) {
        const { card_number, card_holder_name, card_expiration_date, card_cvv, customer_id } = request.body;
        
        const card = {
            card_number,
            card_expiration_date,
            card_holder_name,
            card_cvv,
        }

        const registerCard = new RegisterCardService();

        try {
            const result = await registerCard.execute(card, customer_id);

            return response.json(result);
        } catch (error) {
            return response.json(error);   
        }
    }
}

export { RegisterCardController }