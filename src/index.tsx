import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { IProducts } from './common/IProducts';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const products: IProducts = {
    products: [
        { category: "Sporting Goods", price: "R49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "R9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "R29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "R99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "R399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "R199.99", stocked: true, name: "Nexus 7" }
    ]
}

ReactDOM.render(
    <App products={products} />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
