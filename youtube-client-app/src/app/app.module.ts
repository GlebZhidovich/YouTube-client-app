import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPanelComponent } from './components/header/search-panel/search-panel.component';
import { SortPanelComponent } from './components/header/sort-panel/sort-panel.component';
import { UserLoginComponent } from './components/header/user-login/user-login.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MaterialModule } from './material.module';
import { SortByNamePipe } from './components/search-results/sort-by-name.pipe';

@NgModule({
  declarations: [
	AppComponent,
	HeaderComponent,
	SearchResultsComponent,
	SearchItemComponent,
	SearchPanelComponent,
	SortPanelComponent,
	UserLoginComponent,
	SortByNamePipe,
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
