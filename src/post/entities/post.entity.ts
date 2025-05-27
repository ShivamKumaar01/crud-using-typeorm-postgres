import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    title: string;

    @Column({ type: 'varchar', length: 400 })
    description: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User


    

    @Column({nullable: true})
    user_id:number 

    // @Column({ type: 'int' })
    // age: number;

    // @Column({ type: 'varchar' })
    // password: string;


}
