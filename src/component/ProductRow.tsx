import * as React from "react";
import { RowTemplate } from "./RowTemplate";

interface IProps {
    description: string,
    value: string
}
export const ProductRow = (props: IProps) => {
    const style:any = {
        // border: "1px solid red",
    }
    return (
        <RowTemplate style={style} description={props.description} value={props.value} />
    );
}