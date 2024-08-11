import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSort} from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { InfoComponent } from './info/info.component';
import { StudentComponent } from './student/student.component';
import { CategoryComponent } from './category/category.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { TaskformComponent } from './taskform/taskform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, FormsModule, MatSidenavModule, MatToolbarModule,
    MatButtonModule, MatIconModule, FlexLayoutModule, MatGridListModule,
    MatTableModule, MatPaginatorModule, MatListModule,MatSort,InfoComponent,StudentComponent,
    CategoryComponent,DialogboxComponent,TaskformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skillportal';
}
