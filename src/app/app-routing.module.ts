import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'trivia-home',
    loadChildren: () =>
      import('./pages/trivia-home/trivia-home.module').then(
        (m) => m.TriviaHomeModule
      ),
  },
  {
    path: 'trivia-results',
    loadChildren: () =>
      import('./pages/trivia-results/trivia-results.module').then(
        (m) => m.TriviaResultsModule
      ),
  },
  { path: '', redirectTo: '/trivia-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
