import React from 'react';
import "./App.css";
import NewsApp from "./components/NewsApp";

function App() {
  return (
    <React.Fragment>
            <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">Hacker News</a>
                </div>
            </nav>
            <NewsApp/>
    </React.Fragment>
  );
}

export default App;
