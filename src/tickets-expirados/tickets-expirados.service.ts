import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketsExpiradosService {
  private tickets = [
    {
      id: 1,
      cliente: 'Ana',
      tiempoDeCompra: new Date(Date.now() - 3 * 60 * 1000), // 3 min atrás
    },
    {
      id: 2,
      cliente: 'Luis',
      tiempoDeCompra: new Date(Date.now() - 1 * 60 * 1000), // 1 min atrás
    },
  ];

  obtenerTickets() {
    return this.tickets;
  }

  eliminarExpirados() {
    const ahora = new Date();
    this.tickets = this.tickets.filter(ticket => {
      const diferenciaMinutos =
        (ahora.getTime() - new Date(ticket.tiempoDeCompra).getTime()) / 60000;
      return diferenciaMinutos <= 2;
    });

    return this.tickets;
  }
}
