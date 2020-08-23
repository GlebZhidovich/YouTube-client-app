import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';

const routes: Routes = [
    {path: '', component: SearchResultsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    {path: 'auth', component: LoginComponent},
    {path: 'error', component: ErrorComponent},
    {path: '**', redirectTo: '/error'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
