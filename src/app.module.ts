import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets/tickets.controller';
import { TicketsService } from './tickets/tickets.service';
import { VideogamesController } from './videogames/videogames.controller';
import { VideogamesService } from './videogames/videogames.service';

@Module({
  imports: [],
  controllers: [AppController, TicketsController, VideogamesController],
  providers: [AppService, TicketsService, VideogamesService],
})
export class AppModule {}
