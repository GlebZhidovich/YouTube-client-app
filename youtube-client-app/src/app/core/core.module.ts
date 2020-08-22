import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
	ErrorComponent,
	HeaderComponent,
	SearchPanelComponent,
	SortPanelComponent,
	UserLoginComponent,
  ],
  imports: [
  CommonModule,
  MaterialModule,
  RouterModule,
  ],
  exports: [
	ErrorComponent,
	HeaderComponent,
	SearchPanelComponent,
	SortPanelComponent,
	UserLoginComponent,
  ],
})
export class CoreModule { }
