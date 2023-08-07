import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersModule } from 'src/app/components/filters/filters.module';
import { QAndAFormModule } from 'src/app/components/q-and-a-form/q-and-a-form.module';
import { TriviaHomeRoutingModule } from './trivia-home-routing.module';
import { TriviaHomeComponent } from './trivia-home.component';

@NgModule({
  declarations: [TriviaHomeComponent],
  imports: [
    CommonModule,
    TriviaHomeRoutingModule,
    FiltersModule,
    QAndAFormModule,
  ],
})
export class TriviaHomeModule {}
