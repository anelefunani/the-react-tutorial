import * as React from 'react';
import './App.css';
import { Mock } from "./component/Mock";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The React Tutorial</h1>
        </header>
        <Mock />
      </div>
    );
  }
}

export default App;
