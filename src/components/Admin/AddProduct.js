import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const [imageURL, setImageURL] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const productData = {
            name: data.name, 
            price: data.price,
            imageURL: imageURL
        }

        fetch('http://localhost:5055/addProduct', {
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

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className="container row">

            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <h3>Add Product</h3>
                <input name="name" type="text" ref={register({ required: true })} />
                {errors.name && <span>This field is required</span>}
                <br />
                <input name="price" type="text" ref={register({ required: true })} />
                {errors.price && <span>This field is required</span>}
                <br />
                <input name="image" type="file" onChange={handleImageUploaded} />
                {errors.image && <span>This field is required</span>}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;