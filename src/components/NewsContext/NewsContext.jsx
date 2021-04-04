import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const API_KEY = '33a24b38b0ac4af1be4e5d4461cb211a';

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-04-04&
        sortBy=publishedAt&apiKey=${API_KEY}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, [data]);
    return(
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsContext;