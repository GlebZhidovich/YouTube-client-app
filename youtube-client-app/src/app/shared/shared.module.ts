import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoDatePipe } from './pipes/video-date.pipe';

@NgModule({
  declarations: [
    VideoDatePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [VideoDatePipe],
})
export class SharedModule { }
