import { Component, OnInit } from '@angular/core';
import { ConcesionarioService } from 'src/app/service/concesionario.service';

@Component({
  selector: 'app-table-concesionario',
  templateUrl: './table-concesionario.component.html',
  styleUrls: ['./table-concesionario.component.css']
})
export class TableConcesionarioComponent implements OnInit{

  listConcesionarios: any[] = [];

  constructor(private concesionarioService: ConcesionarioService) {}

  ngOnInit() {
    this.concesionarioService.getAllConcesionario().subscribe(res => {
      console.log(res)
      this.listConcesionarios = res.data;
      console.log(this.listConcesionarios);
    });

  }

}
