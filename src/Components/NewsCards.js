import React from 'react'
import "./NewsCard.css"

export default function NewsCards(props) {

    let { title, description, newsUrl, imageUrl, date, author, source } = props;
    return (
        <div className="card" style={{ width: "18rem", height: "32rem" }}>
             <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source ? source : "Unknown"}</span>
            <img src={imageUrl} className="card-img-top" alt="Not Available " />
            <div className="card-body">
                <h6 className="card-title">{title}</h6>

                <p className="card-text " >{description}</p>
                <p className="card-text " style={{ textAlign: "left", color: "green" }}>{new Date(date).toGMTString()} by {author ? author: "Unknown"}.</p>
               
                <a href={newsUrl} className="btn btn-dark">Read more</a>
            </div>
        </div>
    );
}
