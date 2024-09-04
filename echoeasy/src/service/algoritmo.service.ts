import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Types } from 'mongoose';
import { AlgoritmoCompletoDto } from 'src/dto/AlgoritmoCompletoDto';
import { AlgoritmoDto } from 'src/dto/AlgoritmoDto';
import { NodeDto } from 'src/dto/NodeDto';
import { AlgoritmoRepository } from 'src/repositories/algoritmo.repository';
import { Algoritmo } from 'src/schema/Algoritmo';
import { Node } from 'src/schema/utils/Node';

@Injectable()
export class AlgoritmoService {
  private readonly logger = new Logger(AlgoritmoService.name);
  constructor(private readonly algoritmoRepository: AlgoritmoRepository) {}

  async createAlgoritmo(algoritmoData: AlgoritmoDto): Promise<Algoritmo> {
    try {
      this.logger.log('Inicializando criação de algoritmo...');
      const algoritmo =
        await this.algoritmoRepository.createAlgoritmo(algoritmoData);
      this.logger.log('Finalizando criação de algoritmo...');

      return algoritmo;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async createNode(nodeData: NodeDto): Promise<Node> {
    try {
      this.logger.log('Inicializando criação de nó...');
      const node = await this.algoritmoRepository.createNode(nodeData);
      await this.algoritmoRepository.LinkNodeIdToAlgoritmo(
        nodeData.algorithm_id,
        node._id as string,
      );
      this.logger.log('Finalizando criação de nó...');

      return node;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async listAlgoritmos(_id: Types.ObjectId): Promise<AlgoritmoCompletoDto> {
    try {
      this.logger.log('Inicializando listagem de algoritmos...');
      const algoritmos = await this.algoritmoRepository.listAlgoritmos(_id);
      this.logger.log('Finalizando listagem de algoritmos...');

      return algoritmos;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
