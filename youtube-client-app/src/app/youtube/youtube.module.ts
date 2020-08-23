import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortByNamePipe } from './components/search-results/sort-by-name.pipe';

const routes: Routes = [
  {path: '', component: SearchResultsComponent},
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SortByNamePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
  ],
})
export class YoutubeModule { }
