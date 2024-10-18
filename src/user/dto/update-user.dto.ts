import { IsOptional, IsString, IsEmail } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"



export class UpdateUserDto implements Omit<UpdateUserDto, 'image'> {

    @ApiProperty({
        type: String,
        example: "John Doe",
        description: 'full name kiritilishi shart',
        required: true,
    })
    @IsString()
    @IsOptional()
    full_name?: string

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
    @IsOptional()
    email?: string


    @ApiProperty({
        type: String,
        example: "Password007",
        required: true,
    })
    @IsString()
    @IsOptional()
    password?: string
}
