import { Injectable } from '@nestjs/common';

@Injectable()
export class VideogamesService {
  private videogames: any[] = [];

  crear(videogame: any) {
    this.videogames.push(videogame);
    return { mensaje: 'Videojuego registrado con éxito' };
  }

  obtenerTodos() {
    return this.videogames;
  }
}