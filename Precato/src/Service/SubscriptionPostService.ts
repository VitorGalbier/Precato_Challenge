import { getRepository } from "typeorm";
import { Subscription } from "../entity/Subscription";

type subscriptionRequest = {
    subscriptionDate: Date;
    name: string;
    lastMessage: string;
    active: boolean;
}

export class SubscriptionPostService{
    async execute({subscriptionDate, name, active} : subscriptionRequest){
        const repo = getRepository(Subscription);

        if(await repo.findOneBy({name})){
            return new Error ("This e-mail already exist!")
        }
        else{
            const subscription = repo.create({
                subscriptionDate,
                name,
                // lastMessage,
                active
            })
            await repo.save(subscription)
            return subscription;
        }
    }
}