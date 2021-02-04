import React, { Fragment } from "react";
import hackerNews from "./hackernews.json";

const NewsList = (props) => {
  
  let grapTable = (data)=>{
    props.recieveData(data)
  }
  return (
    <Fragment>
   {/* <pre>{JSON.stringify(hackerNews)}</pre> */}

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
          {hackerNews.hits
          .map((hackerNew) => {
            return (
              <tr key={hackerNew.objectID} onClick={grapTable.bind(this,hackerNew)} >
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
