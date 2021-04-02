import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Product = (props) => {
    const { _id, name, price, amount, imageURL} = props.product;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const url = `/checkout/${_id}`;
    return (
        <div className="card col-md-3 col-lg-3 h-100 rounded mb-3">
            <img className="card-img-top product-image" src={imageURL} alt="" />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{amount}</p>
            </div>
            <div className="row justify-content-between p-3">
                <h4>{price}</h4>
                <Link to={url} class="btn btn-primary rounded">Buy Now</Link>
            </div>
        </div>
    );
};

export default Product;