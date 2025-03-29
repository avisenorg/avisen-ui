import {useEffect, useState, lazy, Suspense} from "react";
import {Link, useParams} from "react-router-dom";
import styled from 'styled-components';

const ArticleList = lazy(() => import('../components/ArticleList'));

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h2`
  color: #363636;
  font-size: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0 1rem;
  margin: 0 0 1rem 0;
`;

const BlockContent = styled.div`
  border: 2px solid #e8175d;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #474747;
`;

const BlockInfo = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: 1px;
`;

const StyledLink = styled(Link)`
  color: #e8175d;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

async function fetchBlock({hash}: {hash: string}): Promise<BlockDetail> {
  const baseUrl = import.meta.env.VITE_NODE_BASE_URL;
  const networkId = import.meta.env.VITE_NETWORK_ID;

  const response = await fetch(`${baseUrl}/blockchain/block/${hash}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Network-ID": networkId,
    }
  });
  return await response.json();
}

const BlockDetails = () => {
  const [block, setBlock] = useState<BlockDetail | undefined>(undefined);
  const { hash } = useParams();

  useEffect(() => {
    fetchBlock({hash: hash!}).then(setBlock);
  }, [hash]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const articles = block?.data?.articles ?? [];
  const hasArticles = articles.length > 0;

  return (
    <Container>
      <ContentContainer>
        <Title>Block Details</Title>
        <BlockContent>
          <BlockInfo>Hash: {hash}</BlockInfo>
          {block?.timestamp && (
            <BlockInfo>Date Minted: {formatDate(block.timestamp)}</BlockInfo>
          )}
          {block?.previousHash && (
            <BlockInfo>
              Previous Block: <StyledLink to={`/block/${block.previousHash}`}>{block.previousHash}</StyledLink>
            </BlockInfo>
          )}
          {hasArticles && (
            <Suspense fallback={<BlockInfo>Loading articles...</BlockInfo>}>
              <ArticleList articles={articles} />
            </Suspense>
          )}
        </BlockContent>
      </ContentContainer>
    </Container>
  );
};

export default BlockDetails;
