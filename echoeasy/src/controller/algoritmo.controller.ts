import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { NodeDto } from 'src/dto/NodeDto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Algoritmo } from 'src/schema/Algoritmo';
import { AlgoritmoService } from 'src/service/algoritmo.service';
import { AlgoritmoDto } from '../dto/AlgoritmoDto';
import { Node } from 'src/schema/utils/Node';

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
}
