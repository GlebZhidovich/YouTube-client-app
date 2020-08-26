import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MaterialModule } from '../material.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortByNamePipe } from './components/search-results/sort-by-name.pipe';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';

const routes: Routes = [
  {path: '', component: SearchResultsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SortByNamePipe,
    DetailedInformationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class YoutubeModule { }
