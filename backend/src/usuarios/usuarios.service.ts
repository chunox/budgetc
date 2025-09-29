import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { Prisma, Usuario } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return this.prisma.usuario.create({ data });
  }

  findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  findOne(id: number): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({ where: { id_usuario: id } });
  }

  update(id: number, data: Prisma.UsuarioUpdateInput): Promise<Usuario> {
    return this.prisma.usuario.update({ where: { id_usuario: id }, data });
  }

  remove(id: number): Promise<Usuario> {
    return this.prisma.usuario.delete({ where: { id_usuario: id } });
  }
}
