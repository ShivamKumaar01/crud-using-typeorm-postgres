import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user_group {

    @PrimaryGeneratedColumn()
    id: number;
   
    @Column()
    user_id: number

    @Column()
    group_id: number

}
