import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets/tickets.controller';
import { TicketsService } from './tickets/tickets.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';
import { TicketsExpiradosService } from './tickets-expirados/tickets-expirados.service';
import { TicketsExpiradosController } from './tickets-expirados/tickets-expirados.controller';
import { TicketsExpiradosModule } from './tickets-expirados/tickets-expirados.module';

@Module({
  imports: [TicketsExpiradosModule],
  controllers: [AppController, TicketsController, LibrosController, TicketsExpiradosController],
  providers: [AppService, TicketsService, LibrosService, TicketsExpiradosService],
})
export class AppModule {}
