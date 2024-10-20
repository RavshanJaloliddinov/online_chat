import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GroupOfUserService } from './group_of_user.service';
import { CreateGroupOfUserDto } from './dto/create-group_of_user.dto';
import { UpdateGroupOfUserDto } from './dto/update-group_of_user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Group Of User')
@Controller('group-of-user')
export class GroupOfUserController {
  constructor(private readonly groupOfUserService: GroupOfUserService) {}

  @Post()
  create(@Body() createGroupOfUserDto: CreateGroupOfUserDto) {
    return this.groupOfUserService.create(createGroupOfUserDto);
  }

  @Get()
  findAll() {
    return this.groupOfUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.groupOfUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateGroupOfUserDto: UpdateGroupOfUserDto) {
    return this.groupOfUserService.update(id, updateGroupOfUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.groupOfUserService.remove(id);
  }
}
