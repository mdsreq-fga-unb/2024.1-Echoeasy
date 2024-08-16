import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

enum Roles {
  ADMIN = 'admin',
  USER = 'user',
  STUDENT = 'student',
}

@Schema()
export class Usuario extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  cellphone: string;

  @Prop({ required: true, enum: Roles, default: Roles.USER })
  role: Roles;

  @Prop({ required: true })
  firebaseId: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
