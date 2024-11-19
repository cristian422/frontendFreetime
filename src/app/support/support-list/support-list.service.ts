// support-list.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupportListService {

  private apiUrl = 'http://127.0.0.1:1338/listSupports'; // Asegúrate de tener la URL correcta

  constructor(private http: HttpClient) {}

  // Método para obtener los soportes
  getSupports(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
