import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectInput, setNewsData } from '../features/userSlices'
import axios from 'axios';

const News = () => {

  const gnews_token = process.env.REACT_APP_GNEWS_TOKEN_ID
  const searchInput = useSelector(selectInput);
  const news_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=${gnews_token}`
  const dispatch = useDispatch();
  const [news, setNews] = useState("");
  const [loading, setLodaing] = useState(true);

  useEffect(() => {
    // debugger;
    axios
      .get(news_url)
      .then((response) => {
        dispatch(setNewsData(response.data))
        setNews(response.data)
        setLodaing(false)
      })
      .catch((error) => {
        console.log(error)
      })
  // eslint-disable-next-line
  }, [searchInput])

  return (

    <div>
      {loading && <h1 className="loading__news">Loading</h1>}

      <div id="main">
        <div className="thumbnails">
          <div className="inner">
            {news?.articles?.map((news_item) => (
              <div className="box" key={news_item.publishedAt}>
                <a href={news_item.url} className="image fit"><img src={news_item.image} alt={news_item.title} /></a>
                <div className="inner">
                  <div style={{width: "100%"}}><span>{news_item.source.name}</span></div>
                  <h3>{news_item.title}</h3>
                  <p>{news_item.description}</p>
                  <a href={news_item.url} target="_blank" rel="noopener noreferrer" className="button fit" data-poptrox="youtube,800x400">Open</a>
                </div>
              </div>
            ))}

            {news?.totalArticles === 0 && (
              <h1>No News Available</h1>
            )}
          </div>

        </div>
      </div>
    </div>
  )
  // https://gnews.io/api/v4/search?q=example&token=API-Token
}

export default News
