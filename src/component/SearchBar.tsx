import * as React from "react";


export class SearchBar extends React.Component<any, {}> {
    
    constructor(props: any) {
        super(props);
    }

    public render() {
        const border = {
            border: "2px solid blue",
            margin: "2px",
            padding: "5px",
        }
        return (
            <div style={border}>
                <div>
                    <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                </div>
                <div>
                    <span><input type="checkbox" value={this.props.inStockOnly} onChange={this.handleOnlyInStockChange}/> Only show products in stock</span>
                </div>
            </div>
        );
    }

    public handleFilterTextChange = (e: any) => {
        // tslint:disable-next-line
        console.log(e.target.value);
        this.props.onFilterTextChange(e.target.value);
    }

    public handleOnlyInStockChange (e: any) {
        // tslint:disable-next-line
        console.log(e.target.checked);
        this.props.onOnlyInStockChange(e.target.checked);
    }
    
}