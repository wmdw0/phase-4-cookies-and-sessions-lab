import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeEmojiList } from "../utils";

function Home() {
  const [articles, setArticles] = useState([]);

  function handleClick(){
    fetch('/article_click')
    .then(res => res.json())
    .then(console.log)
  }
  
  useEffect(() => {
    fetch("/articles")
      .then((r) => r.json())
      .then(setArticles);
  }, []);

  return (
    <main>
      {articles.map((article) => {
        const emojis = makeEmojiList(article.minutes_to_read);
        return (
          <article key={article.id}>
            <h3 onClick={handleClick}>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </h3>
            <small>
              {article.date} • {emojis} {article.minutes_to_read} min read
            </small>
            <p>{article.preview}</p>
          </article>
        );
      })}
    </main>
  );
}

export default Home;
