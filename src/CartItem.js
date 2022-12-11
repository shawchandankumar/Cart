import React from 'react';

class CartItem extends React.Component {

    constructor () {
        super ();
        this.state = {
            price: 999,
            qty: 1,
            title: 'Mobile Phone',
            img: ''
        }
    }

    render () {
        const { price, qty, title } = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}} >{title}</div>
                    <div style={{color: "#777"}} >Rs {price}</div>
                    <div style={{color: "#777"}} >Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt='increase' onClick={() => this.setState({ qty: qty + 1, price: 999 * qty})} className="actions-icons" src='https://cdn-icons-png.flaticon.com/512/992/992651.png' />
                        <img alt='decrease' onClick={() => this.setState({ qty: qty - 1, price: 999 * qty
                            })} className="actions-icons" src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />
                        <img alt='delete' className="actions-icons" src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' />
                    </div>
                </div>
            </div>
        );
    }
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