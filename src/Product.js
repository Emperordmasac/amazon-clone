import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ image, rating, id, price, title }) {
    const [{}, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* to fill in the number of based on the amount of rating the product has*/}
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt=""></img>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;
