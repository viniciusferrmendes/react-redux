import React from "react";

import products from "../../data/products";

import "./ProductsTable.css";

export default props => {
    const listItems = products.map(({ id, name, price }, i) => {
        return (
            <tr key={id} className={i % 2 === 0 ? "Even" : ""}>
                <td>{id}</td>
                <td>{name}</td>
                <td>${price.toFixed(2)}</td>
            </tr>
        );
    });

    return (
        <div className="ProductsTable">
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    );
}
