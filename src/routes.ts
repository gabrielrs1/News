import "./database/db";

import { Router } from "express";

import { CustomerController } from "./controllers/Pagarme/CustomerController";
import { GoogleOauthController } from "./controllers/GoogleOauthController";
import { PlanController } from "./controllers/Pagarme/PlanController";
import { CardController } from "./controllers/Pagarme/CardController";
import { SubscriptionController } from "./controllers/Pagarme/SubscriptionController";
import { ProfileController } from "./controllers/ProfileController";
import { NewsletterControler } from "./controllers/NewsletterController";

import { authenticated } from "./middleware/authenticated";

const router = Router();

// Google Oauth
router.get("/google/oauth", (request, response) => {
    response.redirect(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:4000/google/callback&prompt=consent&response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline`);
});

router.get("/google/callback", (request, response) => {
    const { code }  = request.query;

    return response.json(code);
});

router.post("/authorization", new GoogleOauthController().handle);

// Profile
router.get("/profile", authenticated, new ProfileController().handle);

// Api Pagar.me
router.post("/api/customer", authenticated, new CustomerController().handle);

router.post("/api/card", authenticated, new CardController().handle);

router.post("/api/plan", authenticated, new PlanController().handle);

router.post("/api/subscription", authenticated, new SubscriptionController().handle);

router.post("/api/subscription/delete", authenticated, new SubscriptionController().handleDelete);

// Newsletter
router.post("/newsletter", authenticated, new NewsletterControler().handle);

router.get("/newsletter", authenticated, new NewsletterControler().handleRead);

export { router }