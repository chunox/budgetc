import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionDetalleService } from './transaccion-detalle.service';

describe('TransaccionDetalleService', () => {
  let service: TransaccionDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransaccionDetalleService],
    }).compile();

    service = module.get<TransaccionDetalleService>(TransaccionDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
