import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://immense-river-37251.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const TableRows = props => {
        const { name, price } = props.product;
        return (
            <tr class="table">
                <td>{name}</td>
                <td>1</td>
                <td>{price}</td>
            </tr>
        )
    }
    return (
        <div className="container mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-5 rounded">
            <div className="row d-flex">
                <h3>Your Order Details</h3>
            </div>
            <div className="row d-flex">
                <table class="table table-striped table-hover">
                    <thead>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </thead>
                    <tbody>
                        {
                            orders.map(pd => <TableRows product={pd.order}></TableRows>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;