import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type, TypeDocument } from './schemas/type.schema';

@Injectable()
export class TypeService {
  constructor(@InjectModel(Type.name) private readonly typeModel: Model<TypeDocument>,){}

  async create(createTypeDto: CreateTypeDto):Promise<Type> {
    const createdType = new this.typeModel(createTypeDto);
    return await createdType.save().catch(err=>{
      throw new HttpException(err,HttpStatus.BAD_REQUEST);
    });
  }

  async findAll():Promise<Type[]> {
    return await this.typeModel.find().catch(err=>{
      throw new HttpException(err,HttpStatus.BAD_REQUEST);
    });
  }

  async findOne(id: string):Promise<Type> {
    return await this.typeModel.findOne({"_id": new ObjectId(id)}).catch(err=>{
      throw new HttpException(err,HttpStatus.BAD_REQUEST);
    });
  }

  async update(updateTypeDto: UpdateTypeDto):Promise<Type> {
    return await this.typeModel.findByIdAndUpdate(new ObjectId(updateTypeDto._id),updateTypeDto).then(()=>{
      return this.findOne(updateTypeDto._id).catch(err=>{
        throw new HttpException(err,HttpStatus.BAD_REQUEST);
      });
    }).catch(err=>{
      throw new HttpException(err,HttpStatus.BAD_REQUEST)
    });
  }

  async remove(id: string):Promise<Type> {
    return await this.typeModel.findByIdAndDelete(new ObjectId(id)).catch(err=>{
      throw new HttpException(err,HttpStatus.BAD_REQUEST)
    });
  }
}
