import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QAndAComponent } from './q-and-a.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [QAndAComponent],
  imports: [CommonModule, MatButtonToggleModule],
  exports: [QAndAComponent],
})
export class QAndAModule {}
