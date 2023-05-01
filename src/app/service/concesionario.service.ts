import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = "http://localhost:8083/consecionarios"

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioService {

  constructor(private http: HttpClient) { }

  getAllConcesionario() {
    return this.http.get<any>(urlBase + "/all")
  }
}
