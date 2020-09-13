import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AdminComponent } from './core/pages/admin/admin.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { YoutubeModule } from './youtube/youtube.module';

const routes: Routes = [
    {
      path: 'youtube',
      loadChildren: (): Promise<YoutubeModule> => import('./youtube/youtube.module')
        .then((module: {YoutubeModule: YoutubeModule}): YoutubeModule => module.YoutubeModule),
    },
    {
      path: 'auth',
      loadChildren: (): Promise<AuthModule> => import('./auth/auth.module')
        .then((module: {AuthModule: AuthModule}): AuthModule => module.AuthModule),
    },
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], },
    {path: 'error', component: ErrorComponent},
    {path: '', redirectTo: '/youtube', pathMatch: 'full'},
    {path: '**', redirectTo: '/error'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
