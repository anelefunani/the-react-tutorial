import * as React from "react";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

import { IProducts } from "../common/IProducts";

interface IProps {
    products: IProducts
}

export const FilterableProductTable = (props: IProps) => {
    const border = {
        border: "2px solid orange",
        margin: "2px",
        padding: "5px",
    }
    const clear: any = {
        clear: "left"
    }
    return (
        <div style={border}>
            <SearchBar />
            <ProductTable products={props.products} />
            <div style={clear} />
        </div>
    );
}