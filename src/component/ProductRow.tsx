import * as React from "react";
import { RowTemplate } from "./RowTemplate";

export const ProductRow = (props: any) => {
    const style = {
        border: "1px solid red",
        position: "relative",
    }
    return (
        <RowTemplate style={style} description={props.description} detail={props.detail} />
    );
}