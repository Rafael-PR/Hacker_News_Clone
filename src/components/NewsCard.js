import React from 'react'

const NewsCard = ({author,title,url,points}) => {


    return (
        <div className="card sticky-top">
        <div className="card-header bg-primary text-white">
            <div className="p-4 text-center">
            <span>
                <a href={url}>{title}</a>
            </span>
                
                
            </div>
        </div>
        <div className="card-body text-center">
            

            <ul className="list-group mt-3">
                <li className="list-group-item list-group-item-primary">
                By {author}
                </li>
                <li className="list-group-item list-group-item-primary">
                 Points {points}   

                 
                </li>
                <li className="list-group-item list-group-item-primary">
                By {author}
                </li>
                <li className="list-group-item list-group-item-primary">
                By {author}
                </li>
                <li className="list-group-item list-group-item-primary">
                By {author}
                </li>
            </ul>
        </div>
    </div>
    )
}

export default NewsCard
