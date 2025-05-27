import { Group } from "src/group/entities/group.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    profilephoto: string;

    @Column({ type: 'varchar', length: 40 })
    headline: string

    @Column({ type: 'integer' })
    experience: number

    @Column({ type: 'varchar', length: 400 })
    education: string

//     @ManyToMany(()=>Group,group=>group.id)
//    @JoinTable({
//     name:"profile_user",
//     joinColumn:{
//         name:'profile_id',
//         referencedColumnName:'id'
//     },
//     inverseJoinColumn:{
//         name:"group_id"
//     }
//    })



}
