import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrivialResultsRoutingModule } from './trivial-results-routing.module';
import { TrivialResultsComponent } from './trivial-results.component';
import { QAndAFormModule } from 'src/app/components/q-and-a-form/q-and-a-form.module';

@NgModule({
  declarations: [TrivialResultsComponent],
  imports: [CommonModule, TrivialResultsRoutingModule, QAndAFormModule],
})
export class TrivialResultsModule {}
