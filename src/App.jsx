import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import Articles from './components/articles/articles';
import getArticles from './services/fetchData';
// import dummyArt from './dummyData.json';

class App extends Component {
  state = {
    articles: [],
  };

  getAllArticles = async (searchingFor) => {
    const fetchedData = await getArticles(searchingFor);
    console.log(fetchedData);
    // const fetchedArt = dummyArt;
    this.setState({ articles: fetchedData.articles });
  };

  componentDidMount() {
    // this.getAllArticles();
  }

  render() {
    return (
      <div className='App'>
        <SearchBar getWantedArticles={this.getAllArticles} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
