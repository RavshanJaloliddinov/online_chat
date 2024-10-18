import {
    IsDate,
    IsNotEmpty,
    IsString,
    IsEmail,
    IsPhoneNumber,
    IsEnum,
    IsOptional,
    isIn,
    IsIn,
} from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"


export class CreateUserDto implements Omit<CreateUserDto, 'image'> {

    @ApiProperty({
        type: String,
        example: "John Doe",
        description: 'full name kiritilishi shart',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    full_name: string

    @ApiProperty({
        type: String,
        format: 'binary',
        required: false
    })
    image?: any


    @ApiProperty({
        type: String,
        example: "jaloliddinov008@gmail.com",
        required: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string


    @ApiProperty({
        type: String,
        example: "Password007",
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    password: string
}
