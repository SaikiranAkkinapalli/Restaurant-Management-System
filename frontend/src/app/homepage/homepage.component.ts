import { Component } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { HomepageformsComponent } from '../homepageforms/homepageforms.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(HomepageformsComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
