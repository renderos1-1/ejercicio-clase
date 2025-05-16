import { Module } from '@nestjs/common';
import { TicketsExpiradosService } from './tickets-expirados.service';
import { TicketsExpiradosController } from './tickets-expirados.controller';

@Module({
  controllers: [TicketsExpiradosController],
  providers: [TicketsExpiradosService],
})
export class TicketsExpiradosModule {}
