import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FiltersComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [FiltersComponent],
})
export class FiltersModule {}
