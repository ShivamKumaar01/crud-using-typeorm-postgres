import { IsDate, IsNumber, IsString, MinLength } from "class-validator"
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class CreateGroupDto {
    @IsString()

    @MinLength(3, { message: 'name must have atleast 2 characters.' })
    name: string

    @IsString()
    description: string


    @IsString()
    admin: string
    @IsDate()
    created_at: Date

    @IsDate()
    updated_at: Date

    @IsDate()
    deleted_at: Date



}
