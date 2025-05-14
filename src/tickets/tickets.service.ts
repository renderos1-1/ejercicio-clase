import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class TicketsService {
  async generarPDF(data: any, res: Response) {
    const doc = new PDFDocument();
    
    // Configurar respuesta como PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=ticket.pdf');
    doc.pipe(res);

    // Contenido del ticket
    doc.fontSize(18).text('Ticket de Compra', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Cliente: ${data.cliente}`);
    doc.moveDown();

    let total = 0;
    data.productos.forEach((producto) => {
      doc.text(`• ${producto.nombre} - $${producto.precio}`);
      total += producto.precio;
    });

    doc.moveDown();
    doc.text(`Total: $${total.toFixed(2)}`, { align: 'right' });

    doc.end();
  }
}
