export interface IStatistics {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

export interface ISnippet {
  thumbnails: { medium: { url: string } };
  title: string;
}
