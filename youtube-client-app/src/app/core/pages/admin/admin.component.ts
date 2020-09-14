import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { VideosAddCustomAction } from '../../../redux/actions/videos.actions';
import { IVideosState } from '../../../redux/reducers/videos.reducer';
import { ICustomVideo } from '../../../shared/models/search-response.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public customCardForm: FormGroup;

  constructor(private store$: Store<IVideosState>) {
  }

  public saveCustomCard(): void {
    if (this.customCardForm.valid) {
      this.customCardForm.get('date').setValue(`${new Date()}`);
      const video: ICustomVideo = (this.customCardForm.value as ICustomVideo);
      this.store$.dispatch(new VideosAddCustomAction({
        video,
      }));
    }
  }

  public ngOnInit(): void {
    this.customCardForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgLink: new FormControl('', [Validators.required]),
      videoLink: new FormControl('', [Validators.required]),
      date: new FormControl(''),
    });
  }

}
