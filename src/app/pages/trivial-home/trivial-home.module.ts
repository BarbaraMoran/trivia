import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivialHomeRoutingModule } from './trivial-home-routing.module';
import { TrivialHomeComponent } from './trivial-home.component';
import { FiltersComponent } from 'src/app/components/filters/filters.component';
import { QAndAComponent } from 'src/app/components/q-and-a/q-and-a.component';
import { FiltersModule } from 'src/app/components/filters/filters.module';
import { QAndAModule } from 'src/app/components/q-and-a/q-and-a.module';
import { QAndAFormModule } from 'src/app/components/q-and-a-form/q-and-a-form.module';

@NgModule({
  declarations: [TrivialHomeComponent],
  imports: [
    CommonModule,
    TrivialHomeRoutingModule,
    FiltersModule,
    QAndAFormModule,
  ],
})
export class TrivialHomeModule {}
