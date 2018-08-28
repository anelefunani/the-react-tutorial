import * as React from "react";

interface IProps {
    description: string,
    value: string,
    style?: any,
}

export const RowTemplate = (props: IProps) => {
    const rowStyle: any = {
        fontSize: "1.5em",
    }
    const spanStyle: any = {
        border: "1px solid red",
        display: "block",
        float: "left",
        margin: "2px",
        padding: "5px 10px",
        textAlign: "left",
        width: "49%"
    }
    return (
        <div style={rowStyle}>
            <span style={spanStyle}>{props.description}</span><span style={spanStyle}>{props.value}</span>
        </div>
    );
}