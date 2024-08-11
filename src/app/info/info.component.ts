import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatSidenavModule,MatListModule,MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  sidebarOpen: boolean = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
