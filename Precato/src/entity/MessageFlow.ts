import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class MessageFlow {

    @PrimaryGeneratedColumn("uuid")
    idMessage: string;

    @Column()
    templateName: string;

    //talvez date
    @Column()
    position: number;

}
