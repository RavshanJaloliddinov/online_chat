import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ParseIntPipe, UploadedFile } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';

@ApiTags("Message")
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async create(
    @Body() createGroupDto: CreateGroupDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    // Fayl yuklanganini tekshirish
    if (image) {
      // image o'zgaruvchisi faylni o'z ichiga oladi
      return this.groupService.create({
        ...createGroupDto,
        image: {
          originalname: image.originalname,
          filename: image.filename,
          path: image.path,
        },
      });
    }

    // Agar fayl yuklanmagan bo'lsa
    return this.groupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

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

    // Agar fayl yuklangan bo'lsa
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
