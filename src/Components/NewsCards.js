import React from 'react'
import "./NewsCard.css"


export default function NewsCards(props) {

    let { title, description, newsUrl, imageUrl, date, author, source } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ height: "32rem" }}>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source ? source : "Unknown"}</span>
                <img src={imageUrl ? imageUrl : "https://img.freepik.com/free-vector/news-concept-landing-page_52683-20522.jpg?size=626&ext=jpg"} className="card-img-top" alt="Not Available " />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>

                    <p className="card-text " >{description}</p>
                    <p className="card-text " style={{ textAlign: "left", color: "green" }}>{new Date(date).toGMTString()} by {author ? author : "Unknown"}.</p>

                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read more</a>
                </div>
            </div>
        </div>

    );
}
