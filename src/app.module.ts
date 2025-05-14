import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets/tickets.controller';
import { TicketsService } from './tickets/tickets.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';

@Module({
  imports: [],
  controllers: [AppController, TicketsController, LibrosController],
  providers: [AppService, TicketsService, LibrosService],
})
export class AppModule {}
