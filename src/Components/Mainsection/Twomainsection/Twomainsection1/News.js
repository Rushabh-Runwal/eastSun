import React, { useState, useEffect } from "react";
import "./News.css";
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&from=last month&sortBy=publishedAt&apiKey=${process.env.REACT_APP_APPLE_NEWS_API_KEY}&pageSize=6`
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedAppleNews = data.articles;
        setNews(fetchedAppleNews);
        console.log(fetchedAppleNews);
      });
  }, []);
  // console.log(process.env.REACT_APP_APPLE_NEWS_API_KEY);
  // console.log(news)
  return (
    <div>
      <div className="allvideos-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold video-title-wrapper">
                &ldquo; Latest news &rdquo;
                <br />
              </div>
            </div>
            {news?.map((singleNews, i) => {
              let newsName = singleNews.source.name;
              let newsLink = singleNews.url;
              let NewsWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoTitle">
                      <a href={newsLink} target="_blank">
                        {singleNews.title}
                      </a>
                    </div>
                    <div className="videoThumbnail">
                      <a href={newsLink} target="_blank">
                        <img src={singleNews.urlToImage} alt={newsName} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoDesc">{singleNews.description}</div>
                      <div className="seeMore">
                        <a href={newsLink} target="_blank">
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
              return NewsWrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
