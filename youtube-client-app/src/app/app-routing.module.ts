import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ErrorComponent } from './core/pages/error/error.component';
import { DetailedInformationComponent } from './youtube/pages/detailed-information/detailed-information.component';
import { YoutubeModule } from './youtube/youtube.module';

class AuthModule {
}

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      loadChildren: (): Promise<YoutubeModule> => import('./youtube/youtube.module')
        .then((module: {YoutubeModule: YoutubeModule}): YoutubeModule => module.YoutubeModule),
    },
    {
      path: 'auth',
      loadChildren: (): Promise<AuthModule> => import('./auth/auth.module')
        .then((module: {AuthModule: AuthModule}): AuthModule => module.AuthModule),
    },
    {path: ':id', component: DetailedInformationComponent, canActivate: [AuthGuard]},
    {path: 'error', component: ErrorComponent},
    {path: '**', redirectTo: '/error'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
