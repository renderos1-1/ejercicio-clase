import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    asistio: boolean;
}

@Injectable()
export class AsistenciasService {
    private usuarios: Usuario[] = [];

    registrar(usuario: { nombre: string; correo: string }) {
        const existe = this.usuarios.find(
            (u) => u.correo === usuario.correo.trim().toLowerCase(),
        );
        if (existe) {
            throw new BadRequestException('Usuario ya registrado');
        }

        const nuevo = {
            id: this.usuarios.length + 1,
            nombre: usuario.nombre,
            correo: usuario.correo.trim().toLowerCase(),
            asistio: false,
        };

        this.usuarios.push(nuevo);
        return nuevo;
    }

    marcarAsistencia(id: number, correo: string) {
        const usuario = this.usuarios.find((u) => u.id === id);
        if (!usuario) throw new NotFoundException('Usuario no encontrado');

        if (usuario.correo !== correo.trim().toLowerCase()) {
            throw new BadRequestException('Correo incorrecto. Verificación fallida');
        }

        usuario.asistio = true;
        return { mensaje: 'Asistencia registrada', usuario };
    }


    resumen() {
        const total = this.usuarios.length;
        const asistentes = this.usuarios.filter((u) => u.asistio).length;
        const ausentes = total - asistentes;
        return {
            totalRegistrados: total,
            asistentes,
            ausentes,
        };
    }
}
