import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsNumber, IsString } from "class-validator"

export class UpdateMessageDto {

    @ApiProperty({
        type: Number,
        required: false,
        example: 1
    })
    @IsNumber()
    @IsOptional()
    chat_id?: number

    @ApiProperty({
        type: Number,
        required: false,
        example: 1
    })
    @IsNumber()
    @IsOptional()
    user_id?: number

    @ApiProperty({
        type: String,
        required: false,
        example: "you wusssup"
    })
    @IsString()
    @IsOptional()
    text?: string

    @ApiProperty({
        type: String,
        required: false

    })
    @IsString()
    @IsOptional()
    image?: string
}
