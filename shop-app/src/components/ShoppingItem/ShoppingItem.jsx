import React from "react";

const ShoppingItem = (props) => {
    const {
        id,
        name,
        price, 
        quantity
    } = props;

    return(
        <li className="list-group-item">{name} x{quantity} = {price} 
        <span><i class="bi bi-x"></i></span>
        </li>
    )
}

export default ShoppingItem;