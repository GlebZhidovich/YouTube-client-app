import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'auth', component: LoginComponent},
];

@NgModule({
  declarations: [AuthComponent, LoginComponent],
	imports: [
  CommonModule,
  MaterialModule,
	RouterModule.forChild(routes),
	],
  exports: [RouterModule],
})
export class AuthModule { }
