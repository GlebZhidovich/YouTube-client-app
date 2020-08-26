import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params: {id: string}): void => {
      const { id }: { id: string } = params;
      console.log(this.dataService.getById(id));
    });
  }

}
