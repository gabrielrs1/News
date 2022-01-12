import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

interface IPayload {
    email: string;
}

export function authenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid"
        });
    }

    // Separa o Bearer do token, e dai ele retorna um array dividindo
    // o ["Bearer", "wadawndwj5235jiw"], ai essa virgula faz com que ele
    // elimine a primeira posição
    const [,token] = authToken.split(" ");

    try {
        // Recebe o parametro sub do verify
        const { email } = jwt.verify(token, process.env.JWT_SECRET) as IPayload;

        // Adiciona ao request do express o user_id para poder receber em outros lugares
        request.email = email;
        
        return next();
    } catch (error) {
        return response.status(401).json({ errorCode: "token.expired" });
    }
}