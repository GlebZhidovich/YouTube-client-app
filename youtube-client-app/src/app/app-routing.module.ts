import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ErrorComponent } from './core/pages/error/error.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      canActivate: [AuthGuard],
      canLoad: [AuthGuard],
      loadChildren: './youtube/youtube.module#YoutubeModule',
    },
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule',
    },
    {path: 'error', component: ErrorComponent},
    {path: '**', redirectTo: '/error'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
