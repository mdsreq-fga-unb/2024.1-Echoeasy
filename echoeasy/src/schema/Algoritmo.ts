import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Algoritmo extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  nodes: [string];
}

export const AlgoritmoSchema = SchemaFactory.createForClass(Algoritmo);
