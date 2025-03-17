import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

async function fetchBlock({hash}: {hash: string}): Promise<BlockDetail> {
  const baseUrl = import.meta.env.VITE_NODE_BASE_URL;

  const response = await fetch(`${baseUrl}/blockchain/block/${hash}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Network-ID": "local",
    }
  });
  return await response.json();
}

const BlockDetails = () => {
  const [block, setBlock] = useState<BlockDetail | undefined>(undefined);

  const { hash } = useParams();

  useEffect(() => {
    fetchBlock({hash: hash!}).then((blockDetail) => {
      setBlock(blockDetail);
    })
  })

  return (
    <>
      <div>
        <h1>{hash}</h1>
        <p>
          Date Minted: {block && new Date(block.timestamp).toISOString()}
        </p>
        {block && block.previousHash && <p>Previous Block: <Link to={`/block/${block.previousHash}`}>{block.previousHash}</Link></p>}
        <h2>Articles</h2>
        <ul>
        {
          block &&
          block.data.articles.map((article, index) => (
            <li key={index}>
              <Link to={`/article/${article.id}`}>{article.headline}</Link>
              <p>{article.byline}</p>
              <p>{article.section}</p>
              <p>{article.date}</p>
            </li>
          ))
        }
        </ul>
      </div>
    </>
  );
}

export default BlockDetails;
