import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { product, increaseQuantity, decreaseQuantity, deleteProduct } = props;

    return (
        <div className="cart">
            {product.map((product) => {
                return <CartItem
                product={product}
                key={product.id}
                onIncreaseQuantity={increaseQuantity}
                onDecreaseQuantity={decreaseQuantity}
                onDeleteProduct={deleteProduct}
                />
            })}
        </div>
    );
}


export default Cart;