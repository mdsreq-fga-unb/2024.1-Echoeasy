import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { NodeOption } from './NodeOption';

@Schema()
export class Node extends Document {
  @Prop({ required: true })
  algorithm_id: string;

  @Prop({ required: true })
  node_id: string;

  @Prop({ required: true })
  node_title: string;

  @Prop({ required: true })
  node_description: [string];

  @Prop({ required: false })
  node_options: [NodeOption];
}

export const NodeSchema = SchemaFactory.createForClass(Node);
