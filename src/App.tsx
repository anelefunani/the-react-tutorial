import * as React from 'react';
import './App.css';
import { FilterableProductTable } from './component/FilterableProductTable';

class App extends React.Component {
    public render() {
        const border: any = {
            margin: "0px 300px"
        }
        const clear: any = {
            clear: "left"
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">The React Tutorial</h1>
                </header>
                <div style={border}>
                    <FilterableProductTable />
                </div>
                <div style={clear} />
            </div>
        );
    }
}

export default App;
