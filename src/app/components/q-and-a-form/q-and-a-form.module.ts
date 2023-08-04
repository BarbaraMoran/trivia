import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QAndAFormComponent } from './q-and-a-form.component';
import { QAndAModule } from '../q-and-a/q-and-a.module';

@NgModule({
  declarations: [QAndAFormComponent],
  imports: [CommonModule, QAndAModule],
  exports: [QAndAFormComponent],
})
export class QAndAFormModule {}
