import { Request, Response } from "express";
import { GoogleOauthService } from "../services/GoogleOauthService";

class GoogleOauthController {
    async handle(request: Request, response: Response) {
        const { code } = request.body;

        const googleOauthService = new GoogleOauthService();

        try {
            const result = await googleOauthService.execute(code);

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { GoogleOauthController }