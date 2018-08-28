import * as React from "react";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export const FilterableProductTable = (props: any) => {
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
            <ProductTable />
        <div style={clear} />
        </div>
    );
}