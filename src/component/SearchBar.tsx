import * as React from "react";

export const SearchBar = (props: any) => {
    const border = {
        border: "2px solid blue",
        margin: "2px",
        padding: "5px"
    }
    return (
        <div style={border}>
            <div>
                <input type="text" placeholder="Search..." />
            </div>
            <div>
                <span><input type="checkbox" /> Only show products in stock</span>
            </div>
        </div>
    );
}