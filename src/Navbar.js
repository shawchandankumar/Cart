import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav} className='navbar'>
            <div style={styles.cartIcon} className='cart-icon'>
                <img style={styles.cart} src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt='cart-icon' />
                <span style={styles.itemCount} className='item-count'>{props.itemCount}</span>
            </div>
        </div>
    );
}

const styles = {
    nav: {
        height: 70,
        backgroundColor: '#4267b2', 
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIcon: {
        position: 'relative'
    },
    cart: {
        height: 40,
        marginRight: 20
    },
    itemCount: {
        borderRadius: '50%', 
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: 'yellow',
        padding: '5px 5px',
        fontSize: 10,
        fontWeight: 'bold'
    }
}

export default Navbar;