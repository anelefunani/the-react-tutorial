import * as React from "react";
import * as uuid from "uuid";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import { RowTemplate } from "./RowTemplate";

import { IProducts } from "../common/IProducts";
import { GroupByKey } from "../common/utils/Utils";

interface IProps {
    products: IProducts
}

export const ProductTable = (props: IProps) => {
    const style: any = {
        border: "2px solid lightGreen",
        display: "inline-block",
        padding: "2px",
        width: "100%",
    }

    const productsByCategory = GroupByKey(props.products.products, "category");

    const result = new Array<any>();
    for (const category in productsByCategory) {
        result.push(<ProductCategoryRow key={uuid()} categoryName={category} />);
        productsByCategory[category].map((value: any, i: number) => {
            // tslint:disable-next-line
            result.push(<ProductRow key={uuid()} description={value.name} value={value.price} />)
        });
    }
    return (
        <div style={style}>
            <RowTemplate description="Name" value="Price" />
            {result}
        </div>
    );
}