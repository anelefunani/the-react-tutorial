import * as React from "react";

export const RowTemplate = (props: any) => {
    const rowStyle: any = {
        fontSize: "1.5em",
        position: "relative",
    }
    const spanStyle: any = {
        border: "1px solid red",
        display: "block",
        float: "left",
        margin: "2px",
        padding: "5px 10px",
        position: "relative",
        textAlign: "left",
        width: "49%"
    }
    return (
        <div style={rowStyle}>
            <span style={spanStyle}>{props.description}</span><span style={spanStyle}>{props.detail}</span>
        </div>
    );
} 