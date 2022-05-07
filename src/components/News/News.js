import React, { useState, useEffect } from "react";
import axios from "axios";
import "./news.css"

const News = () => {
  const [news, setNews] = useState(null);

  const newsUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=I2KEvLXYbdn5OYwTBapw7kTxMG0ukj6O`;


  const getNews = () => {
    axios.get(newsUrl).then((res) => {
        setNews(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err))
    }

    useEffect(() => {
        getNews()
    },[])

  return (
    <div className="p-8 font1">
        <h2 className="text-2xl font-semibold mb-4">Today's Top News</h2>
      {news &&
        news.results.splice(0, 3).map((art, i) => {
          return (
            <div key={art.url} className="leading-7 each-news">
                
              <a href={art.url} target="_blank" rel="noreferrer"><p>{art.title}</p></a>
            </div>
          );
        })}
    </div>
  );
};
export default News;
