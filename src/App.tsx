import * as React from 'react';
import './App.css';
import { IProducts } from './common/IProducts';
import { FilterableProductTable } from './component/FilterableProductTable';

interface IProps {
    products: IProducts;
}

class App extends React.Component<IProps, any> {

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
                    <FilterableProductTable products={this.props.products} />
                </div>
            </div>
        );
    }
}

export default App;
