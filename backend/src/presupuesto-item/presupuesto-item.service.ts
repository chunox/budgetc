import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PresupuestoItem } from '@prisma/client';

@Injectable()
export class PresupuestoItemService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PresupuestoItemCreateInput): Promise<PresupuestoItem> {
    return this.prisma.presupuestoItem.create({ data });
  }

  findAll(): Promise<PresupuestoItem[]> {
    return this.prisma.presupuestoItem.findMany({
      include: { presupuesto: true, item: true },
    });
  }

  findOne(id: number): Promise<PresupuestoItem | null> {
    return this.prisma.presupuestoItem.findUnique({
      where: { id_presupuesto_item: id },
      include: { presupuesto: true, item: true },
    });
  }

  update(id: number, data: Prisma.PresupuestoItemUpdateInput): Promise<PresupuestoItem> {
    return this.prisma.presupuestoItem.update({ where: { id_presupuesto_item: id }, data });
  }

  remove(id: number): Promise<PresupuestoItem> {
    return this.prisma.presupuestoItem.delete({ where: { id_presupuesto_item: id } });
  }
}
