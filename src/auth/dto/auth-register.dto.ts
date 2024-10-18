import { ApiProperty } from "@nestjs/swagger";
import { IAuthRegister } from "../interfaces";

export class AuthRegisterDto implements IAuthRegister{
    @ApiProperty({
        required: true,
        type: 'string'
    })
    full_name: string;
    @ApiProperty({
        required: true,
        type: 'string'
    })
    email: string;
    @ApiProperty({
        required: true,
        type: 'string'
    })
    password: string;
    @ApiProperty({
        type: 'string'
    })
    image?: string;
}