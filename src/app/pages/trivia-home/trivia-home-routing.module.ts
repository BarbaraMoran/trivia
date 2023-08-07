import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaHomeComponent } from './trivia-home.component';

const routes: Routes = [{ path: '', component: TriviaHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriviaHomeRoutingModule {}
