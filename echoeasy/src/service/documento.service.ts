import { Injectable, Logger } from '@nestjs/common';
import { Documento } from '../schema/Documento';
import { DocumentoDto } from '../dto/DocumentoDto';
import { DocumentoRepository } from 'src/repositories/documento.repository';

@Injectable()
export class DocumentoService {
  private readonly logger = new Logger(DocumentoService.name);

  constructor(private readonly documentoRepository: DocumentoRepository) {}

  async create(documentoData: DocumentoDto): Promise<Documento> {
    this.logger.log('Inicializando criação de documento...');
    const verificaDocumento = await this.documentoRepository.findOne(
      documentoData.title,
    );
    if (verificaDocumento) {
      this.logger.error('Insira um novo nome de documento!');
      throw new Error('Documento já existe!');
    }
    const documento = await this.documentoRepository.create(documentoData);
    this.logger.log('Finalizando criação de documento...');
    return documento;
  }

  async findAll(): Promise<Documento[]> {
    return this.documentoRepository.findAll();
  }

  async findOne(title: string): Promise<Documento | null> {
    return this.documentoRepository.findOne(title);
  }

  async updateOne(
    title: string,
    documentoData: DocumentoDto,
  ): Promise<Documento | null> {
    return this.documentoRepository.updateOne(title, documentoData);
  }

  async deleteOne(title: string): Promise<Documento | null> {
    return this.documentoRepository.deleteOne(title);
  }
}
