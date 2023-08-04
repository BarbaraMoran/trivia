import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QAndAComponent } from './q-and-a.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QAndAComponent],
  imports: [CommonModule, MatButtonToggleModule, FormsModule],
  exports: [QAndAComponent],
})
export class QAndAModule {}
