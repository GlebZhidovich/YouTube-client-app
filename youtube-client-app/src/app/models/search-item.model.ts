export interface Statistics {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

export interface Snippet {
  thumbnails: { medium: { url: string } };
  title: string;
}
