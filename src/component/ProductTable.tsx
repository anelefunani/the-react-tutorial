import * as React from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import { RowTemplate } from "./RowTemplate";

export const ProductTable = (props: any) => {
    const style: any = {
        border: "2px solid lightGreen",
        display: "inline-block",
        padding: "2px",
        width: "100%",
    }
    return (
        <div style={style}>
            <RowTemplate description="Name" detail="Price"/>
            <ProductCategoryRow productCategory="Sporting Goods"/>
            <ProductRow description="Football" detail="R49.99"/>
            <ProductRow description="Baseball" detail="R9.99"/>
            <ProductRow description="Basketball" detail="R29.99"/>
            <ProductCategoryRow productCategory="Electronics"/>
            <ProductRow description="iPod Touch" detail="R99.99"/>
            <ProductRow description="iPhone 5" detail="R399.99"/>
            <ProductRow description="Nexus 7" detail="R199.99"/>
        </div>
    );
}