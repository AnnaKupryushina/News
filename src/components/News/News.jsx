import React, { useContext } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import NewsContext from '../NewsContext/NewsContext';

function News(props) {
    const { data } = useContext(NewsContext);

    return (
        <div>
            <h1 className="title">News App</h1>
            <div className="all__news">
                {data ? data.articles.map(news =>
                    <NewsArticle data={news} key={news.url} />) : "Loading"}
            </div>
        </div>
    );
}

export default News;