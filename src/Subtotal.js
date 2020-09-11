import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const [{ cart }] = useStateValue();
    const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({cart.length} items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <snmall className="subtotal__gift">
                            <input type="checkbox" /> This order conatains a
                            gift
                        </snmall>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e =>history.push("/payment")}> Proceed to Checkout</button>
        </div> 
    );
}

export default Subtotal;
