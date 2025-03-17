import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
                  <p>{new Date(block.timestamp).toISOString()}</p>
                </li>
              )) : <></>
          }
        </ul>
      </div>
    </>
  )
}

export default Home;
