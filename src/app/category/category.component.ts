import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, MatDialogModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  course = {
    category: 'Category',
    date: '12 Jun 2019',
    title: 'Python For Data Science',
    description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  openDialog(event: Event): void {
    event.preventDefault(); // Prevent default link behavior
    this.dialog.open(DialogboxComponent, {
      width: '300px', // Adjust the width as necessary
      data: { /* pass any data if necessary */ }
    });
  }
}