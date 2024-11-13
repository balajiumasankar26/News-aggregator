// News.js
import React from 'react';
import { useParams } from 'react-router';
import './News.css'; // Importing CSS file
import TextToSpeech from '../misx/TextToSpeech';

const News = () => {
  const { id } = useParams();
  const newsData = JSON.parse(localStorage.getItem('news'));
  const news = newsData.find((item) => item._id === id);

  return (
    <>
      {news && (
        <div className="news-container">
          <div className="d-news-card">
            <h5 className="d-news-title">{news.title}</h5>
            <img src={news.imageUrl} alt={news.title} className="d-news-image" width={'300px'} />
            <TextToSpeech text={news.description}/>
            <p className="d-news-description">{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer" className="d-news-link">
              Read Full Article
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
