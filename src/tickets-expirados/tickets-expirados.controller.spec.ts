import { Test, TestingModule } from '@nestjs/testing';
import { TicketsExpiradosController } from './tickets-expirados.controller';

describe('TicketsExpiradosController', () => {
  let controller: TicketsExpiradosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketsExpiradosController],
    }).compile();

    controller = module.get<TicketsExpiradosController>(TicketsExpiradosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
