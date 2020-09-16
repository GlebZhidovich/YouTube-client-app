import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { VideoDatePipe } from './pipes/video-date.pipe';

@NgModule({
  declarations: [
    VideoDatePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    VideoDatePipe,
  ],
})
export class SharedModule { }
