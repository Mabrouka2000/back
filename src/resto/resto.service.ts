import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Product } from '../product.entity';

@Injectable()
export class RestoService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,

  ) {}
//add resto
async ajouter(date: any): Promise<Product> {
  return this.productRepository.save(date);
}
async findOneResto(condition: any): Promise<Product> {
  return this.productRepository.findOne(condition);
}
//delete resto
async deleteResto(id: number): Promise<void> {
  await this.productRepository.delete(id);
}
async findAllResto(): Promise<Product[]> {
  return await this.productRepository.find();
}
async update(id: number, Product: Product
): Promise<Product> {
  await this.productRepository.update(id, Product);
  return await this.productRepository.findOne({ where: { id } });
}

}
