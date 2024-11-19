import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuFreetimerService {
  private apiUrl = 'http://127.0.0.1:1337/listtask'; // URL de tu API

  constructor(private http: HttpClient) {}

  list_task(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}