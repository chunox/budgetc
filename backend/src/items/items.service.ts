// items.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Item } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ItemCreateInput): Promise<Item> {
    return this.prisma.item.create({ data });
  }

  findAll(): Promise<Item[]> {
    return this.prisma.item.findMany({
      include: { categoria: true, usuario: true, precios: true },
    });
  }

  findOne(id: number): Promise<Item | null> {
    return this.prisma.item.findUnique({
      where: { id_item: id },
      include: { categoria: true, usuario: true, precios: true },
    });
  }

  update(id: number, data: Prisma.ItemUpdateInput): Promise<Item> {
    return this.prisma.item.update({ where: { id_item: id }, data });
  }

  remove(id: number): Promise<Item> {
    return this.prisma.item.delete({ where: { id_item: id } });
  }
}
