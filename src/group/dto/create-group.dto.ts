import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateGroupDto implements Omit<CreateGroupDto, 'image'> {

    @ApiProperty({
        type: String,
        format: 'binary',
        required: false
    })
    image?: any


    @ApiProperty({
        type: String,
        example: "fullstack n13",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    name: string


    @ApiProperty({
        type: Text,
        example: "n13 guruh o'quvchilari uchun",
        required: false
    })
    @IsOptional()
    @IsString()
    description?: string


    @ApiProperty({
        type: String,
        example: 'n13_group',
        required: true,
        uniqueItems: true
    })
    @IsNotEmpty()
    @IsString()
    link: string
}
