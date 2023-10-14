import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = "e8740237ea6b4a36812bdbe5de4654e9"; // Ganti dengan API key NewsAPI Anda.

  useEffect(() => {
    // Ganti 'YOUR_NEWSAPI_API_KEY' dengan API key NewsAPI Anda.
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="container mx-auto space-y-5">
      <h1 className="text-lg font-semibold">Berita Terkini</h1>
        {articles.map((article, index) => (
          <div className="grid gap-5 space-y-5 grid-row-1" key={index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="p-5 border border-black rounded-lg">
              {article.title}
            </a>
          </div>
        ))}
    </div>
  );
};

export default News;
