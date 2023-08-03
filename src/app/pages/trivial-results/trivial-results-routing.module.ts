import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrivialResultsComponent } from './trivial-results.component';

const routes: Routes = [{path:'', component: TrivialResultsComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrivialResultsRoutingModule { }
