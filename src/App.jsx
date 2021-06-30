import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import Articles from './components/articles/articles';
// import getArticles from './services/fetchData';
import dummyArt from './dummyData.json';

class App extends Component {
  state = {
    articles: [],
  };

  getAllArticles = async () => {
    // const fetchedArt = await getArticles();
    const fetchedArt = dummyArt;
    this.setState({ articles: fetchedArt.articles });
  };

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    return (
      <div className='App'>
        <SearchBar />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
