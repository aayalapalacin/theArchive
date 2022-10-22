import React from 'react'
import "../../styles/product_price.css";

const ProductPrice = ({product = {price: 98.00}}) => {
    return (
        <div className="product-price-container">
            <div className="product-price">${product.price.toFixed(2)}</div>
            <div className='afterpay'>
                <div>Or 4 installments of {Math.floor(product.price / 4).toFixed(2)} by</div>
                <a href=""><img src="https://assets2.brandfolder.io/bf-boulder-prod/4w7s7qmb5p8pjn5mzck5wt/v/1033828042/original/Afterpay_Badge_BlackonMint.png"></img></a>
            </div>
        </div>
    )
}

export default ProductPrice;