import axios from "axios";
import { encode } from "querystring";
import { CustomerService } from "./CustomerService";
import * as jwt from "jsonwebtoken";

type GoogleUserProfile = {
    name: string;
    email: string;
    picture: string;
}

class GoogleOauthService {
    async execute(code: string) {
        const url = "https://oauth2.googleapis.com/token";

        const { data } = await axios.post(url, encode({
            code: decodeURIComponent(code),
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: "http://localhost:3000",
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

        const {name, email, picture } = googleProfile.data;

        const costumerService = new CustomerService();

        let customer = await costumerService.read(email);

        if(!customer) {
            customer = await costumerService.create(name, email, picture);
        }

        const id = customer._id.toString();
        const signature = false;
        const signatureID = "";
        
        const token = jwt.sign({
            id, name, email, picture, signature, signatureID
        },
        process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        return { customer, token };
    }
}

export { GoogleOauthService }