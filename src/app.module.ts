import { Module } from '@nestjs/common';
import { TypeModule } from 'type/type.module';

@Module({
  imports: [TypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
