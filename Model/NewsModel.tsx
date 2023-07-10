export type FeedModel = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
};

export type NewsModel = { status: string; articles: Array<FeedModel> };
