import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super ();
        this.state = {
            product: [
                {
                    price: 999,
                    qty: 1,
                    title: 'Mobile Phone',
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    qty: 10,
                    title: 'watch',
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    qty: 2,
                    title: 'Laptop',
                    img: '',
                    id: 3
                }
            ]
        }
    }

    increaseQuantity = (prod) => {
        const {product} = this.state;

        const index = product.indexOf(prod);
        product[index].qty += 1;
        this.setState({
            product
        });
    }

    decreaseQuantity = (prod) => {
        if (prod.qty === 0) return;

        const {product} = this.state;

        const index = product.indexOf(prod);
        product[index].qty -= 1;
        this.setState({
            product
        });
    }

    deleteProduct = (id) => {
        const {product} = this.state;

        const products = product.filter((prod) => prod.id !== id);
        this.setState({
            product: products
        });
    }

    render () {
        const {product} = this.state;
        console.log(product);
        return (
            <div className="cart">
                {product.map((product) => {
                    return <CartItem
                    product={product}
                    key={product.id}
                    onIncreaseQuantity={this.increaseQuantity}
                    onDecreaseQuantity={this.decreaseQuantity}
                    onDeleteProduct={this.deleteProduct}
                    />
                })}
            </div>
        );
    }
}

export default Cart;