import React, { useState, useEffect } from 'react'
import NewsCards from './NewsCards'
import LoadingImg from './LoadingImg'



export default function Allnews(props) {

    const {pageSize, country, category} = props;
    const [article, setArticle] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalResults, setTotalResult] = useState(0);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {

        fetchApi();

        document.title = `${capitalizeFirstLetter(category)}- LiveHeadlines`;
        
        // eslint-disable-next-line
    }, [])

    const fetchApi = async () => {

        
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6c0b2660434447f0b0a3f2cfcbf768ee&page=${pageNo}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl);
        let fetchedData = await data.json();
        setArticle(fetchedData.articles);
        setTotalResult(fetchedData.totalResults);
        setLoading(false);
    }

    const prevClick = async () => {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6c0b2660434447f0b0a3f2cfcbf768ee&page=${pageNo - 1}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl);
        let fetchedData = await data.json();
        setArticle(fetchedData.articles);
        setPageNo(pageNo - 1);
        setLoading(false);
    }

    const nextClick = async () => {

        //    Total cards per page taken as 18
        if (pageNo + 1 <= Math.ceil(totalResults / pageSize)) {

            let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6c0b2660434447f0b0a3f2cfcbf768ee&page=${pageNo + 1}&pageSize=${pageSize}`;
            setLoading(true);
            let data = await fetch(apiUrl);
            let fetchedData = await data.json();
            setArticle(fetchedData.articles);
          
            setPageNo(pageNo + 1);
            setLoading(false);
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    

    return (
        <div className='container my-5'>
            <h1 style={{marginTop: "80px"}}> Top News HeadLines From {capitalizeFirstLetter(category)} </h1>
            {loading && <LoadingImg/>}
          <div className='row my-5 '>
                {!loading && article.map(e => {
                    return (
                        <div className='col-md-4 my-3' key={e.url}>

                            <NewsCards title={e.title.slice(0, 110)} description={e.description ? e.description.slice(0, 100) : ""} newsUrl={e.url} imageUrl={e.urlToImage} date={e.publishedAt}  author={e.author} source={e.source.name} />
                        </div>
                    );
                })}
            </div>
           

            <div className='d-flex justify-content-around'>
                <button type="button" className="btn btn-info" onClick={prevClick} disabled={pageNo <= 1}> &larr; Previous</button>
                <p> Showing page {pageNo} out of {Math.ceil(totalResults /pageSize)} </p>
                <button type="button" className="btn btn-info" onClick={nextClick} disabled={pageNo >= Math.ceil(totalResults / pageSize)}> Next &rarr;</button>
            </div>

        </div>
    )
}
