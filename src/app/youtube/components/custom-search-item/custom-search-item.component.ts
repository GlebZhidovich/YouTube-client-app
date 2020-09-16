import { Component, Input } from '@angular/core';
import { ICustomVideo } from '../../../shared/models/search-response.model';

@Component({
  selector: 'app-custom-search-item',
  templateUrl: './custom-search-item.component.html',
  styleUrls: ['./custom-search-item.component.scss'],
})
export class CustomSearchItemComponent {
  @Input() public videoData: ICustomVideo;
}
