import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'trivial-home', loadChildren:() => import('./pages/trivial-home/trivial-home.module').then(m => m.TrivialHomeModule)},
  {path: 'trivial-results', loadChildren:() => import('./pages/trivial-results/trivial-results.module').then(m => m.TrivialResultsModule)},
  {path: '', redirectTo:'/trivial-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
