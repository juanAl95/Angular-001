import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-table-venta',
  templateUrl: './table-venta.component.html',
  styleUrls: ['./table-venta.component.css']
})
export class TableVentaComponent implements OnInit {

  listVentas: any[] = []

  constructor(private ventasService: VentaService) { }

  ngOnInit(): void {
      this.allVentas();
  }
  allVentas():void{
    this.ventasService.getAllVehiculos().subscribe(res => {
      console.log(res);
      this.listVentas = res.data;
      console.log(this.listVentas);
    })
  }

}
