import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class requestComponent implements OnInit {
  caseNumber: string = '';
  userEmail: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Realizar la consulta al backend para obtener el último soporte
    this.getSupportDetails();
  }

  // Método para obtener los detalles del último soporte creado
  getSupportDetails() {
    this.http.get('http://127.0.0.1:1338/listSupports').subscribe(
      (response: any) => {
        const latestSupport = response.supports[response.supports.length - 1]; // Obtener el último soporte
        this.caseNumber = latestSupport.support_id;
        this.userEmail = latestSupport.user_email;
      },
      error => {
        console.error('Error obteniendo los soportes:', error);
      }
    );
  }
}
