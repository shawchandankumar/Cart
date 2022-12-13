import React from 'react';

const CartItem = (props) => {

    const { price, qty, title, img } = props.product;
    const { onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct, product } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img} />
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}} >{title}</div>
                <div style={{color: "#777"}} >Rs {price}</div>
                <div style={{color: "#777"}} >Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img alt='increase' onClick={() => onIncreaseQuantity(product)} className="actions-icons" src='https://cdn-icons-png.flaticon.com/512/992/992651.png' />
                    <img alt='decrease' onClick={() => onDecreaseQuantity(product)} className="actions-icons" src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />
                    <img alt='delete' onClick={() => onDeleteProduct(product.id)} className="actions-icons" src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: "#ccc"
    }
}

export default CartItem;