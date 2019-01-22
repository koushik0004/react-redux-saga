import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './containers/button';
import Loading from './containers/loading';
import NewsItem from './containers/newsitem';

class App extends Component {
  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log(prevProps);
  //   return (<div>test</div>);
  // }
  render() {
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section id="container" className="App-main">
          <Button />
          <Loading />
          <NewsItem />
        </section>
      </div>
    );
  }
}

export default App;
