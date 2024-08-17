import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Documento } from '../schema/Documento';
import { DocumentoDto } from '../dto/DocumentoDto';
import { adminStorage } from 'src/config/firebase-admin';

@Injectable()
export class DocumentoRepository {
  constructor(
    @InjectModel(Documento.name)
    private readonly documentoModel: Model<Documento>,
  ) {}

  async create(documentoData: DocumentoDto): Promise<Documento> {
    this.uploadImage64(documentoData.image).then((url) => {
      documento.image = url;
    });
    const documento = new this.documentoModel(documentoData);

    return documento.save();
  }

  async findAll(): Promise<Documento[]> {
    return this.documentoModel.find().exec();
  }

  async findOne(title: string): Promise<Documento | null> {
    return this.documentoModel.findOne({ title }).exec();
  }

  async updateOne(
    title: string,
    documentoData: DocumentoDto,
  ): Promise<Documento | null> {
    return this.documentoModel
      .findOneAndUpdate(
        {
          title,
        },
        documentoData,
        {
          new: true,
        },
      )
      .exec();
  }

  async deleteOne(title: string): Promise<Documento | null> {
    return this.documentoModel.findOneAndDelete({ title }).exec();
  }

  async uploadImage64(image: string): Promise<string> {
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const fileName = Date.now().toString();
    const fileRef = adminStorage.file(fileName);

    await fileRef.save(buffer, {
      metadata: {
        contentType: 'image/png',
      },
      public: true,
    });

    const fileUrl = `https://storage.googleapis.com/${adminStorage.name}/${fileName}`;
    return fileUrl;
  }
}
