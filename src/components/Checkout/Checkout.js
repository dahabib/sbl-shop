import React from 'react';

const Checkout = () => {
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
                        <tr class="table-active">
                            <td>Description</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;