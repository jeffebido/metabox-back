import multer from "multer"; 
import path from "path"; 
import fs from "fs";
import mime  from 'mime-types'
import { Request } from 'express';

class UploadModels {
  //Pasta de uploads
  private URL: string = path.basename('uploads/'); 

  constructor() {}

  //Methodo para armazenar arquivos
  private storage(): multer.StorageEngine {
 
    return multer.diskStorage({
      //Destino do arquivo
      destination: (req, file, cb) => {

        if (!fs.existsSync(this.URL)) {
          //Efetua a criação do diretório caso ele não exista
          fs.mkdirSync(this.URL);
        }
        //Define o caminho da pasta
        cb(null, this.URL);
      },
      //Renomeia o arquivo
      filename: (req, file, cb) => {

        const type = mime.extension(file.mimetype);
        cb(null, `${new Date().getTime()}.${type}`);
      },
    });
  }

  //Filtra arqquivos
  private fileFilter() {

    return (
      req: Request,
      file: Express.Multer.File,
      cb: multer.FileFilterCallback
    ) => {

      const type = mime.extension(file.mimetype);

      /* 
        Formatos válidos
      */
      const conditions = ["glb", "gltf"];

      if (conditions.includes(`${type}`)) {

        cb(null, true);
      }

      //Caso não de certo a validação não efetuaremos o upload
      cb(null, false);
    };
  }

  get getConfig(): multer.Options {

    return {

      storage: this.storage(),
      fileFilter: this.fileFilter(),
    };
  }
}

export const uploadModels = new UploadModels();