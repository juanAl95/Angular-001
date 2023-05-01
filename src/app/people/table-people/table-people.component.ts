import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from 'src/app/model/user-data';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResponseI } from 'src/app/model/response-i';



@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css'],
  template: `
  
  `
})
export class TablePeopleComponent implements OnInit{

  //listUser: [] = [];
  listUsers: any[] = [];

  constructor(private userService:ServiceUserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.listUsers = res.data;
      console.log(this.listUsers);
    });
    
  }

  /*allUser():void {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUser = data.data;
      console.log()
    })
  }*/
}
