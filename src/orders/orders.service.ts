import { Injectable } from '@nestjs/common';

@Injectable()
//objetivo: actualizar una orden desde postman
export class OrdersService {
  private orders = [{id: 1,cliente: "Axel", productos: ["Pizza peperoni", "hamburguesa", "pizza carne"]}];
  //metodo para actualizar una orden
  actualizarProductos(id: number, datosActualizados: any) {
    // buscar la orden por ID
    const orderIndex = this.orders.findIndex(order => order.id === id);

    // revisar si existe la orden
    if (orderIndex === -1) {
      // orden no encontrada
      return { success: false, message: 'Orden no encontrada' };
    }

    // actualizar orden

    this.orders[orderIndex] = {
      ...this.orders[orderIndex],
      ...datosActualizados
    };

    // regresar orden actualizada
    return {
      success: true,
      message: 'Orden actualizada con éxito',
      data: this.orders[orderIndex]
    };
  }


}
