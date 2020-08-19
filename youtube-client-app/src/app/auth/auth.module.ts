import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
	imports: [
		CommonModule,
  	MaterialModule,
	],
  exports: [LoginComponent],
})
export class AuthModule { }
