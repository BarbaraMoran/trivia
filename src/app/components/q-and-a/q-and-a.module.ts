import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QAndAComponent } from './q-and-a.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { QuotationMarksPipe } from 'src/app/pipes/quotation-marks.pipe';

@NgModule({
  declarations: [QAndAComponent, QuotationMarksPipe],
  exports: [QAndAComponent],
  imports: [CommonModule, MatButtonToggleModule, FormsModule],
})
export class QAndAModule {}
