import { FormControl, Validators } from '@angular/forms';

export interface IStatistics {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

export interface ISnippet {
  thumbnails: {
    standard: { url: string };
    medium: { url: string },
  };
  title: string;
  description: string;
  publishedAt: string;
}
