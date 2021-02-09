import React,{useState} from 'react'
import NewsCard from './NewsCard'
import NewsList from './NewsList'


const NewsApp = () => {
    const [news, setnews] = useState({"created_at": "Date",
    "title": "The title",
    "url": "#",
    "author": "Author",
    "points": 0,
    "num_comments": 0,
})

    let recieveData =(data)=>{
        setnews(data)
    }
    return (
<React.Fragment>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <p className="h3 text-primary" >Hacker News</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-9">
                <NewsList recieveData = {recieveData}/>
            </div>
            <div className="col-lg-3">
                <NewsCard 
                author = {news.author}  
                title={news.title} 
                url={news.url} 
                points={news.points} 
                num_comments={news.num_comments} 
                created_at={news.created_at}
                />
            </div>
        </div>
    </div>
</React.Fragment>
)
}

export default NewsApp