import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets/tickets.controller';
import { TicketsService } from './tickets/tickets.service';
import { VideogamesController } from './videogames/videogames.controller';
import { VideogamesService } from './videogames/videogames.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { AsistenciasController } from './asistencias/asistencias.controller';
import { AsistenciasService } from './asistencias/asistencias.service';

@Module({
  imports: [],
  controllers: [AppController, TicketsController, VideogamesController, LibrosController, OrdersController, AsistenciasController],
  providers: [AppService, TicketsService, VideogamesService, LibrosService, OrdersService, AsistenciasService],
})
export class AppModule {}
