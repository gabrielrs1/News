import { Request, Response } from "express";
import { CardService } from "../services/Pagarme/CardService";

class CardApiController {
    async handle(request: Request, response: Response) {
        const { card_number, card_holder_name, card_expiration_date, card_cvv, customer_id } = request.body;
        
        const card = {
            card_number,
            card_expiration_date,
            card_holder_name,
            card_cvv,
        }

        const cardApiService = new CardService();

        try {
            const result = await cardApiService.execute(card, customer_id);

            return response.status(200).json(result);
        } catch (error) {
            return response.json(error);   
        }
    }
}

export { CardApiController }