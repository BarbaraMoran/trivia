import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaResultsComponent } from './trivia-results.component';

const routes: Routes = [{ path: '', component: TriviaResultsComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriviaResultsRoutingModule {}
