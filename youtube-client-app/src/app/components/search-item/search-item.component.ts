import { Component, Input, OnInit } from '@angular/core';
import { Snippet, Statistics } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() videoData: any;

  public statistics: Statistics;
  public snippet: Snippet;

  ngOnInit(): void {
    this.statistics = this.videoData.statistics;
    this.snippet = this.videoData.snippet;
  }
}
