import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { UploadFileDto } from "./dto/create-upload.dto";
import { UploadFileResponse } from "./interface/upload-file.interface";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Upload')
@Controller("uploads")
export class UploadController {
    constructor(private service: UploadService) { }

  
    @Post('upload/add')
    @UseInterceptors(FileInterceptor("file"))
    async uploadFile(
        @Body() payload: UploadFileDto,
        @UploadedFile() file: Express.Multer.File
    ): Promise<UploadFileResponse> {
        return await this.service.uploadFile({...payload, file})
    }
}