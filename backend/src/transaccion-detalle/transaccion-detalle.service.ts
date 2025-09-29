import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, TransaccionDetalle } from '@prisma/client';

@Injectable()
export class TransaccionDetalleService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.TransaccionDetalleCreateInput): Promise<TransaccionDetalle> {
    return this.prisma.transaccionDetalle.create({ data });
  }

  findAll(): Promise<TransaccionDetalle[]> {
    return this.prisma.transaccionDetalle.findMany({
      include: { transaccion: true, item: true },
    });
  }

  findOne(id: number): Promise<TransaccionDetalle | null> {
    return this.prisma.transaccionDetalle.findUnique({
      where: { id_detalle: id },
      include: { transaccion: true, item: true },
    });
  }

  update(id: number, data: Prisma.TransaccionDetalleUpdateInput): Promise<TransaccionDetalle> {
    return this.prisma.transaccionDetalle.update({ where: { id_detalle: id }, data });
  }

  remove(id: number): Promise<TransaccionDetalle> {
    return this.prisma.transaccionDetalle.delete({ where: { id_detalle: id } });
  }
}
