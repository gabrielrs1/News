import { Router } from "express";
import { GoogleOauthController } from "./controllers/GoogleOauthController";
import { PlanController } from "./controllers/PlanController";
import { RegisterCardController } from "./controllers/RegisterCardController";

const router = Router();

import "./database/db";

// Google oauth
router.get("/google/oauth", (request, response) => {
    response.redirect(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/google/callback&prompt=consent&response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline`);
});

router.get("/google/callback", (request, response) => {
    const { code }  = request.query;

    return response.json(code);
});

router.post("/authorization", new GoogleOauthController().handle);

router.post("/card", new RegisterCardController().handle);

router.post("/plan", new PlanController().handle);

export { router }