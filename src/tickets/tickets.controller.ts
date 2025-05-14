import { Controller, Post, Body, Res } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Response } from 'express';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post('imprimir')
  imprimir(@Body() data: any, @Res() res: Response) {
    return this.ticketsService.generarPDF(data, res);
  }
}
