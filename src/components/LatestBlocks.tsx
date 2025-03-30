import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const LatestContainer = styled.div`
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

const BlockItem = styled(Link)`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #333333;
  transition: all 0.3s ease;
  display: block;
  text-decoration: none;
  letter-spacing: 1px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 15px 5px #81a2be;
  }
`;

const BlockHash = styled.div`
  color: #e8175d;
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  word-break: break-all;
`;

const Timestamp = styled.p`
  color: #474747;
  margin: 0;
  font-size: 0.9rem;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #bbbebd;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

async function fetchLatestBlocks(): Promise<Block[]> {
  const baseUrl = import.meta.env.VITE_NODE_BASE_URL;
  const networkId = import.meta.env.VITE_NETWORK_ID;

  const response = await fetch(`${baseUrl}/blockchain?page=0&size=10&sort=DESC`, {
    headers: {
      "Content-Type": "application/json",
      "X-Network-ID": networkId,
    }
  });
  return await response.json();
}

const BlockListContent = ({ blocks }: { blocks: Block[] }) => (
  <>
    {blocks.map((block, index) => (
      <BlockItem key={index} to={`/block/${block.hash}`}>
        <BlockHash>{block.hash}</BlockHash>
        <Timestamp>{new Date(block.timestamp).toLocaleString()}</Timestamp>
      </BlockItem>
    ))}
  </>
);

const LatestBlocks = () => {
  const [latestBlocks, setLatestBlocks] = useState<Block[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (!latestBlocks) {
      setIsLoading(true);
      fetchLatestBlocks()
        .then((blocks) => {
          setLatestBlocks(blocks);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching blocks:', error);
          setIsLoading(false);
        });
    }
  }, [latestBlocks]);

  const renderContent = () => {
    if (isLoading) return <LoadingSpinner />;
    if (!latestBlocks) return <p>No blocks found</p>;
    return <BlockListContent blocks={latestBlocks} />;
  };

  return (
    <LatestContainer>
      <Title>Latest Blocks</Title>
      {renderContent()}
    </LatestContainer>
  );
};

export default LatestBlocks; 