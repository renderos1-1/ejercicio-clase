import { Injectable } from '@nestjs/common';

@Injectable()
export class LibrosService {
  private libros = [
    { id: 1, titulo: 'Cien Años de Soledad' },
    { id: 2, titulo: 'Don Quijote' },
    { id: 3, titulo: 'El Señor de los Anillos' },
    { id: 4, titulo: 'Orgullo y Prejuicio' },
    { id: 5, titulo: 'El principito' },
  ];

  buscarPorPalabraClave(palabra: string) {
    const palabraLower = palabra.toLowerCase();
    return this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(palabraLower),
    );
  }
}
