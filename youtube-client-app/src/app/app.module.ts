import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AuthModule } from './auth/auth.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortByNamePipe } from './components/search-results/sort-by-name.pipe';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
	AppComponent,
	SearchResultsComponent,
	SearchItemComponent,
	SortByNamePipe,
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MaterialModule,
  AuthModule,
  CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
