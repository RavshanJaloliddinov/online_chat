import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateGroupDto {

    @ApiProperty({
        type: String,
        format: 'binary',
        required: false
    })
    image?: any


    @ApiProperty({
        type: String,
        example: "fullstack n13",
    })
    @IsNotEmpty()
    @IsString()
    name: string


    @ApiProperty({
        type: String,
        example: "n13 guruh o'quvchilari uchun",
    })
    @IsOptional()
    @IsString()
    description?: string


    @ApiProperty({
        type: String,
        example: 'n13_group',
    })
    @IsNotEmpty()
    @IsString()
    link: string

}
