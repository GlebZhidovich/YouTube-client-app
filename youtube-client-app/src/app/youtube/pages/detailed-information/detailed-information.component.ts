import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { IVideo } from '../../../shared/models/search-response.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit {

  public videoData: IVideo;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params: {id: string}): void => {
      const { id }: { id: string } = params;
      this.videoData = this.dataService.getById(id);
    });
  }

}
