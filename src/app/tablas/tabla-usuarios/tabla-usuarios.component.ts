import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
    idUsuario: number;
    nombre: string;
    apellido: string;
    correo: string;
    identificacion: number;
    telefono: string;
    direccion: string;
}

@Component({
    selector: 'app-tabla-usuarios',
    templateUrl: '../tabla-usuarios/tabla-usuarios.component.html',
    styleUrls: ['../tabla-usuarios/tabla-usuarios.component.css']
  })

export class TablaUsuariosComponent {

    displayedColumns: string[] = ['idUsuario','nombre','apellido','correo','identificacion','telefono','direccion'];
    dataSource: MatTableDataSource<UserData>;

    constructor() {
        const usuarios: UserData[] = [
            {
                idUsuario: 1, nombre: 'John', apellido: 'Doe', correo: 'john.doe@example.com', identificacion: 123456789, telefono: '3112185064',
                direccion: "calle 7"
            },
            {
                idUsuario: 1, nombre: 'John', apellido: 'Doe', correo: 'john.doe@example.com', identificacion: 123456789, telefono: '3112185064',
                direccion: "calle 7"
            },
            {
                idUsuario: 1, nombre: 'John', apellido: 'Doe', correo: 'john.doe@example.com', identificacion: 123456789, telefono: '3112185064',
                direccion: "calle 7"
            },
        ];
        this.dataSource = new MatTableDataSource(usuarios);
    }
}

