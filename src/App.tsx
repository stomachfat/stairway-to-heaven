import * as React from 'react';
import './App.scss';

import logo from './logo.svg';

import Input from './atoms/Input';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input
        />
      </div>
    );
  }
}

export default App;
