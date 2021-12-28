import React from 'react'
import "./NewsCard.css"

export default function NewsCards(props) {

    let { title, description, newsUrl, imageUrl, date } = props;
    return (
        <div className="card" style={{width: "18rem" , height: "32rem"}}>
            <img src={imageUrl} className="card-img-top" alt="Not Available "/>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                        
                    <p className="card-text " >{description}</p>
                    <p style={{textAlign: "left", color:"green"}}>{date}</p>
                    <a href={newsUrl} className="btn btn-dark">Read more</a>
                </div>
        </div>
    );
}
