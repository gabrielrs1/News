import { Request, Response } from "express";
import { GoogleOauthService } from "../services/GoogleOauthService";

class GoogleOauthController {
    async handle(request: Request, response: Response) {
        const { code } = request.body;

        const oauth = new GoogleOauthService();

        try {
            const result = await oauth.execute(code);

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { GoogleOauthController }