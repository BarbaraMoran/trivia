import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QAndAFormComponent } from './q-and-a-form.component';
import { QAndAModule } from '../q-and-a/q-and-a.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [QAndAFormComponent],
  imports: [CommonModule, QAndAModule, MatButtonModule],
  exports: [QAndAFormComponent],
})
export class QAndAFormModule {}
