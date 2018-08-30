import * as React from "react";


export class SearchBar extends React.Component<any, {}> {
    
    constructor(props: any) {
        super(props);
    }

    public render() {
        const border = {
            // border: "2px solid blue",
            // margin: "2px",
            // padding: "5px",
        }
        const inputStyle = {
            margin: "0px 300px",
        }
        return (
            <div style={border}>
                <div className="form-group" style={inputStyle}>
                    <input  className="form-control col" type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                </div>
                <div className="form-check">
                    <span><input className="form-check-input" type="checkbox" value={this.props.inStockOnly} onChange={this.handleOnlyInStockChange} /></span>
                    <label className="form-check-label" >Show only in stock</label>
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