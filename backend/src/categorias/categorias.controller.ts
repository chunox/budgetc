import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Prisma } from '@prisma/client';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  create(@Body() data: Prisma.CategoriaCreateInput) {
    return this.categoriasService.create(data);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.CategoriaUpdateInput) {
    return this.categoriasService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(Number(id));
  }
}
