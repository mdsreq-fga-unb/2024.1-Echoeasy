import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { NodeDto } from 'src/dto/NodeDto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Algoritmo } from 'src/schema/Algoritmo';
import { Node } from 'src/schema/utils/Node';
import { AlgoritmoService } from 'src/service/algoritmo.service';
import { AlgoritmoDto } from '../dto/AlgoritmoDto';
import { AlgoritmoCompletoDto } from 'src/dto/AlgoritmoCompletoDto';

@Controller('algoritmos')
export class AlgoritmoController {
  constructor(private algoritmoService: AlgoritmoService) {}

  @Post()
  @UseGuards(AuthGuard)
  async criarAlgoritmo(
    @Body() algoritmoData: AlgoritmoDto,
  ): Promise<Algoritmo> {
    try {
      return this.algoritmoService.createAlgoritmo(algoritmoData);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('nodes')
  @UseGuards(AuthGuard)
  async criarNode(@Body() nodeData: NodeDto): Promise<Node> {
    try {
      return this.algoritmoService.createNode(nodeData);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('list')
  @UseGuards(AuthGuard)
  async listarAlgoritmos(
    @Query('_id') _id: Types.ObjectId,
  ): Promise<AlgoritmoCompletoDto> {
    try {
      return this.algoritmoService.listAlgoritmos(_id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
