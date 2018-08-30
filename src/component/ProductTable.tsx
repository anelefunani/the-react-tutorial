import * as React from "react";
import * as uuid from "uuid";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import { RowTemplate } from "./RowTemplate";

import { GroupByKey } from "../common/utils/Utils";


export const ProductTable = (props: any) => {
    const style: any = {
        // border: "2px solid lightGreen",
        display: "inline-block",
        padding: "2px",
        width: "100%",
    }

    const productsByCategory = GroupByKey(props.products.products, "category");
    const result = new Array<any>();
    for (const category in productsByCategory) {
        // tslint:disable-next-line
        console.log("Product Table", props.filterText);
        
        result.push(<ProductCategoryRow key={uuid()} categoryName={category} />);
        productsByCategory[category].map((value: any, i: number) => {
            // tslint:disable-next-line
            const findIn: string = value.name;
            if (findIn.toLowerCase().indexOf(props.filterText !== undefined ? props.filterText.toLowerCase() : "") !== -1) {
                result.push(<ProductRow key={uuid()} description={value.name} value={value.price} />)
            }
        });
    }
    return (
        <div style={style}>
            <RowTemplate description="Name" value="Price" />
            {result}
        </div>
    );
}