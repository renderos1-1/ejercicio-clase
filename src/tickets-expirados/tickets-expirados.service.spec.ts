import { Test, TestingModule } from '@nestjs/testing';
import { TicketsExpiradosService } from './tickets-expirados.service';

describe('TicketsExpiradosService', () => {
  let service: TicketsExpiradosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketsExpiradosService],
    }).compile();

    service = module.get<TicketsExpiradosService>(TicketsExpiradosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
