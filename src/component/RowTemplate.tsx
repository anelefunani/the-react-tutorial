import * as React from "react";

interface IProps {
    description: string,
    value: string,
    style?: any,
}

export const RowTemplate = (props: IProps) => {
    const rowStyle: any = {
        fontSize: "1.5em",
        listStyle: "none",
    }
    const spanStyle: any = {
        // border: "1px solid red",
        display: "block",
        float: "left",
        margin: "2px",
        padding: "5px 10px",
        textAlign: "left",
        width: "49%"
    }
    return (
        <ul style={rowStyle} className="list-group">
            <li><span className="list-group-item" style={spanStyle} >{props.description}</span><span className="list-group-item" style={spanStyle} >{props.value}</span></li>
        </ul>
    );
}