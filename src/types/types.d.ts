interface Block {
  publisherKey: string;
  hash: string;
  previousHash: string;
  timestamp: string;
  height: number;
}

interface BlockDetail {
  height: number;
  timestamp: number;
  data: Data;
  previousHash: string;
}

interface Data {
  articles: Article[];
}

interface Article {
  id: string;
  headline: string;
  byline: string;
  date: string;
  section: string;
}

interface ArticleDetail {
  id: string;
  headline: string;
  byline: string;
  date: string;
  contentHash: string;
}
