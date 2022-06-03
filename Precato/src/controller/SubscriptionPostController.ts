import { Request, Response } from "express";
import { SubscriptionPostService } from "../Service/SubscriptionPostService";

export class SubscriptionPostController{
    async postSubscription(req: Request, res: Response){
        const {subscriptionDate, name, lastMessage, active } = req.body;
        const service = new SubscriptionPostService();
        const result = await service.execute({subscriptionDate, name, lastMessage, active});
        return res.json(result);
    }
}