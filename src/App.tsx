import './App.css'
import {useEffect, useState} from "react";

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

function App() {

  const [latestBlocks, setLatestBlocks] = useState<Block[]>([]);
  useEffect(() => {
    fetchLatestBlocks().then((blocks) => setLatestBlocks(blocks))
  })

  return (
    <>
      <div>
          <h2>Latest Blocks</h2>
          <ol>
            {
              latestBlocks.map((block) => (
                <li id={block.hash}>
                  <a>{block.hash}</a>
                </li>
              ))
            }
          </ol>
      </div>
    </>
  )
}

export default App
