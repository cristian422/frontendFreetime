import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  private apiUrl = 'http://127.0.0.1:1338/addSupport';  // Asegúrate de que la URL sea la correcta

  constructor(private http: HttpClient) {}

  createSupport(supportDescription: string, userId: number, supportStateId: number): Observable<any> {
    const body = {
      support_description: supportDescription,
      user_id: userId,
      support_state_id: supportStateId
    };

    return this.http.post(this.apiUrl, body);
  }
}
