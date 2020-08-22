import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ErrorComponent } from './core/pages/error/error.component';

const routes: Routes = [
  {path: '', component: SearchResultsComponent, pathMatch: 'full'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
