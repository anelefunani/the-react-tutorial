import * as React from 'react';
import './App.css';
import { FilterableProductTable } from './component/FilterableProductTable';

const products = {
    products: [
        { category: "Sporting Goods", price: "R49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "R9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "R29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "R99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "R399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "R199.99", stocked: true, name: "Nexus 7" }
    ]
}
class App extends React.Component {

    public render() {
        const border: any = {
            margin: "0px 300px"
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">The React Tutorial</h1>
                </header>
                <div style={border}>
                    <FilterableProductTable products={products}/>
                </div>
            </div>
        );
    }
}

export default App;
