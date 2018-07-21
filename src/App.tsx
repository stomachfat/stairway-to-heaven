import * as React from 'react'
import { Component } from 'react'
import './App.scss'

// import logo from './logo.svg';
import JimmysNumbers from './pages/JimmysNumbers'

class App extends Component {

  public render() {
    return (
      <div className="App">
        <JimmysNumbers />

      </div>
    );
  }
}

export default App;
