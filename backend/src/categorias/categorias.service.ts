import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Categoria } from '@prisma/client';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CategoriaCreateInput): Promise<Categoria> {
    return this.prisma.categoria.create({ data });
  }

  findAll(): Promise<Categoria[]> {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number): Promise<Categoria | null> {
    return this.prisma.categoria.findUnique({ where: { id_categoria: id } });
  }

  update(id: number, data: Prisma.CategoriaUpdateInput): Promise<Categoria> {
    return this.prisma.categoria.update({ where: { id_categoria: id }, data });
  }

  remove(id: number): Promise<Categoria> {
    return this.prisma.categoria.delete({ where: { id_categoria: id } });
  }
}
