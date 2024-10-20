import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Binary } from "typeorm"
import { MessageType } from "../entities/message.entity"

export class CreateMessageDto {

    @ApiProperty({
        type: Number,
        required: true,
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    chat_id: number

    @ApiProperty({
        type: Number,
        required: true,
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    user_id: number

    @ApiProperty({
        type: String,
        required: true,
        example: "you wusssup"
    })
    @IsString()
    @IsNotEmpty()
    text: string

    @ApiProperty({
        type: String,
        required: false,
        format: 'binary',
    })
    @IsString()
    @IsOptional()
    image?: string

    @ApiProperty({
        type: String,

        example: 'message',
        required: true,
    })
    @IsString()
    message_type: MessageType 
}
