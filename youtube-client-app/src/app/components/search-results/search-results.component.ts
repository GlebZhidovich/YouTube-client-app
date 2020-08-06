import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data.json';
import { Video } from '../../models/search-response.model';

interface IJson {
  default: {
	items: Video[];
  };
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  public videosData: Video[];

  public ngOnInit(): void {
	this.videosData = (data as unknown as IJson).default.items;
  }

}
