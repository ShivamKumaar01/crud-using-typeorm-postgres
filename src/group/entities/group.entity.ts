import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    groupname: string;

    @Column({ type: 'varchar', length: 400 })
    description: string

    @Column({ type: 'varchar', length: 20 })
    admin: string


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    @DeleteDateColumn()
    deleted_at: Date;


    @ManyToMany(()=>User,user=>user.id)
    user?:User[]
}
