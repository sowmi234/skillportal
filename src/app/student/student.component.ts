import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink, RouterOutlet, InfoComponent, MatTabsModule,
     MatTableModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'] 
})
export class StudentComponent {
  displayedColumns: string[] = ['sno', 'day', 'skillName', 'taskCompletion', 'attendance'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  toggleStatus(student: any) {
    switch (student.taskCompletion) {
      case 'Completed':
        student.taskCompletion = 'In Progress';
        break;
      case 'In Progress':
        student.taskCompletion = 'Not Started';
        break;
      case 'Not Started':
        student.taskCompletion = 'Completed';
        break;
      default:
        break;
    }
  }

  // Function to get button text based on status
  getButtonText(status: string): string {
    switch (status) {
      case 'Completed':
        return 'Completed';
      case 'In Progress':
        return 'In Progress';
      case 'Not Started':
        return 'Not Started';
      default:
        return '';
    }
  }
  
  getStatusButtonClass(taskCompletion: string): string {
    switch(taskCompletion) {
      case 'Completed':
        return 'completed-button';
      case 'In Progress':
        return 'in-progress-button';
      case 'Not Started':
        return 'not-started-button';
      default:
        return '';
    }
  }
}
  


export interface AttendanceElement {
  day: string;
  skillName: string;
  taskCompletion: string;
  attendance: string;
}

const ELEMENT_DATA: AttendanceElement[] = [
  { day: 'Monday', skillName: 'Angular', taskCompletion: 'Completed', attendance: 'Present' },
  { day: 'Tuesday', skillName: 'React', taskCompletion: 'In Progress', attendance: 'Absent' },
  { day: 'Wednesday', skillName: 'Vue', taskCompletion: 'Not Started', attendance: 'Present' },
  { day: 'Thursday', skillName: 'Svelte', taskCompletion: 'Completed', attendance: 'Present' },
  { day: 'Friday', skillName: 'JavaScript', taskCompletion: 'In Progress', attendance: 'Present' },
  { day: 'Monday', skillName: 'Angular', taskCompletion: 'Completed', attendance: 'Present' },
  { day: 'Tuesday', skillName: 'React', taskCompletion: 'In Progress', attendance: 'Absent' },
  { day: 'Wednesday', skillName: 'Vue', taskCompletion: 'Not Started', attendance: 'Present' },
  { day: 'Thursday', skillName: 'Svelte', taskCompletion: 'Completed', attendance: 'Present' },
  { day: 'Friday', skillName: 'JavaScript', taskCompletion: 'In Progress', attendance: 'Present' },
];
