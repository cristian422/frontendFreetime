// support-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SupportListService } from './support-list.service'; // Importa el servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SupportListComponent implements OnInit {
  supports: any[] = [];

  constructor(private supportListService: SupportListService) {}

  ngOnInit() {
    this.getSupportList();
  }

  getSupportList() {
    this.supportListService.getSupports().subscribe(
      (response: any) => {
        this.supports = response.supports;
      },
      (error) => {
        console.error('Error al obtener los soportes', error);
      }
    );
  }
}
