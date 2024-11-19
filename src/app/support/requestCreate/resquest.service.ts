import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root',
})

export class SupportService {
    private apiurl = 'http://172.0.0.1:1338/addSupport';


constructor(private http: HttpClient) {}

// Método para crear un soporte
createSupport(support_description: string, user_id: number, stateId: number): Observable<any> {
  const supportData = {
    support_description,
    user_id,
    stateId
  };
  return this.http.post(`${this.apiurl}/create`, supportData);
}

}