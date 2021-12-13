import pagarme from "pagarme";

type CardData = {
    card_number: string;
    card_expiration_date: string;
    card_holder_name: string;
    card_cvv: string;
}

class RegisterCardService {
    async execute(card: CardData, customer_id: string) {
        const hash = await pagarme.client.connect({ encryption_key: process.env.PAGARME_ENCRYPTION_KEY });

        const card_hash = await hash.security.encrypt({
            card_number: card.card_number,
            card_expiration_date: card.card_expiration_date,
            card_holder_name: card.card_holder_name,
            card_cvv: card.card_cvv,
        });

        const connectApi = await pagarme.client.connect({ api_key: process.env.PAGARME_CLIENT_SECRET });

        const createCard = await connectApi.cards.create({
            card_number: card.card_number,
            card_expiration_date: card.card_expiration_date,
            card_holder_name: card.card_holder_name,
            card_cvv: card.card_cvv,
            customer_id: customer_id,
            card_hash: card_hash,
        });

        return createCard;
    }
}

export { RegisterCardService }