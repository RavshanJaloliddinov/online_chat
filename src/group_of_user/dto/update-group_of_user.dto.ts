import { PartialType } from '@nestjs/swagger';
import { CreateGroupOfUserDto } from './create-group_of_user.dto';

export class UpdateGroupOfUserDto extends PartialType(CreateGroupOfUserDto) {}
