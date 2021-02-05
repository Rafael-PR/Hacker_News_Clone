import React, { Fragment, useEffect, useState } from "react";
// import hackerNews from "./hackernews.json";

const NewsList = (props) => {
  const [hackerNews, setHackerNews] = useState(null);

  //for search
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState(null);
  useEffect(() => {
    let url = `http://hn.algolia.com/api/v1/search?tags=front_page`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHackerNews(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
      <table className="table table-hover text-center table-striped table-primary">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {hackerNews &&
            hackerNews.hits
              .filter((s) => (search ? s.title.includes(search) : s))
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
    </Fragment>
  );
};

export default NewsList;
