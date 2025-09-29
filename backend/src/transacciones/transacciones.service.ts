import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Transaccion } from '@prisma/client';

@Injectable()
export class TransaccionesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.TransaccionCreateInput): Promise<Transaccion> {
    return this.prisma.transaccion.create({ data });
  }

  findAll(): Promise<Transaccion[]> {
    return this.prisma.transaccion.findMany({
      include: { usuario: true, presupuesto: true, detalles: { include: { item: true } } },
    });
  }

  findOne(id: number): Promise<Transaccion | null> {
    return this.prisma.transaccion.findUnique({
      where: { id_transaccion: id },
      include: { usuario: true, presupuesto: true, detalles: { include: { item: true } } },
    });
  }

  update(id: number, data: Prisma.TransaccionUpdateInput): Promise<Transaccion> {
    return this.prisma.transaccion.update({ where: { id_transaccion: id }, data });
  }

  remove(id: number): Promise<Transaccion> {
    return this.prisma.transaccion.delete({ where: { id_transaccion: id } });
  }
}
