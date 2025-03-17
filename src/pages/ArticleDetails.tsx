import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

async function fetchArticle({id}: {id: string}): Promise<ArticleDetail> {
  const baseUrl = import.meta.env.VITE_NODE_BASE_URL;
  const networkId = import.meta.env.VITE_NETWORK_ID;

  const response = await fetch(`${baseUrl}/blockchain/article/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Network-ID": networkId,
    }
  });
  return await response.json();
}

const BlockDetails = () => {
  const [article, setArticle] = useState<ArticleDetail | undefined>(undefined);

  const { id } = useParams();

  useEffect(() => {
    fetchArticle({id: id!}).then((articleDetail) => {
      setArticle(articleDetail);
    })
  })

  return (
    <>
      <div>
        <h1>{article?.headline}</h1>
        <div>{
          article &&
            <div>

                <p>{article.byline}</p>
                <p>Published Date: {article.date}</p>
                <p>Content Hash: {article.contentHash}</p>
            </div>
        }</div>
      </div>
    </>
  );
}

export default BlockDetails;
