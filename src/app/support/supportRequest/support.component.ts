import { Component } from '@angular/core';
import { SupportService } from './support.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
  imports: [FormsModule, CommonModule]
})
export class SupportComponent {
  supportDescription: string = '';
  userId: number = 1;  // Aquí deberías obtener el id del usuario dinámicamente
  supportStateId: number = 1;  // El estado del soporte, podrías obtenerlo dinámicamente también
  userEmail: string = '';  // Ajusta esto para obtener el correo dinámicamente
  message: string = '';

  constructor(private supportService: SupportService, private router: Router) {
    // Aquí podrías cargar el correo del usuario de un servicio de autenticación
    // Ejemplo: this.userEmail = authService.getUserEmail();
  }

  createSupport() {
    this.supportService.createSupport(this.supportDescription, this.userId, this.supportStateId)
      .subscribe(
        response => {
          const caseNumber = response.caseNumber || 232324758; // Aquí obtienes el número de caso del API
          const userEmail = response.userEmail || 'correo@example.com'; // Aquí obtienes el correo del usuario
  
          // Redirigir a la página 'requestcreate' con los parámetros de la URL
          this.router.navigate(['/requestcreate'], { queryParams: { support_id: caseNumber, user_email: userEmail } });
        },
        error => {
          this.message = `Error al crear soporte: ${error.message}`;
        }
      );
  }
  
}

