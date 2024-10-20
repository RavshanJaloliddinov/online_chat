import { IsNotEmpty, IsString } from "class-validator";
import { UploadFileRequest } from "../interface/upload-file.interface";
import { Omit } from "sequelize-typescript/dist/shared/types";


export class UploadFileDto implements Omit<UploadFileRequest, "file"> {
    @IsString()
    @IsNotEmpty()
    destination: string;


}