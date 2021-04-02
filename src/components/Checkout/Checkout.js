import { data } from 'jquery';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    
    const productID = window.location.pathname.slice(10, 35);

    const orderDetails = {...loggedInUser, order, orderTime: new Date()};

    const hanclePlaceOrder = () => {
        fetch('https://immense-river-37251.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your order placed successfully');
            }
        })
    }

    useEffect(() => {
        const url = `https://immense-river-37251.herokuapp.com/product/${productID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [productID])

    return (
        <div className="container mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-5 rounded">
            <div className="row d-flex">
                <h3>Checkout Page</h3>
            </div>
            <div className="row d-flex">
                <table class="table table-striped table-hover">
                    <thead>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </thead>
                    <tbody>
                        <tr class="table">
                            <td>{order.name}</td>
                            <td>1</td>
                            <td>$ {order.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={ hanclePlaceOrder } type="submit">Place Order</button>
        </div>
    );
};

export default Checkout;