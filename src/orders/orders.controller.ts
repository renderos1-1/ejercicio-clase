import { Controller, Get, Patch, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id/estado')
  updateEstado(@Param('id') id: string, @Body() body: any) {
    return this.ordersService.actualizarEstado(+id, body);
  }
}
