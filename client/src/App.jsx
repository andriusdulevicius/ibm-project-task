import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Stats from './components/Stats/Stats';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/stats'>
          <Stats />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
