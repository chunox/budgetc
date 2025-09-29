import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Presupuesto } from '@prisma/client';

@Injectable()
export class PresupuestosService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PresupuestoCreateInput): Promise<Presupuesto> {
    return this.prisma.presupuesto.create({ data });
  }

  findAll(): Promise<Presupuesto[]> {
    return this.prisma.presupuesto.findMany({
      include: { usuario: true, items: { include: { item: true } }, transacciones: true },
    });
  }

  findOne(id: number): Promise<Presupuesto | null> {
    return this.prisma.presupuesto.findUnique({
      where: { id_presupuesto: id },
      include: { usuario: true, items: { include: { item: true } }, transacciones: true },
    });
  }

  update(id: number, data: Prisma.PresupuestoUpdateInput): Promise<Presupuesto> {
    return this.prisma.presupuesto.update({ where: { id_presupuesto: id }, data });
  }

  remove(id: number): Promise<Presupuesto> {
    return this.prisma.presupuesto.delete({ where: { id_presupuesto: id } });
  }
}
