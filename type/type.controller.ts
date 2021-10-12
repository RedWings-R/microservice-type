import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './schemas/type.schema';

@Controller()
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @MessagePattern('createType')
  async create(@Payload() createTypeDto: CreateTypeDto):Promise<Type> {
    return this.typeService.create(createTypeDto);
  }

  @MessagePattern('findAllType')
  async findAll():Promise<Type[]> {
    return this.typeService.findAll();
  }

  @MessagePattern('findOneType')
  async findOne(@Payload() id: string):Promise<Type> {
    return this.typeService.findOne(id);
  }

  @MessagePattern('updateType')
  async update(@Payload() updateTypeDto: UpdateTypeDto):Promise<Type> {
    return this.typeService.update(updateTypeDto);
  }

  @MessagePattern('removeType')
  async remove(@Payload() id: string):Promise<Type> {
    return this.typeService.remove(id);
  }
}
