import { Router } from "express";
import { CustomerApiController } from "./controllers/CustomerApiController";
import { GoogleOauthController } from "./controllers/GoogleOauthController";
import { PlanApiController } from "./controllers/PlanApiController";
import { CardApiController } from "./controllers/CardApiController";
import { SubscriptionApiController } from "./controllers/SubscriptionApiController";

import "./database/db";

const router = Router();

// Google oauth
router.get("/google/oauth", (request, response) => {
    response.redirect(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/google/callback&prompt=consent&response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline`);
});

router.get("/google/callback", (request, response) => {
    const { code }  = request.query;

    return response.json(code);
});

router.post("/authorization", new GoogleOauthController().handle);

// Api Pagar.me
router.post("/api/customer", new CustomerApiController().handle);

router.post("/api/card", new CardApiController().handle);

router.post("/api/plan", new PlanApiController().handle);

router.post("/api/subscription", new SubscriptionApiController().handle);

export { router }