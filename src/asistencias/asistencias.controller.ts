import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';

@Controller('asistencias')
export class AsistenciasController {
    constructor(private readonly asistenciasService: AsistenciasService) { }

    @Post('registro')
    registrar(@Body() data: { nombre: string; correo: string }) {
        return this.asistenciasService.registrar(data);
    }

    @Patch(':id')
    marcarAsistencia(
        @Param('id') id: string,
        @Body() body: { correo: string },
    ) {
        return this.asistenciasService.marcarAsistencia(Number(id), body.correo);
    }


    @Get('resumen')
    resumen() {
        return this.asistenciasService.resumen();
    }
}
