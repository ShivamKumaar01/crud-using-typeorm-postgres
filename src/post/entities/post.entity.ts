import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    title: string;

    @Column({ type: 'varchar', length: 400 })
    description: string;


    @Column( {nullable: true})
    createdat: string

    @Column({ type: 'varchar', length: 4 ,nullable:true})
    updatedat: string

    @Column({ type: 'varchar', length: 4,nullable:true })
    deletedat: string

    @ManyToOne(()=>User,(user)=>user.id)
    user:User

    @Column()
    Postid:number 

    // @Column({ type: 'int' })
    // age: number;

    // @Column({ type: 'varchar' })
    // password: string;


}
