import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
