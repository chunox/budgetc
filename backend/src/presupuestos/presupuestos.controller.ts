import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PresupuestosService } from './presupuestos.service';
import { Prisma } from '@prisma/client';

@Controller('presupuestos')
export class PresupuestosController {
  constructor(private readonly presupuestosService: PresupuestosService) {}

  @Post()
  create(@Body() data: Prisma.PresupuestoCreateInput) {
    return this.presupuestosService.create(data);
  }

  @Get()
  findAll() {
    return this.presupuestosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presupuestosService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.PresupuestoUpdateInput) {
    return this.presupuestosService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presupuestosService.remove(Number(id));
  }
}
