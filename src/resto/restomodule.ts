import {ConfigModule} from'@nestjs/config';
import { TypeOrmModule} from '@nestjs/typeorm'
import { RestoController } from './resto.controller';
import { RestoService } from './resto.service';
import { Module } from '@nestjs/common';
import { Product } from './product.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [RestoController],
  providers: [RestoService],
})
export class RestoModule {}
