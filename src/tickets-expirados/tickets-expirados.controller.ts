import { Controller, Delete, Get } from '@nestjs/common';
import { TicketsExpiradosService } from './tickets-expirados.service';

@Controller('tickets-expirados')
export class TicketsExpiradosController {
  constructor(private readonly service: TicketsExpiradosService) {}

  @Get()
  obtenerTickets() {
    return this.service.obtenerTickets();
  }

  @Delete()
  eliminarExpirados() {
    return this.service.eliminarExpirados();
  }
}
