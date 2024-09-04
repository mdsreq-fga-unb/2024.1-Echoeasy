import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AlgoritmoCompletoDto } from 'src/dto/AlgoritmoCompletoDto';
import { AlgoritmoDto } from 'src/dto/AlgoritmoDto';
import { NodeDto } from 'src/dto/NodeDto';
import { Algoritmo } from 'src/schema/Algoritmo';
import { Node } from 'src/schema/utils/Node';

@Injectable()
export class AlgoritmoRepository {
  constructor(
    @InjectModel(Algoritmo.name)
    private readonly algoritmoModel: Model<Algoritmo>,
    @InjectModel(Node.name)
    private readonly nodeModel: Model<Node>,
  ) {}

  async createAlgoritmo(algoritmoData: AlgoritmoDto): Promise<Algoritmo> {
    try {
      const algoritmo = new this.algoritmoModel(algoritmoData);

      return algoritmo.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async createNode(nodeData: NodeDto): Promise<Node> {
    try {
      const node = new this.nodeModel(nodeData);

      return node.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAlgoritmoById(id: string): Promise<Algoritmo> {
    try {
      return this.algoritmoModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async LinkNodeIdToAlgoritmo(
    algoritmoId: string,
    nodeId: string,
  ): Promise<Algoritmo> {
    try {
      const algoritmo = await this.findAlgoritmoById(algoritmoId);
      algoritmo.nodes.push(nodeId);

      return algoritmo.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async listAlgoritmos(_id: Types.ObjectId): Promise<AlgoritmoCompletoDto> {
    try {
      const algoritmo = await this.algoritmoModel.findOne({ _id });

      if (!algoritmo) {
        throw new HttpException(
          'Algoritmo não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }

      const nodes = await this.listNodesByAlgoritmoId(_id);

      const algoritmoWithNodes = {
        title: algoritmo.title,
        description: algoritmo.description,
        nodes: nodes,
      };

      return algoritmoWithNodes;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async listNodesByAlgoritmoId(algoritmoId: Types.ObjectId): Promise<Node[]> {
    try {
      return this.nodeModel
        .find({ algorithm_id: algoritmoId })
        .sort({ node_id: 1 });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
