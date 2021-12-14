import pagarme from "pagarme";

class PlanApiService {
    async create(amount: number, days: string, name: string) {
        const connectApi = await pagarme.client.connect({ api_key: process.env.PAGARME_CLIENT_SECRET });
        
        const plan = await connectApi.plans.create({
            amount,
            days,
            name
        });

        return plan;
    }
}

export { PlanApiService }