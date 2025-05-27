import { IsNumber, IsString, MinLength } from "class-validator"

export class CreateProfileDto {



    @IsString()
    profilephoto: string

    @IsString()
    @MinLength(3, { message: 'headline must have atleast 3 characters.' })

    headline: string

    @IsNumber()
    experience: number

    @IsString()
    education: string


}
