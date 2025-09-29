import { Module } from '@nestjs/common';
import { PresupuestosService } from './presupuestos.service';
import { PresupuestosController } from './presupuestos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PresupuestosService],
  controllers: [PresupuestosController]
})
export class PresupuestosModule {}
