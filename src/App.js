import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import db from './index';
import { collection, getDocs, onSnapshot, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

class App extends React.Component {
    
    constructor () {
        super ();
        this.state = {
            product: [],
            loading: true
        }
    }

    productUpdateListener(db) {
        onSnapshot(collection(db, "Products"), (snapshot) => {
            const productList = snapshot.docs.map((doc) => {
                const data = doc.data();
                data['id'] = doc.id;
                return data;
            })

            this.setState({product: productList, loading: false})
        });
    }

    async getProducts(db) {
        const productsCol = collection(db, 'Products');
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;
            return data;
        });
        return productList;
    }

    componentDidMount () {
        this.productUpdateListener(db);
        // const productsPromise = this.getProducts(db);
        // productsPromise.then((product) => {
        //     this.setState({
        //         product,
        //         loading: false
        //     });
        // });
    }

    increaseQuantity = (prod) => {
        const { product } = this.state;
        const index = product.indexOf(prod);

        // product[index].qty += 1;
        // this.setState({
        //     product
        // });

        const docRef = doc(collection(db, 'Products'), product[index].id);
        // console.log(docRef);
        updateDoc(docRef, {qty: product[index].qty + 1})
        .then(() => console.log('Updated successfully'))
        .catch((error) => console.log('Error ', error));                                                               
    }

    decreaseQuantity = (prod) => {
        if (prod.qty === 0) return;

        const {product} = this.state;
        const index = product.indexOf(prod);

        // product[index].qty -= 1;
        // this.setState({
        //     product
        // });

        const docRef = doc(collection(db, 'Products'), product[index].id);
        // console.log(docRef);
        updateDoc(docRef, {qty: product[index].qty - 1})
        .then(() => console.log('Updated successfully'))
        .catch((error) => console.log('Error ', error)); 
    }

    deleteProduct = (id) => {
        const { product } = this.state;

        // const products = product.filter((prod) => prod.id !== id);
        // this.setState({
        //     product: products
        // });

        const docRef = doc(collection(db, 'Products'), id);
        
        deleteDoc(docRef)
            .then((data) => console.log('Deleted successfully', data))
            .catch((error) => console.log('Error ', error));
    }

    addProduct = () => {
        addDoc(collection(db, 'Products'), {
            title: 'Laptop',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe538WHcczfKyW_ft4NUszjFlfKkvWWyjbETjCGmL_&s',
            qty: 2,
            price: 200000
        })
        .then((docRef) => console.log('Added Document: ', docRef))
        .catch((error) => console.log(error));
    }

    render() {
      const {product, loading} = this.state;
      return (
        <div className="App">
          <Navbar itemCount={product.reduce((acc, prod) => acc + prod.qty, 0)} />
          <Cart product={product} 
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity= {this.decreaseQuantity}
            deleteProduct= {this.deleteProduct} 
          />
          {loading && <h1>Loading Products...</h1>}
          <div style={{paddingLeft: 20}}>Total: {product.reduce((acc, prod) => acc + (prod.qty * prod.price), 0)}</div>
          <button onClick={this.addProduct} style={{ padding: 20, margin: 10, fontSize: 20, backgroundColor: 'magenta' }}>Add Product</button>
        </div>
      );
    }
}

export default App;
