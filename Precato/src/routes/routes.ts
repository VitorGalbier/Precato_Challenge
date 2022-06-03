import { Router } from "express";
import { SubscriptionPostController } from "../controller/SubscriptionPostController";

const router = Router()

router.post("/post", new SubscriptionPostController().postSubscription);


export default router;