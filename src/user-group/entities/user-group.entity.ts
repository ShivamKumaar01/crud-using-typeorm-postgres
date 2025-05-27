import { Column, Entity } from "typeorm";

@Entity()
export class user_group {

    @Column()
    user_id:number

    @Column()
    group_id:number
    
}
