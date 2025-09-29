import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Prisma } from '@prisma/client';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() data: Prisma.UsuarioCreateInput) {
    return this.usuariosService.create(data);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.UsuarioUpdateInput) {
    return this.usuariosService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(Number(id));
  }
}
