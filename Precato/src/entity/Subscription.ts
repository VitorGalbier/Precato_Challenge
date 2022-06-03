import { IsEmail } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn} from "typeorm";
import { MessageFlow } from "./MessageFlow";

@Entity()
export class Subscription {

    @PrimaryGeneratedColumn("uuid")
    idSubscription: string;

    @CreateDateColumn()
    subscriptionDate: Date;

    @Column({ unique: true})
    @IsEmail()
    name: string;

    @OneToOne(() => MessageFlow)
    @JoinColumn({name: "idMessage"})
    lastMessage: MessageFlow;

    @Column()
    active: boolean;

}
