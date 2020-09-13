import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    SearchPanelComponent,
    SortPanelComponent,
    UserLoginComponent,
    AdminComponent,
  ],
  imports: [
    SharedModule,
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
