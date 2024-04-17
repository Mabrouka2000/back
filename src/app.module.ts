import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { Product } from './product.entity';
import { JwtModule } from '@nestjs/jwt';
import { RestoModule } from './resto/restomodule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,

    }),
    TypeOrmModule.forFeature([User, Product]),

    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' }
    }),
    RestoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
