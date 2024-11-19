import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MenuFreetimerService } from './menu-freetimer.service';

interface Task {
  task_title: string;
  task_stimed_time_hours: number;
  task_offer_suggested: number;
}

@Component({
  selector: 'app-menu-freetimer',
  standalone: true,
  imports: [CommonModule],  // Agrega CommonModule aquí
  templateUrl: './menu-freetimer.component.html',
  styleUrls: ['./menu-freetimer.component.css']
})
export class MenuFreetimerComponent {
  tasks: Task[] = [];

  constructor(private menuFreetimerService: MenuFreetimerService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.menuFreetimerService.list_task().subscribe(
      (data: Task[]) => {
        this.tasks = data;
      },
      (error:any) => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }
}
