import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrivialHomeComponent } from './trivial-home.component';

const routes: Routes = [{path:'', component: TrivialHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrivialHomeRoutingModule { }
