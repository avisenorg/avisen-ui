import { Link } from "react-router-dom";
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
`;

const ArticleItem = styled.li`
  background-color: rgba(0, 86, 120, 0.3);
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 0 10px #81a2be;
  }

  a {
    color: #e8175d;
    text-decoration: none;
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0.25rem 0;
    font-size: 0.9rem;
    color: #474747;
  }
`;

interface Article {
  id: string;
  headline: string;
  byline?: string;
  section?: string;
  date?: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  if (!articles?.length) return null;

  return (
    <>
      <h2 style={{ color: '#e8175d', marginTop: '2rem' }}>Articles</h2>
      <List>
        {articles.map((article) => (
          <ArticleItem key={article.id}>
            <Link to={`/article/${article.id}`}>{article.headline}</Link>
            {article.byline && <p>{article.byline}</p>}
            {article.section && <p>{article.section}</p>}
            {article.date && <p>{article.date}</p>}
          </ArticleItem>
        ))}
      </List>
    </>
  );
};

export default ArticleList; 