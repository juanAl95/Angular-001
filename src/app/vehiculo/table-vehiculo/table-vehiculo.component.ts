import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-table-vehiculo',
  templateUrl: './table-vehiculo.component.html',
  styleUrls: ['./table-vehiculo.component.css']
})
export class TableVehiculoComponent implements OnInit {

  listVehiculos: any[] = [];

  constructor(private vehiculoService:VehiculoService) {}

  ngOnInit(): void {
    this.allVehiculos();

  }

  allVehiculos():void{
    this.vehiculoService.getAllVehiculos().subscribe(res => {
      this.listVehiculos = res.data;
      console.log(this.listVehiculos);
    })
  }

}
