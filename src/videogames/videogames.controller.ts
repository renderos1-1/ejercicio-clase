import { Body, Controller, Get, Post, BadRequestException } from '@nestjs/common';
import { VideogamesService } from './videogames.service';

@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Post()
  registrar(@Body() body: any) {
    const { nombre, genero, anio } = body;

    if (!nombre || typeof nombre !== 'string' || nombre.length < 4) {
      throw new BadRequestException('El nombre debe tener al menos 4 caracteres');
    }

    if (!genero || typeof genero !== 'string') {
      throw new BadRequestException('El género es obligatorio y debe ser texto');
    }

    if (!anio || typeof anio !== 'number') {
      throw new BadRequestException('El año es obligatorio y debe ser válido');
    }

    return this.videogamesService.crear({ nombre, genero, anio });
  }

  @Get()
  listar() {
    return this.videogamesService.obtenerTodos();
  }
}
