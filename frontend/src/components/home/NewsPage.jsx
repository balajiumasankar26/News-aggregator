import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { getAllNews } from './service.js';
import './style.css';

const NewsPage = ({newsData,setNewsData}) => {
    const fetchAllNews = async () => {
        const data = await getAllNews();
        if (data) {
            setNewsData(data);
            localStorage.setItem('news', JSON.stringify(data));
        }
    };
    useEffect(() => {
        fetchAllNews();
    }, []);
    return (
        <>
            {
                newsData?.length!=0 ?
                <div className="news-page">
                    {newsData?.map((item, index) => (
                        <div key={index}>
                            <NewsCard key={index} news={item} />
                        </div>
                    ))}
                </div>:
                <div className='text-center p-5'>
                    No news found
                </div>
            }
        </>

    );
};

export default NewsPage;
