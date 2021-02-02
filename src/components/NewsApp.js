import React from 'react'
import NewsCard from './NewsCard'
import NewsList from './NewsList'

const NewsApp = () => {
    return (
<React.Fragment>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <p className="h3 text-primary" >Hacker News</p>
                <p className="lead" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident ab nesciunt! Reiciendis veritatis at quia eum dolores facilis, distinctio soluta nisi quos. Quis, nulla natus. Quisquam, veritatis aut! Hic!</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-9">
                <NewsList/>
            </div>
            <div className="col-md-3">
                <NewsCard/>
            </div>
        </div>
    </div>
</React.Fragment>
    )
}

export default NewsApp



     {/* <NewsList/> */}