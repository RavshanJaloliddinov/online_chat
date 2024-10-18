import { IAuthLogin } from "../interfaces";
import { ApiProperty } from '@nestjs/swagger';
export class AuthLoginDto implements IAuthLogin  {
    @ApiProperty({
        required: true
    })
    email: string;
    @ApiProperty({
        required: true
    })
    password: string;
}
