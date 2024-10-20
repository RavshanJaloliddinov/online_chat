import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ParseIntPipe, UploadedFile, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';
import { CheckAuthGuard } from 'src/guards/check-auth.guard';

@ApiTags("Group")
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  // @ApiConsumes('multipart/form-data')
  // @UseInterceptors(FileInterceptor('image', multerConfig))
  async create(
    @Body() createGroupDto: CreateGroupDto,
    // @UploadedFile() image?: Express.Multer.File,
  ) {

   
    return this.groupService.create({...createGroupDto});
}

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  // @UseGuards(CheckAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGroupDto: UpdateGroupDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    const updatedData = {
      ...updateGroupDto,
    };


    if (image) {
      updatedData.image = {
        originalname: image.originalname,
        filename: image.filename,
        path: image.path,
      };
    }

    return this.groupService.update(id, updatedData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.groupService.remove(id);
  }
}
