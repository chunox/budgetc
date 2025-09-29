import { Module } from '@nestjs/common';
import { TransaccionDetalleService } from './transaccion-detalle.service';
import { TransaccionDetalleController } from './transaccion-detalle.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TransaccionDetalleService],
  controllers: [TransaccionDetalleController]
})
export class TransaccionDetalleModule {}
