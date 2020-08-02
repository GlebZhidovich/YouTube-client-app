import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as data from '../../data.json';
import { Video } from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public videosData: Video[];

  ngOnInit(): void {
    // @ts-ignore
    this.videosData = data.default.items;
  }

}
