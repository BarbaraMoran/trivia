import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrivialResultsRoutingModule } from './trivial-results-routing.module';
import { TrivialResultsComponent } from './trivial-results.component';
import { QAndAFormModule } from 'src/app/components/q-and-a-form/q-and-a-form.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TrivialResultsComponent],
  imports: [
    CommonModule,
    TrivialResultsRoutingModule,
    QAndAFormModule,
    MatButtonModule,
  ],
})
export class TrivialResultsModule {}
