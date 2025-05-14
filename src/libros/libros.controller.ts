import { Controller, Get, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get('buscar')
  buscar(@Query('q') palabra: string) {
    return this.librosService.buscarPorPalabraClave(palabra);
  }
}
