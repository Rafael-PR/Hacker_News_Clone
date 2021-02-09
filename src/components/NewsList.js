import React, { Fragment, useEffect, useState } from "react";
// import hackerNews from "./hackernews.json";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from './Pagination.js'
const NewsList = (props) => {
  const [hackerNews, setHackerNews] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState(null);
  const [hackerNewsL, sethackerNewsL] = useState(0)

  //  for Pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);

  //  for Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => setcurrentPage(pageNumber);


  //  fetching data

let fetchData =()=>{
  let url = `http://hn.algolia.com/api/v1/search?tags=front_page`;
      fetch(url)

      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHackerNews(data);
        sethackerNewsL(data.hits.length)
      })

      .catch((error) => console.log(error));
}
  useEffect(  () => {
    fetchData()
  }, []);


    //  send to NewsApp

  let grapTable = (data) => {
    props.recieveData(data);
  };

  //for search

  let changeValue = (e) => {
    setUserInput(e.target.value);
  };

  let searchValue = () => {
    setSearch(userInput);
  };

  let resetValue =()=>{
    setUserInput("")
    setSearch(null)
  }
  

  return (
    <Fragment>
      {/* <pre>{JSON.stringify(hackerNews)}</pre> */}
      <input
        type="text"
        placeholder="Search"
        onChange={changeValue}
        value={userInput}
      />
      <button onClick={searchValue}>Search</button>
      <button onClick={resetValue}>Reset</button>
      <table className="table table-hover text-center table-striped table-primary pointer ">
        <thead className="bg-dark text-white">
          <tr  >
            <th scope="col" >ID</th>
            <th scope="col" >TITLE</th>
            <th scope="col" >AUTHOR</th>
            <th scope="col" >URL</th>
          </tr>
        </thead>
        <tbody>
        {!hackerNews && <CircularProgress />}
          {hackerNews &&
            hackerNews.hits
              .filter((s) => (search ? s.title.includes(search) : s))
              .slice(indexOfFirstPost,indexOfLastPost)
              .map((hackerNew) => {
                return (
                  <tr
                  
                    key={hackerNew.objectID}
                    onClick={grapTable.bind(this, hackerNew)}
                  >
                    <td>{hackerNew.objectID}</td>
                    <td>{hackerNew.title}</td>
                    <td>{hackerNew.author}</td>
                    <td>{hackerNew.url}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>


  {/* Pagination */}


      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={hackerNewsL}
        paginate={paginate}
      />
    </Fragment>
  );
};

export default NewsList;
