import { Test, TestingModule } from '@nestjs/testing';
import { PresupuestoItemController } from './presupuesto-item.controller';

describe('PresupuestoItemController', () => {
  let controller: PresupuestoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresupuestoItemController],
    }).compile();

    controller = module.get<PresupuestoItemController>(PresupuestoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
