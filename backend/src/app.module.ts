import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { CategoriasModule } from './categorias/categorias.module';
import { ItemsModule } from './items/items.module';
import { PresupuestosModule } from './presupuestos/presupuestos.module';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { PresupuestoItemModule } from './presupuesto-item/presupuesto-item.module';
import { TransaccionDetalleModule } from './transaccion-detalle/transaccion-detalle.module';

@Module({
  imports: [UsuariosModule, CategoriasModule, ItemsModule, PresupuestosModule, TransaccionesModule, PresupuestoItemModule, TransaccionDetalleModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
