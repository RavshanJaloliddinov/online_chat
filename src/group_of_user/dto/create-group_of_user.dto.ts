import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateGroupOfUserDto {
    
    @ApiProperty({
        type: Number,
        required: true,
        example: 2
    })
    @IsNumber()
    @IsNotEmpty()
    group_id: number
 
    @ApiProperty({
        type: Number,
        required: true,
        example: 2
    })
    @IsNumber()
    @IsNotEmpty()
    user_id: number

    @ApiProperty({
        type: Boolean,
        required: true,
        example: false
    })
    @IsBoolean()
    @IsNotEmpty()
    is_admin: boolean
}
