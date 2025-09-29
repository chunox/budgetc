import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionDetalleController } from './transaccion-detalle.controller';

describe('TransaccionDetalleController', () => {
  let controller: TransaccionDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransaccionDetalleController],
    }).compile();

    controller = module.get<TransaccionDetalleController>(TransaccionDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
