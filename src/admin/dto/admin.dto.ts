import { IsEmail, IsEnum, IsNotEmpty, IsString, isString } from "class-validator";

export class AdminDto {
    @IsString()
    @IsNotEmpty()
    
    name: string;
    email: string;





}