import React from 'react';
import './NewsCard.css'; 
import { useNavigate } from 'react-router';
const NewsCard = ({news}) => {
    const navigate=useNavigate();
    return (
        <div className='card-home' >
            <div className="card news-card ">
            <img src={news.imageUrl} alt={news.title} className="card-img-top news-card-image" />
            <div className="card-body p-3 pb-4">
                <h5 className="card-title news-card-title">{news.title}</h5>
                <p>{news.publishedAt}</p>
                <button target='_blank' className="news-card-button" onClick={()=>navigate(`/news/${news._id}`)}>Read More</button>
            </div>
        </div>
        </div>
    );
}

export default NewsCard;
