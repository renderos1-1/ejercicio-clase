import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    { id: 1, cliente: 'Axel', productos: ['Pizza peperoni', 'hamburguesa'], estado: 'pendiente' }
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find(order => order.id === id);
    if (!order) {
      return { success: false, message: 'Orden no encontrada' };
    }
    return order;
  }

  actualizarEstado(id: number, datos: any) {
    const orden = this.orders.find(order => order.id === id);
    if (!orden) {
      return { success: false, message: 'Orden no encontrada' };
    }

    const estadosPermitidos = ['pendiente', 'preparando', 'entregado'];
    const estadoActual = orden.estado;
    const nuevoEstado = datos.estado;

    const indexActual = estadosPermitidos.indexOf(estadoActual);
    const indexNuevo = estadosPermitidos.indexOf(nuevoEstado);

    if (indexNuevo === -1) {
      return { success: false, message: 'Estado inválido' };
    }

    if (indexNuevo !== indexActual + 1) {
      return {
        success: false,
        message: `Transición inválida: de '${estadoActual}' solo se puede pasar a '${estadosPermitidos[indexActual + 1]}'`,
      };
    }

    orden.estado = nuevoEstado;

    return {
      success: true,
      message: 'Estado actualizado correctamente',
      data: orden,
    };
  }
}
