import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './AddProduct.css';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        const productData = {
            name: data.name,
            price: data.price,
            amount: data.amount,
            imageURL: imageURL
        }
        fetch('https://immense-river-37251.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
    }

    const handleImageUploaded = event => {
        const imageData = new FormData();
        imageData.set('key', '83ec49d1d7b42d082281e8ce8135c0cd');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">

            </div>
            <div className="row">
                <div className="col-md-2 bg-dark vh-100">
                    <div class="d-flex flex-column bd-highlight mb-3">
                        <div class="p-2 text-white"><Link to="admin">Dashboard</Link></div>
                        <div class="p-2 text-white"><Link to="/add-product">Add Product</Link></div>
                        <div class="p-2 text-white"><Link to="/edit-product">Edit Product</Link></div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-5 mx-auto rounded">
                    <div className="card hover-top-shadow hover-top-shadow-lg border-0 card-form"><img className="card-img-top card-img-curve" src="assets/img/gallery/photo-2.png" alt="" />
                        <div className="card-body p-4 pt-5">
                            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                                <h3>Add Product</h3>
                                <div className="row mb-4 d-flex justify-content-between">
                                    <div className="col w-50">
                                        <label for="name" class="form-label">Product Name</label>
                                        <input name="name" type="text" ref={register({ required: true })} className="form-control" id="name" placeholder="Product Name" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <div className="col w-50">
                                        <label for="amount" class="form-label">Product Amout</label>
                                        <input name="amount" type="text" ref={register({ required: true })} className="form-control" id="amount" placeholder="Product Amount" />
                                        {errors.amount && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="row mb-4 d-flex justify-content-between">
                                    <div className="col w-50">
                                        <label for="price" class="form-label">Product Price</label>
                                        <input name="price" type="text" ref={register({ required: true })} min="0" className="form-control" id="price" placeholder="Price" />
                                        {errors.price && <span>This field is required</span>}
                                    </div>
                                    <div className="col w-50">
                                        <div>
                                            <label class="form-label">Add Product Image</label>
                                        </div>
                                        <div>
                                            <label className="upload-label form-label" for="image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</label>
                                            <input name="image" type="file" ref={register({ required: true })} onChange={handleImageUploaded} className="form-control" id="image" hidden />
                                            {errors.image && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                {/* <input type="submit" /> */}
                                <button className="btn btn-block btn-success text-white" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AddProduct;