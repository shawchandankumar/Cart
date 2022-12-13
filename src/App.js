import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
      constructor () {
        super ();
        this.state = {
            product: [
                {
                    price: 999,
                    qty: 1,
                    title: 'Mobile Phone',
                    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                    id: 1
                },
                {
                    price: 99,
                    qty: 10,
                    title: 'watch',
                    img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
                    id: 2
                },
                {
                    price: 9999,
                    qty: 2,
                    title: 'Laptop',
                    img: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
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

    render() {
      const {product} = this.state;
      return (
        <div className="App">
          <Navbar itemCount={product.reduce((acc, prod) => acc + prod.qty, 0)} />
          <Cart product={product} 
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity= {this.decreaseQuantity}
            deleteProduct= {this.deleteProduct} 
          />
          <div style={{paddingLeft: 20}}>Total: {product.reduce((acc, prod) => acc + (prod.qty * prod.price), 0)}</div>
        </div>
      );
    }
}

export default App;
