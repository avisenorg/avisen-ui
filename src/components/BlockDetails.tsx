import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

interface BlockDetail {
  data: Data
}

interface Data {
  articles: Article[];
}

interface Article {
  headline: string;
  byline: string;
  date: string;
}

async function fetchBlock({hash}: {hash: string}): Promise<BlockDetail> {
  const response = await fetch(`http://localhost:8081/blockchain/block/${hash}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Network-ID": "local",
    }
  });
  return await response.json();
}

const BlockDetails = () => {
  const [block, setBlock] = useState<BlockDetail>(undefined);

  const { hash } = useParams();

  useEffect(() => {
    fetchBlock({hash: hash!}).then((blockDetail) => setBlock(blockDetail))
  })

  return (
    <>
      <div>
        <h1>{hash}</h1>
        <h2>Articles</h2>
        <ul>
        {
          block &&
          block.data.articles.map((article) => (
            <li>
              <h4>{article.headline}</h4>
              <p>{article.byline}</p>
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
