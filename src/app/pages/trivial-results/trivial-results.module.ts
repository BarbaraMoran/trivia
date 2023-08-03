import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivialResultsRoutingModule } from './trivial-results-routing.module';
import { TrivialResultsComponent } from './trivial-results.component';
import { QAndAComponent } from 'src/app/components/q-and-a/q-and-a.component';
import { QAndAModule } from 'src/app/components/q-and-a/q-and-a.module';


@NgModule({
  declarations: [
    TrivialResultsComponent
  ],
  imports: [
    CommonModule,
    TrivialResultsRoutingModule,
    QAndAModule
  ]
})
export class TrivialResultsModule { }
