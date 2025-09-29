import { Module } from '@nestjs/common';
import { PresupuestoItemService } from './presupuesto-item.service';
import { PresupuestoItemController } from './presupuesto-item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PresupuestoItemService],
  controllers: [PresupuestoItemController]
})
export class PresupuestoItemModule {}
