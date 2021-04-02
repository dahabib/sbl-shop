import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Product from '../Product/Product';


const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://immense-river-37251.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;