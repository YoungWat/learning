import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到s菜鸟教程</h2>
        </header>
      </div>
    )
  }
}

export default App;
