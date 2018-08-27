import * as React from "react";

export const Mock = (props: any) => {
    const s1: any = {
        fontSize: "0.8em",
        padding: "0px 430px"
    }
    const s2: any = {
        color: "red"
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Search..." />
            </div>
            <div>
                <span><input type="checkbox" /> Only show products in stock</span>
            </div>
            <div style={s1}>
                <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Sporting Goods</td><td />
                    </tr>
                    <tr>
                        <td>Football</td>
                        <td>$49.99</td>
                    </tr>
                    <tr>
                        <td style={s2}>Baseball</td>
                        <td>$9.99</td>
                    </tr>
                    <tr>
                        <td>Basketball</td>
                        <td>$29.99</td>
                    </tr>
                    <tr>
                        <td>Football</td>
                        <td>$49.99</td>
                    </tr>
                    <tr>
                        <td>Electronics</td><td />
                    </tr>
                    <tr>
                        <td>iPod Touch</td>
                        <td>$99.99</td>
                    </tr>
                    <tr>
                        <td style={s2}>iPhone</td>
                        <td>$399.99</td>
                    </tr>
                    <tr>
                        <td>Nexus 7</td>
                        <td>$199.99</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}