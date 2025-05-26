import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"

export class CreatePostDto {

    @IsString()
    
    @MinLength(3, { message: 'title must have atleast 2 characters.' })
    title:string
    @IsString()
    // @IsNotEmpty()
    description:string

    @IsNumber()
    createdat:string

    @IsString()  
    updatedat:string

    @IsString()
    deletedat:string

    @IsNumber()
    Postid:number

}
