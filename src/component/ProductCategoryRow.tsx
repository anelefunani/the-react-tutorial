import * as React from "react";

interface IProps {
    categoryName: string
}

export const ProductCategoryRow = (props: IProps) => {
    const rowStyle: any = {
        fontSize: "1.5em",
    }
    const spanStyle: any = {
        // border: "1px solid turquoise",
        display: "block",
        float: "left",
        padding: "5px 10px",
        textAlign: "center",
        width: "99%"
    }
    return (
        <div style={rowStyle} className="list-group">
            <span style={spanStyle} className="list-group-item">{props.categoryName}</span>
        </div>
    );
}