import React, { useState, useEffect } from 'react'
import NewsCards from './NewsCards'

export default function Allnews() {

    const [article, setArticle] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalResults, setTotalResult] = useState(0);

    useEffect(() => {

        fetchApi();

    }, [])

    const fetchApi = async () => {

        let apiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6c0b2660434447f0b0a3f2cfcbf768ee&page=1&pageSize=18";
        let data = await fetch(apiUrl);
        let fetchedData = await data.json();
        setArticle(fetchedData.articles);
        setTotalResult(fetchedData.totalResults);
    }

    const prevClick = async () => {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6c0b2660434447f0b0a3f2cfcbf768ee&page=${pageNo - 1}&pageSize=18`;
        let data = await fetch(apiUrl);
        let fetchedData = await data.json();
        setArticle(fetchedData.articles);
        setPageNo(pageNo - 1);
    }

    const nextClick = async () => {

        //    Total cards per page taken as 18
        if (pageNo + 1 <= Math.ceil(totalResults / 18)) {

            let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6c0b2660434447f0b0a3f2cfcbf768ee&page=${pageNo + 1}&pageSize=18`;
            let data = await fetch(apiUrl);
            let fetchedData = await data.json();
            setArticle(fetchedData.articles);
            console.log("onclick" + pageNo);
            setPageNo(pageNo + 1);
        }
    }

    return (
        <div className='container my-5'>
            <h1> Top News HeadLines from INDIA </h1>
            <div className='row my-5 '>
                {article.map(e => {
                    return (
                        <div className='col-md-4 my-3' key={e.url}>

                            <NewsCards title={e.title.slice(0, 110)} description={e.description ? e.description.slice(0, 100) : ""} newsUrl={e.url} imageUrl={e.urlToImage ? e.urlToImage : "https://img.freepik.com/free-vector/news-concept-landing-page_52683-20522.jpg?size=626&ext=jpg"} date={e.publishedAt} />
                        </div>
                    );
                })}
            </div>
            <div className='d-flex justify-content-around'>
                <button type="button" className="btn btn-info" onClick={prevClick} disabled={pageNo <= 1}> &larr; Previous</button>
                <p> Showing page {pageNo} out of {Math.ceil(totalResults / 18)} </p>
                <button type="button" className="btn btn-info" onClick={nextClick} disabled={pageNo >= Math.ceil(totalResults / 18)}> Next &rarr;</button>
            </div>

        </div>
    )
}
