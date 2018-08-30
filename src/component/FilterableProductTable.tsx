import * as React from "react";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

import { IProducts } from "../common/IProducts";

interface IProps {
    products: IProducts
}

export class FilterableProductTable extends React.Component<IProps, any> {

    public constructor(props: IProps) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false,
        }
    }

    public render() {
        const border = {
            // border: "2px solid orange",
            margin: "2px",
            padding: "5px",
        }
        const clear: any = {
            clear: "left"
        }
        return (
            <div style={border}>
                <SearchBar onFilterTextChange={this.handleFilterTextChange} inStockOnly={this.state.inStockOnly} filterText={this.state.filterText}/>
                <ProductTable onOnlyInStockChange={this.handleOnlyInStockChange} products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
                <div style={clear} />
            </div>
        );
    }

    public handleFilterTextChange = (newFilterText: string) => {
        this.setState(({filterText: newFilterText}));
    }

    public handleOnlyInStockChange = (newInStockOnly: boolean) => {
         this.setState(({inStockOnly: newInStockOnly}));
    }
}