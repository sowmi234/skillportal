import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';

interface Student {
  name: string;
  rollNo: string;
  department: string;
  yearOfStudy: number;
  address: string;
  mobileNo: string;
  faPercentage: number;
  skillPercentage: number;
}

@Component({
  selector: 'app-skillchoice',
  standalone: true,
  imports: [RouterLink,InfoComponent,RouterOutlet],
  templateUrl: './skillchoice.component.html',
  styleUrl: './skillchoice.component.css'
})

export class SkillchoiceComponent implements OnInit {
  studentList: Student[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize student data
    this.initializeStudentList();
  }

  initializeStudentList(): void {
    // Mock student data
    const students: Student[] = [
      {
        name: 'John Doe',
        rollNo: '123',
        department: 'Computer Science',
        yearOfStudy: 2,
        address: '123 Main St, City',
        mobileNo: '123-456-7890',
        faPercentage: 85,
        skillPercentage: 75
      },
      
    ];

    // Set the studentList property to the mock student data
    this.studentList = students;
  }
}
