import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { SortByViewPipe } from './pipes/sort-by-view.pipe';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SortByNamePipe,
    DetailedInformationComponent,
    CustomDatePipe,
    SortByDatePipe,
    SortByViewPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class YoutubeModule { }
