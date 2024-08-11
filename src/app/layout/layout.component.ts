import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,InfoComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
    teamMembers: any[] = [
      { name: 'Holden Caulfield', position: 'UI Designer', imageUrl: 'https://example.com/image1.jpg' },
      // Add more team members here
    ];
  
    constructor() { }
  
    ngOnInit() { }
  }

