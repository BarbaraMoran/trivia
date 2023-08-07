import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QAndAFormModule } from 'src/app/components/q-and-a-form/q-and-a-form.module';
import { MatButtonModule } from '@angular/material/button';
import { TriviaResultsRoutingModule } from './trivia-results-routing.module';
import { TriviaResultsComponent } from './trivia-results.component';

@NgModule({
  declarations: [TriviaResultsComponent],
  imports: [
    CommonModule,
    TriviaResultsRoutingModule,
    QAndAFormModule,
    MatButtonModule,
  ],
})
export class TriviaResultsModule {}
