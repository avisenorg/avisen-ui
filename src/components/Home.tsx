import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface Block {
  publisherKey: string;
  hash: string;
  previousHash: string;
  timestamp: string;
  height: number;
}

async function fetchLatestBlocks(): Promise<Block[]> {
  const response = await fetch('http://localhost:8081/blockchain?page=0&size=10&sort=DESC', {
    headers: {
      "Content-Type": "application/json",
      "X-Network-ID": "local",
    }
  });
  return await response.json();
}

const Home = () => {

  const [latestBlocks, setLatestBlocks] = useState<Block[] | undefined>(undefined);
  useEffect(() => {
    if (!latestBlocks) {
      fetchLatestBlocks().then((blocks) => setLatestBlocks(blocks))
    }
  })

  return (
    <>
      <div>
        <h2>Latest Blocks</h2>
        <ul>
          {
            latestBlocks ?
              latestBlocks.map((block, index) => (
                <li key={index}>
                  <Link to={`/block/${block.hash}`}>{block.hash}</Link>
                </li>
              )) : <></>
          }
        </ul>
      </div>
    </>
  )
}

export default Home;
