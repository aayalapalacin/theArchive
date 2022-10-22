import React, { useState } from 'react'

///// TODO ADD CONDITIONAL HIDE TO MESSAGE TO PICK SIZE IN BUTTONS

const ShippingAndQuantity = ({}) => {
    const [shippingMethod, setShippingMethod] = useState() //0 for store pickup, 1 for delivery

    return (
        <div>
            <label>
                <input
                    type='radio'
                    name='shippingMethod'
                    checked={shippingMethod == 0}
                />
                <div>Pickup In-Store</div> 
                <div className="">Select item to see if item is in stock</div> 
            </label>
            <label>
                <input
                    type='radio'
                    name='shippingMethod'
                    checked={shippingMethod == 0}
                />
                <div>Ship</div>
                <div className="">Select item to see if item is in stock</div> 
            </label>
        </div>
    )
}

export default ShippingAndQuantity;