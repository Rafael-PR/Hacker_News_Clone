import React from 'react'

const NewsCard = () => {
    return (
        <div className="card sticky-top">
        <div className="card-header bg-primary text-white">
            <div className="p-4">

            </div>
        </div>
        <div className="card-body text-center">
            <img src= "" alt="" className="img-thumbnail rounded-circle w-50 contact-img"/>
            <ul className="list-group mt-3">
                <li className="list-group-item list-group-item-primary">
                    NAME : hello
                </li>
                <li className="list-group-item list-group-item-primary">
                hello
                </li>
                <li className="list-group-item list-group-item-primary">
                    AGE : hello Yrs.
                </li>
                <li className="list-group-item list-group-item-primary">
                    City : hello
                </li>
                <li className="list-group-item list-group-item-primary">
                    State : hello
                </li>
            </ul>
        </div>
    </div>
    )
}

export default NewsCard
