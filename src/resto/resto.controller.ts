import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Req,
    Delete,
    Res,
    UnauthorizedException,
  } from '@nestjs/common';
  import { RestoService } from './resto.service';
  import { Product } from '../product.entity';
  
  @Controller('restaurant')
  export class RestoController {
    constructor(
      private readonly RestoService: RestoService,
    ) {}
    //ajouter resto 
    @Post('addresto')
    async addproduit(
      @Body('resto') resto:string,
      @Body('card') card: string,
    ) {
      return this.RestoService.ajouter({
        resto,
        card
      });
    }
  
    @Delete(':id')
    async deleteResto(@Param('id') id: number): Promise<void> {
      //handle the error if resto not found
      const resto: any = await this.RestoService.findOneResto({ where: { id } });
      if (!resto) {
        throw new Error('resto not found');
      }
      return this.RestoService.deleteResto(resto);
    }
    
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    console.log(typeof(id));
    
    const user = await this.RestoService.findOneResto({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  }
  //update user
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() product: Product,
   
  ): Promise<Product> {
    
    return this.RestoService.update(id, product);
  }

    @Get()
    async findAll(): Promise<Product[]> {
      return await this.RestoService.findAllResto();
    }
  }
   