import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type TypeDocument = Type & Document;
//https://docs.nestjs.com/techniques/mongodb
@Schema()
export class Type {
    @Prop()
    name:string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);