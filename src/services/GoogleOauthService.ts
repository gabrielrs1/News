import axios from "axios";
import { encode } from "querystring";
import { CustomerService } from "./CustomerService";
import * as jwt from "jsonwebtoken";

type GoogleUserProfile = {
    id: string;
    name: string;
    locale: string;
    picture: string;
    email: string;
}

class GoogleOauthService {
    async execute(code: string) {
        const { data } = await axios.post("https://oauth2.googleapis.com/token", encode({
            code: code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: "http://localhost:3000/google/callback",
            grant_type: "authorization_code",
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const googleProfile = await axios.get<GoogleUserProfile>("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: {
                "Authorization": `Bearer ${data.access_token}`
            }
        });

        const { name, email, picture } = googleProfile.data;

        const costumerService = new CustomerService();

        let customer = await costumerService.read(email);

        if(!customer) {
            customer = await costumerService.create(name, email, picture);
        }

        const token = jwt.sign({
            name, email, picture
        },
        process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        return { customer, token };
    }
}

export { GoogleOauthService }