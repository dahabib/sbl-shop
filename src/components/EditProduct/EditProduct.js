import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const EditProduct = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 bg-dark vh-100">
                <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 text-white"><Link to="admin">Dashboard</Link></div>
                        <div class="p-2 text-white"><Link to="/add-product">Add Product</Link></div>
                        <div class="p-2 text-white"><Link to="/edit-product">Edit Product</Link></div>
                    </div>
                </div>
                <div className="col-md-9">
                    
                </div>
            </div>
        </div>
    );
};

export default EditProduct;